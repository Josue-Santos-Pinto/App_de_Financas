import React, { useContext, useEffect, useState } from "react";
import ExpenseItem from "../../components/ExpenseItem";
import api from "../../api";
import C from './style'
import { Context } from "../../contexts/Context";
import { useRoute } from "@react-navigation/native";

export default () => {
    
    const {state,dispatch} = useContext(Context)
    
    const route = useRoute()

    const list = route.params.list
    

    return (
        <C.Container theme={state.theme.status}>
            <C.ExpenseList 
                data={list}
                renderItem={({item,index})=><ExpenseItem data={item}/>}
                keyExtractor={(item)=>item.id}
            />
        </C.Container>
    )
}