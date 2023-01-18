import { createContext, useState } from "react";

const initialState = [
  { id: Math.random(), title: "Sueldo Megatlon", amount: 92000 },
  { id: Math.random(), title: "Blanca Tarsia", amount: 7700 },
  { id: Math.random(), title: "Legal Accurify", amount: 27000 },
  { id: Math.random(), title: "Anteojos Mica", amount: -18000 },
];

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  const titleChangeHandler = event => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = event => {
    setAmount(parseInt(event.target.value));
  };

  const addTransaction = event => {
    event.preventDefault();

    initialState.push({
      id: Math.random(),
      title,
      amount,
    });

    setTitle("");
    setAmount(0);
  };

  const deleteTransaction = id => {
    initialState.filter(item => item.id !== id);
  };

  const transactionsData = {
    titleChangeHandler,
    amountChangeHandler,
    addTransaction,
    deleteTransaction,
    initialState,
  };

  return (
    <ExpenseContext.Provider value={transactionsData}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
