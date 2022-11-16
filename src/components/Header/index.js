import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import {MotiView,MotiText} from 'moti'
import { Context } from "../../contexts/Context";
import { useContext } from "react";

const Container = styled.View`
    background-color: #8000ff;
    padding-top: ${props=>props.pad}px;
    flex-direction: row;
    padding-start: 16px;
    padding-end: 16px;
    padding-bottom: 46px;
`

const ButtonUser = styled.TouchableOpacity`
    width: 44px;
    height: 44px;
    background-color: rgba(255,255,255,0.5);
    justify-content: center;
    align-items: center;
    border-radius: 22px;
`
const Avatar = styled.Image`
    width: 100%;
    height: 100%;
`

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default () => {
    const {state,dispatch} = useContext(Context)

    return(
        <Container pad={statusBarHeight}>
            <MotiView 
            style={{  
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
            from={{
                translateY: -150,
                opacity: 0
            }}
            animate={{
                translateY: 0,
                opacity: 1
            }} 
            transition={{
                type:'timing',
                duration: 800,
                delay: 200
            }}                   
            >
                <MotiText
                    style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color:'#FFF'
                    }}
                    from={{
                        translateX: -300
                    }}
                    animate={{
                        translateX: 0 
                    }} 
                    transition={{
                        type:'timing',
                        duration: 800,
                        delay: 800
                    }}       
                >
                    {state.user.name}
                </MotiText>
                <ButtonUser activeOpacity={0.9}>
                    <Avatar 
                        source={require('../../assets/avatar.png')}
                        resizeMode='contain'
                    />
                </ButtonUser>
            </MotiView>
        </Container>
    )

}