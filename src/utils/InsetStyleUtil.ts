import { useMemo } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const InsetStyleUtil = () => {
  const insets = useSafeAreaInsets();

  const insetStyle = useMemo(() => {
    return { paddingBottom: insets.bottom, paddingTop: insets.top };
  }, [insets.bottom, insets.top]);

  return insetStyle;
};

export default InsetStyleUtil;
