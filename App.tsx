import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { Text, View } from "react-native";

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Users Explorer App</Text>
      </View>
    </Provider>
  );
};

export default App;