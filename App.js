import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import ShopNavigator from "./navigation/ShopNavigator";

import productsReducer from "./store/reducers/products";

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
      {/* <View>
        <Text>A new app!</Text>
        <StatusBar style="auto" />
      </View> */}
    </Provider>
  );
}
