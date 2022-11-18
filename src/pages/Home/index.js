import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import ListItem from '../../components/ListItem'
import C from './style'
import Actions from "../../components/Actions";
import { Context } from "../../contexts/Context";
import api from '../../api'
import { ScrollView } from "react-native-gesture-handler";



export default () => {

  const {state,dispatch} = useContext(Context) 
  const [list,setList] = useState(api)
    
  useEffect(()=>{
    setList(list)
  },[list])
    

    return (
        
        <C.Container theme={state.theme.status}>
            
            <Header/>
            <Balance saldo={parseFloat(state.balance.saldo).toFixed(2)} gastos={parseFloat(state.balance.gastos).toFixed(2)} theme={state.theme.status} />
            <Actions data={list} setList={setList}/>
            <C.Title theme={state.theme.status}>Ultimas movimentações</C.Title>

            <C.Listagem 
                data={list}
                renderItem={({item,index})=><ListItem data={item} />}
                keyExtractor={(item)=>String(item.id)}
                showsVerticalScrollIndicator={false}
            />
            
        </C.Container>
        
    )
}