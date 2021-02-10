import React, { useContext } from 'react';
import {Trans} from './Trans';
import {GlobalContext} from '../Context/GlobalState';



export const Transaction = () =>{
    const {transaction} = useContext(GlobalContext);
    return (
        <div>
            <h3>History</h3>
        <ul className="list">
            {transaction.map(transaction =>(<Trans key={transaction.id}transaction={transaction} />))}
            
             
        </ul>

        </div>
      );    
}