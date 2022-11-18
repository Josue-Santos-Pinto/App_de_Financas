import React, { useContext, useEffect, useState,useRef } from "react";
import styled from "styled-components/native";
import {AntDesign} from '@expo/vector-icons'
import {MotiView,MotiText} from 'moti'
import { useNavigation } from "@react-navigation/native";
import { Context } from "../../contexts/Context";
import { Modal } from "react-native";
import {TextInputMask} from 'react-native-masked-text'
import { Picker } from "@react-native-picker/picker";

const Container = styled.ScrollView`
    height: 100px;
    max-height: 104px;
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
const ModalArea = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${props=>props.theme == 'light' ? '#ecf0f1':'#333'};
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
const TitleArea = styled.View`
    height: 50px;
    width: 100%;
    justify-content: center;
    align-items: center;
`
const Title = styled.Text`
    font-size: 22px;
    color: ${props=>props.theme == 'light' ? '#000': '#FFF'};
`
const AddItem = styled.View`
    padding-left: 5px;
    padding-right: 5px;
`
const AddItemTitle = styled.Text`
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: ${props=>props.theme == 'light' ? '#000': '#FFF'};
`
const AddItemValue = styled.TextInput`
    border: 1px solid ;
    border-color:${props=>props.theme == 'light' ? '#000': '#FFF'};
    padding: 5px;
    width: 98%;
    border-radius: 5px;
    color: ${props=>props.theme == 'light' ? '#000': '#FFF'};
`
const AddButtonArea = styled.TouchableOpacity`
    width: 100%;
    height: 100px;
    justify-content: center;
    align-items:center;
`
const AddButton = styled.TouchableOpacity`
    width: 200px;
    height: 50px;
    background-color: #8000ff;
    justify-content: center;
    align-items:center;
    border-radius: 10px;
`
const AddButtonText = styled.Text`
    color: #FFF;
`

export default (props) => {

    const navigation = useNavigation()
    const {state,dispatch} = useContext(Context)
    const [modal,setModal] = useState(false)
    const [title,setTitle] = useState('')
    const [price,setPrice] = useState('')
    const [type,setType] = useState(0)
    const [unmaskedPrice,setUnmaskedPrice] = useState('')
    const priceRef = useRef()

    const list = props.data

    useEffect(()=>{
        if(price ){
            const unmask = priceRef?.current.getRawValue()
            setUnmaskedPrice(unmask)
        }
        
    },[price])
    

   const handleSubmit = () => {
   
    if((title.trim() != '')&&(price != '')){
        let items = [...props.data]
        items.push({
            id:props.data.length + 1,
            date:'17/10/2022',
            label: title,
            type: type,
            value: unmaskedPrice
        })
        props.setList(items)
        console.log(items)
        setTitle('')
        setPrice('')
        setModal(false)
    } else {
        alert('Preencha os Campos')
    }
    
    
   }

    return (
        <Container horizontal={true} showsHorizontalScrollIndicator={false} theme={state.theme.status}>           
                <ActionButton>
                    <AreaButton 
                    onPress={()=>navigation.navigate('Expense',{list})}
                    theme={state.theme.status}>
                        <AntDesign name="addfolder" size={26} color={state.theme.status == 'light' ? '#000' : '#FFF'} />
                    </AreaButton>
                    <Text theme={state.theme.status}>Entradas</Text>
                </ActionButton>

                <ActionButton>
                    <AreaButton 
                    onPress={()=>navigation.navigate('Purchase',{list})}
                    theme={state.theme.status}>
                        <AntDesign name="tagso" size={26} color={state.theme.status == 'light' ? '#000' : '#FFF'} />
                    </AreaButton>
                    <Text theme={state.theme.status}>Saídas</Text>
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
                    animationType='fade'
                    transparent={false}
                    onRequestClose={() => {
                        setModal(false);
                    }}
                >
                    <ModalArea theme={state.theme.status} >
                    <TitleArea>
                        <Title theme={state.theme.status}>Adicionar nova transação</Title>
                    </TitleArea>
                    
                    <AddItem>
                        <AddItemTitle theme={state.theme.status}>Titulo</AddItemTitle>
                        <AddItemValue 
                            value={title}
                            onChangeText={(e)=>setTitle(e)}
                            theme={state.theme.status}
                            placeholder='Ex: Compra de um carro'
                            placeholderTextColor='#CCC'
                        />
                    </AddItem>
                    <AddItem>
                        <AddItemTitle theme={state.theme.status}>Preço</AddItemTitle>
                        <TextInputMask 
                        style={{width:150,height: 40,borderWidth: 1,borderColor: state.theme.status == 'light' ? '#000': '#FFF',borderRadius: 5,padding: 10,color: state.theme.status == 'light' ? '#000': '#FFF'}}
                        type={'money'}
                        options={{
                            maskType:'BRL'
                        }}
                        value={price}
                        onChangeText={text => setPrice(text)}
                        ref={priceRef}
                        placeholder='R$'
                        placeholderTextColor='#CCC'
                    />
                    </AddItem>
                    <AddItem>
                    <Picker
                    selectedValue={type}
                    style={{width:200,height:50,marginTop: 10,color:state.theme.status == 'light' ? '#000': '#FFF'}}
                    dropdownIconColor={state.theme.status == 'light' ? '#000': '#FFF'}

                    onValueChange={(itemValue)=>setType(itemValue)}
                   >
                    <Picker.Item key={0} label={'Ganho'} value={1} />
                    <Picker.Item key={1} label={'Gasto'} value={0} /> 
                   

                   </Picker>
                    </AddItem>
                    <AddButtonArea >
                        <AddButton onPress={handleSubmit}>
                            <AddButtonText>Adicionar</AddButtonText>
                        </AddButton>
                    </AddButtonArea>
                    </ModalArea>
                </Modal>
        </Container>
    )
}