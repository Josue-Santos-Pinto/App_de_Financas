import React from "react";
import styled from "styled-components/native";
import {AntDesign} from '@expo/vector-icons'
import {MotiView,MotiText} from 'moti'

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
`
const ActionButton = styled.TouchableOpacity`
    align-items: center;
    margin-right: 32px;
`
const AreaButton = styled.View`
    background-color: #ecf0f1;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`

export default () => {
    return (
        <Container horizontal={true} showsHorizontalScrollIndicator={false}>           
                <ActionButton>
                    <AreaButton>
                        <AntDesign name="addfolder" size={26} color='#000' />
                    </AreaButton>
                    <Text>Entradas</Text>
                </ActionButton>

                <ActionButton>
                    <AreaButton>
                        <AntDesign name="tagso" size={26} color='#000' />
                    </AreaButton>
                    <Text>Compras</Text>
                </ActionButton>

                <ActionButton>
                    <AreaButton>
                        <AntDesign name="creditcard" size={26} color='#000' />
                    </AreaButton>
                    <Text>Carteira</Text>
                </ActionButton>

                <ActionButton>
                    <AreaButton>
                        <AntDesign name="barcode" size={26} color='#000' />
                    </AreaButton>
                    <Text>Boletos</Text>
                </ActionButton>

                <ActionButton>
                    <AreaButton>
                        <AntDesign name="setting" size={26} color='#000' />
                    </AreaButton>
                    <Text>Conta</Text>
                </ActionButton>
        </Container>
    )
}