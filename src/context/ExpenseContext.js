import { createContext, useState } from "react";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
	const [transactions, setTransactions] = useState([]);

	const addTransaction = (title, amount) => {
		setTransactions([...transactions, { title, amount, id: Math.random() }]);
	};

	const deleteTransaction = (id) => {
		setTransactions(
			transactions.filter((transaction) => transaction.id !== id)
		);
	};

	return (
		<ExpenseContext.Provider
			value={{ transactions, deleteTransaction, addTransaction }}
		>
			{children}
		</ExpenseContext.Provider>
	);
};

export default ExpenseContext;
