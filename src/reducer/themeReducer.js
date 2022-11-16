export const themeInitialState = {
    status: 'light'
}

export const themeReducer = (state,action) => {
    switch(action.type){
       case 'CHANGE_STATUS':
            return {...state,status: action.payload.status}
        break 
    }
    return state
}