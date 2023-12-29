import AuthNavigator from "@navigation/AuthNavigator";
import store from "@redux/store";
import Dialog from "@screens/Dialog";
import React from "react";
import { Text, TextInput } from "react-native";
import { Provider } from "react-redux";
import AppNavigator from "@navigation/AppNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Text.defaultProps = Text.defaultProps || {};
// Text.defaultProps.allowFontScaling = false;
// TextInput.defaultProps = TextInput.defaultProps || {};
// TextInput.defaultProps.allowFontScaling = false;

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AuthNavigator />
        <Dialog ref={AppNavigator.setRefDialog} />
      </SafeAreaProvider>
    </Provider>
  );
};
export default App;
