import { TodoContext } from "../TodoContetx";
import "./TodoCounter.css"
import React from "react";

function TodoCounter() {
  const {
    completed,
    totalTodos
  } = React.useContext(TodoContext)
  
  if (completed == totalTodos) {
    return (
      <h1>
        Felicitaciones, haz completado todos los TODOs
      </h1>
    )
  } else {
    return (
      <h1>
        Has completado {completed} de {totalTodos} TODOs
      </h1>
    );
  }


}

export { TodoCounter }