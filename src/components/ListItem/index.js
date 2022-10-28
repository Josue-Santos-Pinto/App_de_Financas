import React, {useState,useEffect} from "react";
import styled from "styled-components/native";
import {MotiView,AnimatePresence,MotiText} from 'moti'

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

const Hide = styled.View`
    margin-top: 6px;
    width: 80px;
    height: 10px;
    background-color: #DADADA;
    border-radius: 8px;
`

export default ({data}) => {

    const [showValue,setShowValue] = useState(false)

    return (
        <Item onPress={()=>setShowValue(!showValue)}>
            <ItemDate>{data.date}</ItemDate>
            <Content>
                <Label>{data.label}</Label>
                {showValue ? (
                    <AnimatePresence exitBeforeEnter>
                        <MotiText 
                            style={{
                                fontSize: 16,
                                color: data.type === 1 ? '#2ecc71' : '#e74c3c',
                                fontWeight: 'bold'
                            }}
                            from={{
                                translateX: 100
                            }}
                            animate={{
                                translateX: 0
                            }} 
                            transition={{
                                type:'spring',
                                duration: 500
                            }}     
                        >
                        {data.type === 1 ? `R$ ${data.value}`: `R$ -${data.value}`}
                        </MotiText>
                    </AnimatePresence>
                ):(
                    <AnimatePresence exitBeforeEnter>
                        <Hide></Hide>
                    </AnimatePresence>
                )}
            </Content>
        </Item>
    )
}