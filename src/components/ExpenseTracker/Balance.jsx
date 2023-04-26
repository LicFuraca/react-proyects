import { useContext } from "react";
import ExpenseContext from "../../context/ExpenseContext";

import classes from "./Balance.module.css";

const Balance = () => {
  const context = useContext(ExpenseContext);

  const amounts = context.transactions.map(transaction =>
    parseInt(transaction.amount)
  );
  const total = amounts.reduce((acc, currentValue) => (acc += currentValue), 0);

  return (
    <div className={classes.container}>
      <h3>Tu Balance</h3>
      <span>${total.toLocaleString()}</span>
    </div>
  );
};

export default Balance;
