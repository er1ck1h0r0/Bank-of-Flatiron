import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [query, setQuery] = useState("");

  function fetchTransactions(query) {
    fetch(`http://localhost:8001/transactions?q=${query}`)
      .then((response) => response.json())
      .then((transactionData) => {
        setTransactions(transactionData);
      });
  }

  function handleSearch(e) {
    const newQuery = e.target.value;
    setQuery(newQuery);
    fetchTransactions(newQuery);
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;