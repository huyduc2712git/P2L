import AuthNavigator from "@navigation/AuthNavigator";
import Dialog from "@screens/Dialog";
import React from "react";
import { Provider } from "react-redux";
import AppNavigator from "@navigation/AppNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "@app/store";

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
