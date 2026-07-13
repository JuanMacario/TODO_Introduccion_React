import React from "react"
import { TodoContext } from "../TodoContetx"

function TodoButton() {
  const {
    openModalFunction

  } = React.useContext(TodoContext)

  return (


    <button className="agregar" onClick={openModalFunction}>
      Agregar Nueva TODO +
    </button>
  );
}

export { TodoButton }