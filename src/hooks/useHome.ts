import { useState } from "react";

const useHome = () => {
  const [isHeartFocus, setHeartFocus] = useState(false);

  const onFocusHeart = () => {
    setHeartFocus(!isHeartFocus)
  }
   return {
    isHeartFocus,
    onFocusHeart,
   };
};
export default useHome;
