import Title from "../components/ExpenseTracker/Title";
import Balance from "../components/ExpenseTracker/Balance";
import IncomeExpense from "../components/ExpenseTracker/IncomeExpense";
import TransactionList from "../components/ExpenseTracker/TransactionList";
import AddTransaction from "../components/ExpenseTracker/AddTransaction";
import { ExpenseProvider } from "../context/ExpenseContext";

import "./ExpenseTracker.css";
const ExpenseTracker = () => {
  return (
    <div className="tracker-container">
      <ExpenseProvider>
        <Title />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </ExpenseProvider>
    </div>
  );
};

export default ExpenseTracker;
