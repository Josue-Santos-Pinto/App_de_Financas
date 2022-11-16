export const balanceInitialState = {
    saldo:0,
    gastos: 0
}


export const balanceReducer = (state,action) => {
    switch(action.type){
       case 'CHANGE_SALDO':
            return {...state,saldo: action.payload.saldo + state.saldo}
        break 
        case 'CHANGE_GASTOS':
            return {...state,gastos: action.payload.gastos + state.gastos}
        break 
    }
    return state
}