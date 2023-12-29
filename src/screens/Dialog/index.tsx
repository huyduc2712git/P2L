import React from "react";
import { View, Modal } from "react-native";

interface IDiaLogProps {
  showDialog?: (params: any) => void;
}
const DialogScreen = (props: IDiaLogProps, ref: any) => {
  const {} = props || {};
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [params, setParams] = React.useState<any>(false);

  const showDialog = (params: any) => {
    setParams(params);
    setModalVisible(true);
  };

  const closeDialog = (callback: any) => {
    setModalVisible(false);
  };
  React.useImperativeHandle(ref, () => ({
    showDialog,
    closeDialog,
  }));

  let Screen = View;
  if (params?.screen) {
    Screen = params.screen;
  }

  return (
    <>
      <Modal transparent visible={isModalVisible}>
        {<Screen {...(params || {})} closeDialog={closeDialog} />}
      </Modal>
    </>
  );
};

export default React.forwardRef(DialogScreen);
