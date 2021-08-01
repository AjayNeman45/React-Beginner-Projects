import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalStorage'
import Transaction from './Transaction';

const TransactionHistory = () =>
{
    const [transactions, setTransactions] = useContext(GlobalContext);

    return (
        <div className="history">
            <h2> Transaction History</h2><br />
            <ul>
                {
                    transactions.map(transaction => {
                        return <Transaction transaction={transaction} />
                    })
                }
            </ul>
        </div>
    )
}

export default TransactionHistory
