import { useRef } from "react";
import Card from "../UI/Card";
import Header from "./Header";

import classes from "./NewTaskForm.module.css";

const NewTaskForm = props => {
  const titleInputRef = useRef();
  const textInputRef = useRef();

  const formSubmitHandler = event => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.addTask({ title: enteredTitle, text: enteredText, checkbox: false });
  };

  return (
    <>
      <Card>
        <Header />
        <form onSubmit={formSubmitHandler} className={classes.form}>
          <div className={classes.formControl}>
            <label htmlFor="title">Titulo de la tarea</label>
            <input
              ref={titleInputRef}
              type="text"
              name="title"
              placeholder="Inserte la tarea"
            />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="text">Observaciones</label>
            <textarea
              name="text"
              ref={textInputRef}
              type="text"
              placeholder="Inserte observaciones"
              cols="20"
              rows="8"
            />
          </div>
          <div className={classes.actions}>
            <button type="submit">Add Task</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default NewTaskForm;
