import { Fragment } from "react";
import { Link } from "react-router-dom";

import Header from "../components/ToDoList/Header";
import TaskList from "../components/ToDoList/TaskList";
import Card from "../components/UI/Card";

import classes from "./ToDoList.module.css";

const toDoList = () => {
  return (
    <Fragment>
      <Card>
        <Header />
        <TaskList />
        <div className={classes.actions}>
          <Link to="/to-do-list/new-task">
            <button className={classes.addButton}>+</button>
          </Link>
        </div>
      </Card>
    </Fragment>
  );
};

export default toDoList;
