import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./components/UI/Header";
import LoadingSpinner from "./components/UI/LoadingSpinner";

import "./App.css";

const ToDoList = React.lazy(() => import("./pages/ToDoList"));
const NewTaskPage = React.lazy(() => import("./pages/NewTaskPage"));
const CalculatorPage = React.lazy(() => import("./pages/CalculatorPage"));

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Suspense
            fallback={
              <div className="centered">
                <LoadingSpinner />
              </div>
            }
          >
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/to-do-list" exact>
                <ToDoList />
              </Route>
              <Route path="/to-do-list/new-task">
                <NewTaskPage />
              </Route>
              <Route path="/calculator">
                <CalculatorPage />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </main>
    </>
  );
}

export default App;
