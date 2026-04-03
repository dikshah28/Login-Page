import React, { useState } from 'react';

const Dashboard = () => {
  // Mock data for your teacher to see
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Iced Coffee', amount: 120, category: 'Food' },
    { id: 2, title: 'Uber Ride', amount: 350, category: 'Transit' },
    { id: 3, title: 'Notebooks', amount: 200, category: 'Supplies' }
  ]);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const addExpense = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category: 'General'
    };

    setExpenses([newExpense, ...expenses]);
    setTitle('');
    setAmount('');
  };

  const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="ios-dash-container">
      <div className="ios-dash-card">
        <header className="ios-dash-header">
          <p className="dash-subtitle">TOTAL EXPENSES</p>
          <h1>₹{totalExpense.toFixed(2)}</h1>
        </header>

        {/* Quick Add Form */}
        <form onSubmit={addExpense} className="ios-dash-form">
          <div className="ios-inline-inputs">
            <input 
              type="text" 
              placeholder="Expense title" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input 
              type="number" 
              placeholder="Amount" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button type="submit" className="ios-add-btn">Add Expense</button>
        </form>

        {/* Transactions List */}
        <div className="ios-list-container">
          <h3>Recent Transactions</h3>
          <div className="ios-list">
            {expenses.map(item => (
              <div key={item.id} className="ios-list-item">
                <div className="item-left">
                  <span className="item-title">{item.title}</span>
                  <span className="item-category">{item.category}</span>
                </div>
                <span className="item-amount">-₹{item.amount.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;