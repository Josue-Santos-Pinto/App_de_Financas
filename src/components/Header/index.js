import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'

const Container = styled.View`
    background-color: #8000ff;
    padding-top: ${props=>props.pad}px;
    flex-direction: row;
    padding-start: 16px;
    padding-end: 16px;
    padding-bottom: 46px;
`
const Content = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const Username = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #FFF;
`
const ButtonUser = styled.TouchableOpacity`
    width: 44px;
    height: 44px;
    background-color: rgba(255,255,255,0.5);
    justify-content: center;
    align-items: center;
    border-radius: 22px;
`

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default ({name}) => {
    return(
        <Container pad={statusBarHeight}>
            <Content>
                <Username>{name}</Username>
                <ButtonUser activeOpacity={0.9}>
                    <Feather name="user" size={27} color='#FFF' />
                </ButtonUser>
            </Content>
        </Container>
    )

}