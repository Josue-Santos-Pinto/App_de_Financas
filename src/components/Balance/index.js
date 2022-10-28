import React from "react";
import styled from "styled-components/native";
import {MotiView,MotiText} from 'moti'


const Item = styled.View``
const ItemTitle = styled.Text`
    font-size: 20px;
    color: #DADADA;
`
const Content = styled.View`
    flex-direction: row;
    align-items: center;
`
const ItemSymbol = styled.Text`
    color: #DADADA;
    margin-right: 6px;
`
const ItemBalance = styled.Text`
    font-size: 22px;
    color: ${props=>props.color};
`


export default ({saldo,gastos}) => {
    return (
        <MotiView
            style={{
                backgroundColor: '#FFF',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingStart: 18,
                paddingEnd: 18,
                marginTop: -24,
                marginStart: 14,
                marginEnd: 14,
                borderRadius: 4,
                paddingTop: 22,
                paddingBottom: 22,
                zIndex: 99
            }}
            from={{
                rotateX: '-100deg',
                opacity: 0
            }}
            animate={{
                rotateX: '0deg',
                opacity: 1
            }} 
            transition={{
                type:'timing',
                duration: 900,
                delay: 300
            }}     
        >

            <Item>
                <ItemTitle>Saldo</ItemTitle>
                <Content>
                    <ItemSymbol>R$</ItemSymbol>
                    <ItemBalance color={'#2ecc71'}>{saldo}</ItemBalance>
                </Content>
            </Item>

            <Item>
                <ItemTitle>Gastos</ItemTitle>
                <Content>
                    <ItemSymbol>R$</ItemSymbol>
                    <ItemBalance color={'#e74c3c'}>{gastos}</ItemBalance>
                </Content>
            </Item>

        </MotiView>
    )
}