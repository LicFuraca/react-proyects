import { useEffect, useState } from "react";

import db from "../../firebase-config";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import LoadingSpinner from "../UI/LoadingSpinner";
import Task from "./Task";
import NoTasksFound from "./NoTasksFound";

import classes from "./TaskList.module.css";

const TaskList = () => {
  const [taskList, setTaskList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const tasksCollectionRef = collection(db, "taskList");

  useEffect(() => {
    const getAllTasks = async () => {
      setIsLoading(true);
      const allTasks = await getDocs(tasksCollectionRef);

      setTaskList(allTasks.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    };
    try {
      getAllTasks();
    } catch (err) {
      setError(err);
      console.log(err);
    }
  }, []);

  const deleteTask = async id => {
    setIsLoading(true);
    const userId = doc(db, "taskList", id);
    await deleteDoc(userId);
    window.location.reload(false);
    setIsLoading(false);
  };

  const updateCheckbox = async (id, isChecked) => {
    const userId = doc(db, "taskList", id);
    const newData = { checkbox: isChecked };
    await updateDoc(userId, newData);
  };

  return (
    <div>
      <div className={classes.spinner}>{isLoading && <LoadingSpinner />}</div>
      {taskList.length === 0 && !isLoading && <NoTasksFound />}
      {error ? (
        <p className={classes.error}>Error al traer la informacion</p>
      ) : (
        <ul className={classes.list}>
          {taskList.map(task => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              text={task.text}
              deleteTask={deleteTask}
              updateCheckbox={updateCheckbox}
              checkbox={task.checkbox}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
