// TransactionsTable.js
import React from 'react';

function TransactionsTable({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Amount</th>
          <th>Description</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.description}</td>
            <td>{transaction.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsTable;
