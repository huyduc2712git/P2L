import BottomSheet, { BottomSheetMethods } from "@components/BottomSheet/BottomSheet";
import React, { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, useWindowDimensions, View, ViewToken } from "react-native";
import { Source } from "react-native-fast-image";
import Animated, {
  scrollTo,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue
} from "react-native-reanimated";
import Carousel from "./Carousel";
import Pagination from "./Pagination";
import Pictures from "./Pictures";
import Gradient from "./Gradient";
import { IDataList } from "@data/dataList";
import { formatCurrency, formatSalePrice } from "@utils/formatCurrency";
import PaymentDetail from "./PaymentDetail";

interface DetailProps {
  bottomSheetRef?: React.RefObject<BottomSheetMethods>;
  dataList: IDataList;
}

const Detail = (props: DetailProps) => {
  const { dataList, bottomSheetRef } = props || {};
  const x = useSharedValue(0);
  const [data, setData] = useState(dataList?.images);
  const { width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useAnimatedRef<Animated.FlatList<any>>();
  const offset = useSharedValue(0);
  console.log("data", dataList);

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems[0].index !== undefined && viewableItems[0].index !== null) {
      setCurrentIndex(viewableItems[0].index % dataList?.images?.length);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50
  };

  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }]);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (e) => {
      x.value = e.contentOffset.x;
    },
    onMomentumEnd: (e) => {
      offset.value = e.contentOffset.x;
    }
  });

  useDerivedValue(() => {
    scrollTo(ref, offset.value, 0, true);
  });

  const onSelectedPicture = (index: number) => {
    const adjustedIndex = index % dataList?.images.length;
    setCurrentIndex(adjustedIndex);
    ref.current?.scrollToIndex({
      index: adjustedIndex,
      animated: false
    });
  };

  const onReset = () => {
    setCurrentIndex(0);
    ref.current?.scrollToIndex({ index: 0, animated: false });
  };

  return (
    <BottomSheet
      style={styles.container}
      isShowLine={false}
      ref={bottomSheetRef}
      snapTo={"90%"}
      backgroundColor={"white"}
      backDropColor={"black"}
      onClose={onReset}
    >
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
          {/* <Gradient /> */}
          <Pagination data={dataList?.images} paginationIndex={currentIndex} />
          <Animated.FlatList
            ref={ref}
            style={{ height: width, flexGrow: 0 }}
            onScroll={onScroll}
            scrollEventThrottle={16}
            horizontal={true}
            bounces={false}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
            onEndReached={() => setData([...data, ...dataList?.images])}
            onEndReachedThreshold={0.5}
            data={data}
            keyExtractor={(_, index) => `list_item${index}`}
            renderItem={({ item, index }) => {
              return <Carousel key={currentIndex} item={item} index={index} x={x} />;
            }}
          />
        </View>
        <Pictures onPress={onSelectedPicture} data={dataList?.images} currentIndex={currentIndex} />
        <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{dataList?.title}</Text>
          <Text style={{ marginTop: 8, fontSize: 16 }}>{dataList?.description}</Text>
          <Text
            style={{
              textDecorationLine: "line-through",
              marginTop: 8,
              fontSize: 16
            }}
          >
            {formatSalePrice(dataList?.salePrice)}
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontSize: 16
            }}
          >
            {formatCurrency(dataList?.price)}
          </Text>
        </View>
        <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{dataList?.title}</Text>
          <Text style={{ marginTop: 8, fontSize: 16 }}>{dataList?.description}</Text>
          <Text
            style={{
              textDecorationLine: "line-through",
              marginTop: 8,
              fontSize: 16
            }}
          >
            {formatSalePrice(dataList?.salePrice)}
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontSize: 16
            }}
          >
            {formatCurrency(dataList?.price)}
          </Text>
        </View>
        <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{dataList?.title}</Text>
          <Text style={{ marginTop: 8, fontSize: 16 }}>{dataList?.description}</Text>
          <Text
            style={{
              textDecorationLine: "line-through",
              marginTop: 8,
              fontSize: 16
            }}
          >
            {formatSalePrice(dataList?.salePrice)}
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontSize: 16
            }}
          >
            {formatCurrency(dataList?.price)}
          </Text>
        </View>
        <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{dataList?.title}</Text>
          <Text style={{ marginTop: 8, fontSize: 16 }}>{dataList?.description}</Text>
          <Text
            style={{
              textDecorationLine: "line-through",
              marginTop: 8,
              fontSize: 16
            }}
          >
            {formatSalePrice(dataList?.salePrice)}
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontSize: 16
            }}
          >
            {formatCurrency(dataList?.price)}
          </Text>
        </View>
      </ScrollView>
      <PaymentDetail />
    </BottomSheet>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  }
});
