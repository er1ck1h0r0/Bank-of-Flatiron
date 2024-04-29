import React, { useState } from "react";


function AddTransactionForm() {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then(() => {
      setFormData({
        date: "",
        description: "",
        category: "",
        amount: ""
      });
    });
  };

  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          <input value={formData.date} onChange={handleChange} type="date" name="date" />
          <input value={formData.description} onChange={handleChange} type="text" name="description" placeholder="Description" />
          <input value={formData.category} onChange={handleChange} type="text" name="category" placeholder="Category" />
          <input value={formData.amount} onChange={handleChange} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
