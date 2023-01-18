import { useContext } from "react";
import ExpenseContext from "../../context/ExpenseContext";

import classes from "./IncomeExpense.module.css";

const IncomeExpense = () => {
  const context = useContext(ExpenseContext);
  const amounts = context.initialState.map(item => item.amount);

  let positiveAmounts = 0;
  let negativeAmounts = 0;

  for (let amount of amounts) {
    if (amount > 0) {
      positiveAmounts = positiveAmounts + amount;
    } else {
      negativeAmounts = negativeAmounts - amount;
    }
  }

  return (
    <>
      <div className={classes.incomeExpense}>
        <div className={classes.card}>
          <h3>INGRESO</h3>
          <span className={classes.plus}>
            +${positiveAmounts.toLocaleString()}
          </span>
        </div>
        <hr />
        <div className={classes.card}>
          <h3>GASTO</h3>
          <span className={classes.minus}>
            -${negativeAmounts.toLocaleString()}
          </span>
        </div>
      </div>
    </>
  );
};

export default IncomeExpense;
