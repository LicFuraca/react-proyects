import { useContext } from "react";
import ExpenseContext from "../../context/ExpenseContext";
import NoExpenseFound from "./NoExpenseFound";

import Transaction from "./Transaction";
import classes from "./TransactionList.module.css";

const TransactionList = () => {
  const { transactions } = useContext(ExpenseContext);

  return (
    <div className={classes.container}>
      <h3>Movimientos</h3>
      <ul className={classes.list}>
        {transactions.length ? (
          transactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <NoExpenseFound />
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
