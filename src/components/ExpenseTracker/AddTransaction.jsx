import { useContext } from "react";
import ExpenseContext from "../../context/ExpenseContext";

import classes from "./AddTransaction.module.css";

const AddTransaction = () => {
  const context = useContext(ExpenseContext);

  return (
    <div className={classes.container}>
      <h3>Agregar Transaccion</h3>
      <form onSubmit={context.addTransaction}>
        <div className={classes.formControl}>
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Coloca el titulo"
            value={context.title}
            onChange={context.titleChangeHandler}
          />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="amount">
            Monto <span>(+ = ingreso / - = gasto)</span>
          </label>
          <input
            type="text"
            name="amount"
            id="amount"
            placeholder="Coloca el monto"
            value={context.amount}
            onChange={context.amountChangeHandler}
          />
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AddTransaction;
