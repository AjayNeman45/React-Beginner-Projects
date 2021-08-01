import React from 'react'

const Transaction = ({ transaction }) =>
{
    return (
        <div className="transaction">
            <li className={transaction.money < 0 ? 'minus' : 'plus'}>
                <span>{transaction.text}</span>
                <span>{transaction.money} $</span>
            </li>
        </div>
    )
}

export default Transaction
