import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../GlobalStorage';

const Income = () =>
{
    const [transactions, setTransactions] = useContext(GlobalContext);

    let income = 0;
    transactions.map(transaction => {
        if(transaction.money > 0) {
            income += transaction.money;
        }
        return;
    })

    return (
            <div className="income">
                <p>Income {income} $</p>
            </div>
    )
}

export default Income
