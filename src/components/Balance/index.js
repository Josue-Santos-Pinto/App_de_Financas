import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
    background-color: #FFF;
    flex-direction: row;
    justify-content: space-between;
    padding-start: 18px;
    padding-end: 18px;
    margin-top: -24px;
    margin-start: 14px;
    margin-end: 14px;
    border-radius: 4px;
    padding-top: 22px;
    padding-bottom: 22px;
    z-index: 99;
`
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
        <Container>

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

        </Container>
    )
}