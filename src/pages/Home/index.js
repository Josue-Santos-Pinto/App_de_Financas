import React from "react";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import ListItem from '../../components/ListItem'
import C from './style'

// type 0 = despesas / type 1 = ganhos

const list = [
    { id: 1, label: 'Boleto Conta de Luz', value: '300,90',date:'17/09/2022',type: 0 },
    { id: 2, label: 'Pix Cliente X', value: '2.500,00',date:'20/09/2022',type: 1 },
    { id: 3, label: 'Salario', value: '7.500,00',date:'22/09/2022',type: 1 },
]

export default () => {
    return (
        <C.Container>
            <Header name={'Josué Santos'} />
            <Balance saldo='9.250,90' gastos='-527,00' />
            <C.Title>Ultimas movimentações</C.Title>

            <C.Listagem 
                data={list}
                renderItem={({item,index})=><ListItem data={item} />}
                keyExtractor={(item)=>String(item.id)}
            />
        </C.Container>
    )
}