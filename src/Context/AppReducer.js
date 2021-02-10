import { Transaction } from "../components/Transaction";

export default (state ,action )=>{
    switch(action.type){
        case 'deletetransaction':
            return{
                ...state,
                transaction: state.transaction.filter(transaction => transaction.id !== action.payload)
                
                
            }
        case 'addtransaction':
                return{
                    ...state,
                    transaction: [action.payload,...state.transaction]
                    
                    
                }

        default:
            return state;
    }
}