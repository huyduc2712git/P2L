import AuthNavigator from "@navigation/AuthNavigator";
import store from "@redux/store";
import React from "react";
import { Text, TextInput } from "react-native";
import { Provider } from "react-redux";

// Text.defaultProps = Text.defaultProps || {};
// Text.defaultProps.allowFontScaling = false;
// TextInput.defaultProps = TextInput.defaultProps || {};
// TextInput.defaultProps.allowFontScaling = false;

const App = () => {
  return (
    <Provider store={store}>
      <AuthNavigator />
    </Provider>
  );
};
export default App;
