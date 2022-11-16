import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Account from "../pages/Account";
import Home from "../pages/Home";


export default () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Account" component={Account} options={{title:'Minha Conta',headerStyle:{backgroundColor: '#8000ff'},headerTintColor:'#FFF'}} />
        </Stack.Navigator>
    )
}