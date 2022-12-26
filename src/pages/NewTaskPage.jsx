import { useHistory } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import db from "../firebase-config";

import NewTaskForm from "../components/ToDoList/NewTaskForm";
import Card from "../components/UI/Card";

const NewTaskPage = () => {
  const history = useHistory();
  const tasksCollectionRef = collection(db, "taskList");

  const addTask = async taskData => {
    await addDoc(tasksCollectionRef, taskData);
    history.push("/to-do-list");
  };

  return (
    <>
      <Card>
        <NewTaskForm addTask={addTask} />
      </Card>
    </>
  );
};

export default NewTaskPage;
