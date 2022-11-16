import { createContext, useReducer } from "react";
import { userReducer,userInitialState } from "../reducer/userReducer";
import { themeReducer,themeInitialState } from "../reducer/themeReducer";
import { balanceInitialState,balanceReducer } from "../reducer/balance";

const initialState = {
    user: userInitialState,
    theme: themeInitialState,
    balance: balanceInitialState
}


export const Context = createContext({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state,action) => ({
    user: userReducer(state.user,action),
    theme: themeReducer(state.theme,action),
    balance: balanceReducer(state.balance,action)
})

export const ContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(mainReducer,initialState)
    return (
        <Context.Provider value={{state,dispatch}}>
            {children}
        </Context.Provider>
    )
}