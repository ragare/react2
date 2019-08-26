import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h1>{description}</h1>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
)

export default ExpenseListItem