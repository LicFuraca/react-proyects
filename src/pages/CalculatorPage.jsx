import { useState } from "react";

import classes from "./CalculatorPage.module.css";

const CalculatorPage = () => {
  const [result, setResult] = useState("");
  const [first, setFirst] = useState("");
  const [operation, setOperation] = useState("");
  const [second, setSecond] = useState("");

  const operationHandler = event => {
    const value = event.target.name;

    if (
      (value === "/" || value === "+" || value === "-" || value === "*") &&
      first.length === 0
    ) {
      return;
    }

    if (first === "0" && value === "0") return;
    if (second === "0" && value === "0") return;

    if (
      operation &&
      (value === "/" || value === "+" || value === "-" || value === "*")
    ) {
      return;
    }

    if (value === "=" && (!first || !second)) return;

    if (value === "," && !first) {
      return;
    }

    if (first.length > 25 || second.length > 25 || result.length > 40) {
      setResult("Error");
      return;
    }

    if (
      (value === "/" || value === "+" || value === "-" || value === "*") &&
      !operation &&
      first
    ) {
      setOperation(result.concat(value));
    } else if (
      operation.length !== 0 &&
      first.length !== 0 &&
      value !== "=" &&
      !result
    ) {
      if (value === "," && second && second.includes(",")) return;
      setSecond(second.concat(value));
    } else if (value === "=") {
      if (operation === "+") {
        setResult(parseInt(first) + parseInt(second));
      }
      if (operation === "-") {
        setResult(parseInt(first) - parseInt(second));
      }
      if (operation === "*") {
        setResult(parseInt(first) * parseInt(second));
      }
      if (operation === "/") {
        setResult(parseInt(first) / parseInt(second));
      }
    } else {
      if ((value === "," && first && first.includes(",")) || result) return;
      setFirst(first.concat(value));
    }
  };

  const clearHandler = () => {
    setFirst("");
    setOperation("");
    setSecond("");
    setResult("");
  };

  const deleteHandler = () => {
    if (result) return;
    if (first && operation && !second) return;
    if (first && !second) setFirst(first.slice(0, -1));
    if (first && second) setSecond(second.slice(0, -1));
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.calculator}>
          <button
            onClick={clearHandler}
            className={`${classes.operator} ${classes.clear}`}
          >
            Clear
          </button>
          <button onClick={deleteHandler} className={classes.operator}>
            C
          </button>
          <button
            name="/"
            onClick={operationHandler}
            className={classes.operator}
          >
            &divide;
          </button>
          <button name="7" onClick={operationHandler}>
            7
          </button>
          <button name="8" onClick={operationHandler}>
            8
          </button>
          <button name="9" onClick={operationHandler}>
            9
          </button>
          <button
            name="*"
            onClick={operationHandler}
            className={classes.operator}
          >
            &times;
          </button>
          <button name="4" onClick={operationHandler}>
            4
          </button>
          <button name="5" onClick={operationHandler}>
            5
          </button>
          <button name="6" onClick={operationHandler}>
            6
          </button>
          <button
            name="-"
            onClick={operationHandler}
            className={classes.operator}
          >
            &ndash;
          </button>
          <button name="1" onClick={operationHandler}>
            1
          </button>
          <button name="2" onClick={operationHandler}>
            2
          </button>
          <button name="3" onClick={operationHandler}>
            3
          </button>
          <button
            name="+"
            onClick={operationHandler}
            className={classes.operator}
          >
            +
          </button>
          <button className={classes.cero} name="0" onClick={operationHandler}>
            0
          </button>
          <button
            name=","
            onClick={operationHandler}
            className={`${classes.puntuation} ${classes.operator}`}
          >
            ,
          </button>
          <button
            name="="
            onClick={operationHandler}
            className={`${classes.resultBtn} ${classes.operator}`}
          >
            =
          </button>
        </div>
        <div className={classes.display}>
          <span className={classes.first}>{first}</span>
          <span className={classes.operation}>{operation}</span>
          <span className={classes.second}>{second}</span>
          <hr />
          <span className={classes.result}>{result}</span>
          <span className={classes.info}>
            <i id={classes.icon} className="fas fa-info"></i> Esta calculadora
            sólo sirve para operaciones simples
          </span>
        </div>
      </div>
    </>
  );
};

export default CalculatorPage;
