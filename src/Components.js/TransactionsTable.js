import React from "react"

function TransactionsTable({transactions}){
    if (!transactions || transactions.length === 0) {
        return <div>No transactions available.</div>;}

    return(
        <table>
           <thead>
           <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>  
            </tr>
           </thead>
           <tbody>
            {transactions.map(transaction => (
                <tr>
                    <td>{transactions.date}</td>
                    <td>{transactions.description}</td>
                    <td>{transactions.category}</td>
                    <td>{transactions.amount}</td>
                </tr>
            ))}
           </tbody>
        </table>
    )
}

export default TransactionsTable