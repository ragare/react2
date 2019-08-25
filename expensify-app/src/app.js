import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore()
// add water bill
store.dispatch(addExpense({
    description: 'Water bill',
    amount: 23000
}))

// add gas bill
store.dispatch(addExpense({
    description: 'Gas bill',
    amount: 15000
}))

// set text filter
store.dispatch(setTextFilter('bill'))

// getVisibleExpenses
const { expenses, filters } = store.getState()
console.log(getVisibleExpenses(expenses, filters))


console.log(store.getState())

ReactDOM.render(<AppRouter />, document.getElementById('app'))
