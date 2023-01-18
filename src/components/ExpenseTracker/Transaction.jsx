import { useContext } from "react";
import ExpenseContext from "../../context/ExpenseContext";

import classes from "./Transaction.module.css";

const Transaction = ({ transaction }) => {
  const context = useContext(ExpenseContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  const redOrGreen =
    transaction.amount < 0 ? `${classes.minus}` : `${classes.plus}`;

  const deleteHandler = () => {
    context.deleteTransaction(transaction.id);
    
  };

  return (
    <li className={`${redOrGreen} ${classes.item}`} key={transaction.id}>
      {transaction.title}
      <span>
        {sign}${Math.abs(transaction.amount).toLocaleString()}
      </span>
      <button onClick={deleteHandler}>X</button>
    </li>
  );
};

export default Transaction;
