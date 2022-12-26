import { Link } from "react-router-dom";

import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes.container}>
      <h1>Proyectos variados</h1>

      <p className="text-container">
        Esta es una página donde coloqué y colocaré proyectos realizados con
        React para poder mostrar mis trabajos!
      </p>
      <p>
        Para ver un proyecto, simplemente seleccioná la solapa que quieras ver!
      </p>
    </div>
  );
};

export default HomePage;
