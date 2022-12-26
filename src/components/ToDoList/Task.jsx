import { useRef, useState } from "react";

import classes from "./Task.module.css";

const Task = props => {
  const inputCheckRef = useRef();
  const [isChequed, setIsChequed] = useState(props.checkbox);

  const updateCheckboxHandler = () => {
    const enteredCheckbox = inputCheckRef.current.checked;
    setIsChequed(enteredCheckbox);
    props.updateCheckbox(props.id, enteredCheckbox);
  };

  const deleteTaskHandler = () => {
    props.deleteTask(props.id);
  };

  return (
    <li id={props.id}>
      <div>
        {props.title}
        <span>{props.text}</span>
      </div>
      <div>
        <button
          type="button"
          onClick={deleteTaskHandler}
          className={classes.delete}
        >
          <i class="fas fa-trash"></i>
        </button>
      </div>
      <input
        type="checkbox"
        name="checkbox"
        ref={inputCheckRef}
        onChange={updateCheckboxHandler}
        defaultChecked={isChequed}
      />

      <div className={classes.border}></div>
      <div className={classes.tickMark}></div>
    </li>
  );
};

export default Task;
