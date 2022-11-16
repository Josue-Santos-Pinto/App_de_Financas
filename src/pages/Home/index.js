import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import ListItem from '../../components/ListItem'
import C from './style'
import Actions from "../../components/Actions";
import { Context } from "../../contexts/Context";

// type 0 = despesas / type 1 = ganhos

const list = [
    { id: 1, label: 'Boleto Conta de Luz', value: 300.90,date:'17/09/2022',type: 0 },
    { id: 2, label: 'Pix Cliente X', value: 2500.00,date:'20/09/2022',type: 1 },
    { id: 3, label: 'Salario', value: 7500.00,date:'22/09/2022',type: 1 },
]



export default () => {

  const {state,dispatch} = useContext(Context) 
  
    
    

    return (
        <C.Container theme={state.theme.status}>
            <Header/>
            <Balance saldo={parseFloat(state.balance.saldo).toFixed(2)} gastos={parseFloat(state.balance.gastos).toFixed(2)} theme={state.theme.status} />
            <Actions />
            <C.Title theme={state.theme.status}>Ultimas movimentações</C.Title>

            <C.Listagem 
                data={list}
                renderItem={({item,index})=><ListItem data={item} />}
                keyExtractor={(item)=>String(item.id)}
            />
        </C.Container>
    )
}