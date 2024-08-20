import BottomSheet, { BottomSheetMethods } from "@components/BottomSheet/BottomSheet";
import React, { useRef, useState } from "react";
import { StyleSheet, useWindowDimensions, ViewToken } from "react-native";
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

interface DetailProps {
  bottomSheetRef?: React.RefObject<BottomSheetMethods>;
  imageData: Source[];
}

const Detail = (props: DetailProps) => {
  const { imageData, bottomSheetRef } = props || {};
  const x = useSharedValue(0);
  const [data, setData] = useState(imageData);
  const { width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useAnimatedRef<Animated.FlatList<any>>();
  const offset = useSharedValue(0);

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems[0].index !== undefined && viewableItems[0].index !== null) {
      setCurrentIndex(viewableItems[0].index % imageData?.length);
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

  return (
    <>
      <BottomSheet
        style={styles.container}
        isShowLine={false}
        ref={bottomSheetRef}
        snapTo={"90%"}
        backgroundColor={"white"}
        backDropColor={"black"}
      >
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
          onEndReached={() => setData([...data, ...imageData])}
          onEndReachedThreshold={0.5}
          data={data}
          keyExtractor={(_, index) => `list_item${index}`}
          renderItem={({ item, index }) => {
            return <Carousel item={item} index={index} x={x} />;
          }}
        />
        <Pagination data={imageData} paginationIndex={currentIndex} />
        <Pictures data={imageData} currentIndex={currentIndex} />
      </BottomSheet>
    </>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  }
});
