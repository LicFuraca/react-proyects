import { useContext, useState } from "react";
import ExpenseContext from "../../context/ExpenseContext";

import classes from "./AddTransaction.module.css";

const AddTransaction = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const { addTransaction } = useContext(ExpenseContext);

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
  };

  const addTransactionHandler = event => {
    event.preventDefault();
    addTransaction(enteredTitle, enteredAmount);

    setEnteredAmount("");
    setEnteredTitle("");
  };

  return (
    <div className={classes.container}>
      <h3>Agregar Transaccion</h3>
      <form onSubmit={addTransactionHandler}>
        <div className={classes.formControl}>
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Coloca el titulo"
            value={enteredTitle}
            onChange={titleChangeHandler}
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
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AddTransaction;
