import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format'


export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)
    const amount = transactions.map(transaction => transaction.amount)

    const income = amount
        .filter(item => item > 0)
        .reduce((sum, num) => (sum = sum + num), 0)
        .toFixed(2)
    const expense = amount
        .filter(item => item < 0)
        .reduce((sum, num) => (sum = sum + num), 0)
        .toFixed(2)

    const expenses = Math.abs(expense)
    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'>${numberWithCommas(income)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className='money minus'>${numberWithCommas(expenses)}</p>
            </div>
        </div>
    )
}
