import styled from "styled-components/native";

export default {
    Container: styled.View`
        flex: 1;
        background-color: ${props=>props.theme == 'dark' ? '#202225':'#FAFAFA'};
    `,
    ExpenseList: styled.FlatList`
        margin-start: 14px;
        margin-end: 14px;
    `
}