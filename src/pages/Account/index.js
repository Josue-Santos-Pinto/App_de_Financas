import React,{useState,useContext, useEffect} from "react";
import C from './style'
import { Context } from "../../contexts/Context";
import { Switch } from "react-native";

export default () => {

    const {state,dispatch} = useContext(Context)

    const [isDark,setIsDark] = useState(false)

   

    useEffect(()=>{
        if(state.theme.status == 'light'){
            setIsDark(false)
        } else {
            setIsDark(true)
        }
    },[])

    useEffect(()=>{
        const toogleTheme = () => {
            if(isDark == false){
                dispatch({
                    type:'CHANGE_STATUS',
                    payload:{
                        status:'light'
                    }
                })
            } else {
                dispatch({
                    type:'CHANGE_STATUS',
                    payload:{
                        status:'dark'
                    }
                })
            }
        
        }
        toogleTheme()
    },[isDark])

    

    return (
        <C.Container theme={state.theme.status}>

            <C.AvatarArea>
                <C.Avatar 
                    source={require('../../assets/avatar.png')}
                    resizeMode='contain'
                />
            </C.AvatarArea>

            <C.InfoArea>
                <C.InfoText theme={state.theme.status}>Nome: </C.InfoText>
                <C.InfoValue theme={state.theme.status}>{state.user.name}</C.InfoValue>
            </C.InfoArea>

            <C.InfoArea>
                <C.InfoText theme={state.theme.status}>Email: </C.InfoText>
                <C.InfoValue theme={state.theme.status}>{state.user.email}</C.InfoValue>
            </C.InfoArea>

            <C.InfoArea>
                <C.InfoText theme={state.theme.status}>Tema</C.InfoText>
                <Switch 
                    trackColor={{true:'#FFF',false: 'grey'}}
                    thumbColor={isDark ? '#CCC':'#FFF'}
                    onValueChange={()=>setIsDark(!isDark)}
                    value={isDark}
                />
            </C.InfoArea>

        </C.Container>
    )
}