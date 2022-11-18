import React, { useEffect, useState, useContext } from "react";
import PurchaseItem from "../../components/PurchaseItem";
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
            <C.PurchaseList 
                data={list}
                renderItem={({item,index})=><PurchaseItem data={item}/>}
                keyExtractor={(item)=>item.id}
            />
        </C.Container>
    )
}