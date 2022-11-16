import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import {AntDesign} from '@expo/vector-icons'
import {MotiView,MotiText} from 'moti'
import { useNavigation } from "@react-navigation/native";
import { Context } from "../../contexts/Context";
import { Modal } from "react-native";

const Container = styled.ScrollView`
    max-height: 84px;
    margin-bottom: 14px;
    margin-top: 18px;
    padding-start: 14px;
    padding-end: 14px;
`
const Text = styled.Text`
    margin-top: 4px;
    text-align: center;
    font-weight: bold;
    color: ${props=>props.theme == 'light' ? '#000': '#FFF'};
`
const ActionButton = styled.TouchableOpacity`
    align-items: center;
    margin-right: 32px;
`
const AreaButton = styled.TouchableOpacity`
    background-color: ${props=>props.theme == 'light' ? '#ecf0f1':'#333'};
    height: 60px;
    width: 60px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`

export default () => {

    const navigation = useNavigation()
    const {state,dispatch} = useContext(Context)
    const [modal,setModal] = useState(false)

   

    return (
        <Container horizontal={true} showsHorizontalScrollIndicator={false} theme={state.theme.status}>           
                <ActionButton>
                    <AreaButton 
                    onPress={()=>navigation.navigate('Expense')}
                    theme={state.theme.status}>
                        <AntDesign name="addfolder" size={26} color={state.theme.status == 'light' ? '#000' : '#FFF'} />
                    </AreaButton>
                    <Text theme={state.theme.status}>Entradas</Text>
                </ActionButton>

                <ActionButton>
                    <AreaButton 
                    onPress={()=>navigation.navigate('Purchase')}
                    theme={state.theme.status}>
                        <AntDesign name="tagso" size={26} color={state.theme.status == 'light' ? '#000' : '#FFF'} />
                    </AreaButton>
                    <Text theme={state.theme.status}>Compras</Text>
                </ActionButton>

                <ActionButton>
                    <AreaButton 
                    onPress={()=>setModal(!modal)}
                    theme={state.theme.status}>
                        <AntDesign name="plus" size={26} color={state.theme.status == 'light' ? '#000' : '#FFF'} />
                    </AreaButton>
                    <Text theme={state.theme.status}>Adicionar</Text>
                </ActionButton>

                <ActionButton>
                    <AreaButton onPress={()=>navigation.navigate('Account')}
                                theme={state.theme.status}
                    >
                        <AntDesign name="setting" size={26} color={state.theme.status == 'light' ? '#000' : '#FFF'} />
                    </AreaButton>
                    <Text theme={state.theme.status}>Conta</Text>
                </ActionButton>
                <Modal
                    visible={modal}
                    transparent={false}
                >

                </Modal>
        </Container>
    )
}