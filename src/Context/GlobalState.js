import React , { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// initial state


const initialState = {
    transaction:[
    ]
}

// create Context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
    const [state , dispatch]= useReducer(AppReducer,initialState);


    // action delete transaction
    function deletedTransaction(id){
        dispatch({
            type:'deletetransaction',
            payload: id
        });
    }

    // action Add transaction
    function addTransaction(transaction){
        dispatch({
            type:'addtransaction',
            payload: transaction
        });
    }





    return(<GlobalContext.Provider value={{
        transaction: state.transaction,
        deletedTransaction,
        addTransaction

    }}>
        {children}

    </GlobalContext.Provider>);



}


