import styled from "styled-components/native"

export default {
    Container: styled.View`
        flex: 1;
        background-color: ${props=>props.theme == 'light'? '#FAFAFA': '#202225'};
        padding-left: 20px;
        padding-right: 20px;
    `,
    AvatarArea: styled.View`
        width: 100%;
        height: 300px;
        justify-content: center;
        align-items: center;
    `,
    Avatar: styled.Image`
        width: 200px;
        height: 200px;
        border-radius: 100px;
        background-color: #000;
    `,
    InfoArea: styled.View`
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    `,
    InfoText: styled.Text`
        font-size: 15px;
        color: ${props=>props.theme == 'light'? '#000': '#FFF'};
    `,
    InfoValue: styled.Text`
        font-size: 18px;
        color: ${props=>props.theme == 'light'? '#000': '#FFF'};
    `,
    Theme: styled.Text``

}