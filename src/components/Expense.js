import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalStorage';

const Expense = () =>
{
    const [transactions, setTransactions] = useContext(GlobalContext);
    
    let expense = 0;
    transactions.map(transaction => {
        if(transaction.money < 0) {
            expense += transaction.money;
        }
        return;
    })

    return (

        <div className="expense">
            <p>Expense {Math.abs(expense)} $</p>
        </div>
    )
}

export default Expense
