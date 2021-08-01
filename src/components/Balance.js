import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalStorage';

const Balance = () =>
{
    const [transactions, setTransactions] = useContext(GlobalContext);
    
    let balance = 0;
    transactions.map(transaction => {
        balance += transaction.money;
        return;
    })

    return (
        
        <div className="balance">
            <p>Balance {balance} $</p>
        </div>
    )
}

export default Balance
