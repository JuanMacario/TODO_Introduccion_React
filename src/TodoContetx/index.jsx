import React from "react";
import { useState } from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { useLocalStorage } from "../localStoragehoot";

const TodoContext = React.createContext()

function TodoProvider({ children }) {

    const { item: todos, saveItem: saveTODOs, loading, error } = useLocalStorage("TODOs_V1", [])
    const [count, setCount] = useState(0)
    const [searchValue, setSearchValue] = React.useState('')
    const searchEdTodos = todos.filter(item => {
        return item.texto.toLowerCase().includes(searchValue.toLowerCase())
    })
    const [openModal, setOpenModal] = React.useState(false)

    const completed = todos.filter(item => item.completed == true).length
    const totalTodos = todos.length


    const completedTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(item => item.texto == text)
        newTodos[todoIndex].completed = true
        saveTODOs(newTodos)
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(item => item.texto == text)
        newTodos.splice(todoIndex, 1)
        saveTODOs(newTodos)
    }

    const openModalFunction = () => {
        if (openModal) {
            setOpenModal(false)
        } else {
            setOpenModal(true)
        }
    }

    const addTodo = (text) => {
        const newTodos = [...todos]
       
        newTodos.push({
            texto: text,
            completed: false
        })
        saveTODOs(newTodos)
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodo,
            totalTodos,
            setSearchValue,
            completed,
            searchEdTodos,
            deleteTodo,
            searchValue,
            openModal,
            setOpenModal,
            openModalFunction,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}



export { TodoContext, TodoProvider }


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Hacer ejercicio', completed: true },
//   { text: 'Escribir rapido', completed: false },
//   { text: 'LALALALLALA', completed: true }

// ]

// localStorage.setItem('TODO_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODO_V1')