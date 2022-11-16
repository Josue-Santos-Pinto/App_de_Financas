import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Account from "../pages/Account";
import Home from "../pages/Home";
import Expense from "../pages/Expense";
import Purchase from '../pages/Purchase'

export default () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator  screenOptions={{
            headerStyle:{backgroundColor: '#8000ff'},
            headerTintColor:'#FFF'
        }}>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Account" component={Account} options={{title:'Minha Conta'}}/>
            <Stack.Screen name="Expense" component={Expense} />
            <Stack.Screen name="Purchase" component={Purchase} />
        </Stack.Navigator>
    )
}