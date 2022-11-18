import styled from "styled-components/native";

export default {
    Container: styled.View`
        flex: 1;
        background-color: ${props=>props.theme == 'dark' ? '#202225':'#FAFAFA'};
    `,
    Text: styled.Text`

    `,
    Title: styled.Text`
        font-size: 18px;
        font-weight: bold;
        margin: 14px;
        color: ${props=>props.theme == 'light' ? '#000': '#FFF'};
    `,
    Listagem: styled.FlatList`
        flex: 1;
        margin-top: 10px;
        margin-start: 14px;
        margin-end: 14px;
    `
}