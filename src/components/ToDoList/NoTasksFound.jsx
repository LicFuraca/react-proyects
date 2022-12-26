import classes from "./NoTasksFound.module.css";

const NoTasksFound = () => {
  return (
    <div className={classes.container}>
      <h2>No se encontraron tareas!</h2>
      <p>Para agregar tareas, cliquea el boton de abajo!</p>
    </div>
  );
};

export default NoTasksFound;
