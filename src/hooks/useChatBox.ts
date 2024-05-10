import AppNavigator from "@navigation/AppNavigator";
import { ROUTES } from "@navigation/routes";
import { useEffect, useState } from "react";

const useChatBox = () => {
  const [textMessage, setTextMessage] = useState<string | "">("");

  useEffect(() => {
    console.log("textInput", textMessage);
  }, [textMessage]);

  const changeMessage = (text: string) => {
    setTextMessage(text);
  };

  return {
    textMessage,
    changeMessage
  };
};
export default useChatBox;
