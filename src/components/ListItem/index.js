import React, {useState} from "react";
import styled from "styled-components/native";

const Item = styled.TouchableOpacity`
    flex: 1;
    margin-bottom: 24px;
    border-bottom-width: 0.5px;
    border-bottom-color: #DADADA;
`
const ItemDate = styled.Text`
    color: #DADADA;
    font-weight: bold;
`
const Content = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2px;
    margin-bottom: 8px;
`
const Label = styled.Text`
    font-weight: bold;
    font-size: 16px;
`
const Value = styled.Text`
    font-size: 16px;
    color: ${props=>props.color};
    font-weight: bold;
`

export default ({data}) => {

    const [showValue,setShowValue] = useState(false)


    return (
        <Item>
            <ItemDate>{data.date}</ItemDate>
            <Content>
                <Label>{data.label}</Label>
                <Value color={data.type === 1 ? '#2ecc71' : '#e74c3c'}>
                    {data.type === 1 ? `R$ ${data.value}`: `R$ -${data.value}`}
                </Value>
            </Content>
        </Item>
    )
}