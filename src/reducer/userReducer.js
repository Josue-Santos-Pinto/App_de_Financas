export const userInitialState = {
    name:'Josué Santos Pinto',
    email: 'josue@gmail.com'
}

export const userReducer = (state,action) => {
    switch(action.type){
       case 'CHANGE_NAME':
            return {...state,name: action.payload.name}
        break 
        case 'CHANGE_EMAIL':
            return {...state,email: action.payload.email}
        break 
    }
    return state
}