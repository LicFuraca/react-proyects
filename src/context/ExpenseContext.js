import { createContext, useState, useEffect } from "react";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  let localData = localStorage.getItem("transactions");
  const [transactions, setTransactions] = useState(JSON.parse(localData));

  const addTransaction = (title, amount) => {
    setTransactions([...transactions, { title, amount, id: Math.random() }]);
  };

  const deleteTransaction = id => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  useEffect(() => {
    const getTransactions = () => {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    };

    getTransactions();
  }, [transactions]);

  return (
    <ExpenseContext.Provider
      value={{ transactions, deleteTransaction, addTransaction }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
