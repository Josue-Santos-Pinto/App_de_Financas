import React from "react";
import 'react-native-reanimated'
import Header from "./src/components/Header";
import Home from './src/pages/Home'

export default () => {
  return (
    <Home>
      <Header />
    </Home>
  )
}