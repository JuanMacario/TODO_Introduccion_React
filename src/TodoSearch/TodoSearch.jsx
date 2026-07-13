import React from "react";
import { TodoContext } from "../TodoContetx";

function TodoSearch() {
  const {
    setSearchValue,
    searchValue,
  } = React.useContext(TodoContext)
  return (
    <input placeholder='Cortar cebolla' value={searchValue} onChange={(event) => {
      setSearchValue(event.target.value)
    }} />
  );
}
export { TodoSearch }