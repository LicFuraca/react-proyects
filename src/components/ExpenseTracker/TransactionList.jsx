import { useContext } from "react";
import ExpenseContext from "../../context/ExpenseContext";

import Transaction from "./Transaction";
import classes from "./TransactionList.module.css";

const TransactionList = () => {
  const context = useContext(ExpenseContext);

  return (
    <div className={classes.container}>
      <h3>Movimientos</h3>
      <ul className={classes.list}>
        {context.initialState.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
