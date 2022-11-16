import React, { useContext, useEffect, useState } from "react";
import ExpenseItem from "../../components/ExpenseItem";
import api from "../../api";
import C from './style'
import { Context } from "../../contexts/Context";

export default () => {
    
    const {state,dispatch} = useContext(Context)
    
    const [list,setList] = useState(api)
    

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