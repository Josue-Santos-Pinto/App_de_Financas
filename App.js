import React from "react";
import 'react-native-reanimated'
import Header from "./src/components/Header";
import Home from './src/pages/Home'
import 'react-native-gesture-handler';
import MainStack from "./src/stack/MainStack";
import { NavigationContainer } from "@react-navigation/native";
import { ContextProvider } from "./src/contexts/Context";

export default () => {
  return (
    <ContextProvider>
      <NavigationContainer>
          <MainStack />
      </NavigationContainer>
    </ContextProvider>
  )
}