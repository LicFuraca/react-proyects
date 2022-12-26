import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName={classes.active} exact>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/to-do-list" activeClassName={classes.active}>
              Lista de tareas
            </NavLink>
          </li>
          <li>
            <NavLink to="/Calculator" activeClassName={classes.active}>
              Calculadora
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
