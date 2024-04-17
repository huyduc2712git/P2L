import AppNavigator from "@navigation/AppNavigator";
import { ROUTES } from "@navigation/routes";
import { useState } from "react";

const useATSpeak = () => {
  const [wordText, setWordText] = useState<String | "">("");

  const changeWord = (text: string) => {
    setWordText(text);
  };

  return {
    wordText,
    changeWord,
  };
};
export default useATSpeak;
