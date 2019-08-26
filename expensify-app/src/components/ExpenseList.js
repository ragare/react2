import React from 'react'
import { connect } from 'react-redux'

const ExpenseList = (props) => (
    <div>
        <h1>Expense list</h1>
        <p>{props.filters.text}</p>
        {props.expenses.map((expense) => (
            <p key={expense.id}>{expense.description}</p>
        ))}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
}

export default connect(mapStateToProps)(ExpenseList);
