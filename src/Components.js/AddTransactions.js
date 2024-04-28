
import React from 'react';

function AddTransactions({ onAddTransaction }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTransaction = {
      category: formData.get('category'),
      amount: parseFloat(formData.get('amount')),
      description: formData.get('description'),
      date: formData.get('date')
    };
    onAddTransaction(newTransaction);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" name="date" placeholder="Date" required />
      <input type="text" name="category" placeholder="Category" required />
      <input type="text" name="description" placeholder="Description" required />
      <input type="number" name="amount" placeholder="Amount" required />
      
      
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default AddTransactions;
