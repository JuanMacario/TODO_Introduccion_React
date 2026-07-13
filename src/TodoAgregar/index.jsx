import React from "react"
import { TodoContext } from "../TodoContetx"
import "./todoAgregar.css"

function TodoAgregar() {
    const {
        openModalFunction,
        addTodo
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState("")

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onSummit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        openModalFunction()
    }

    return (
        <div className="task-modal-overlay">
            <div className="task-modal-box">
                <div className="task-modal-accent"></div>

                <div className="task-modal-header">
                    <h3 className="task-modal-title">Crear nueva tarea</h3>
                    <p className="task-modal-subtitle">Organiza tu espacio de trabajo en un segundo.</p>
                </div>

                <form className="task-modal-form" onSubmit={onSummit}>
                    <input
                        type="text"
                        placeholder="¿En qué vas a trabajar hoy?"
                        className="task-modal-input"
                        autoFocus
                        value={newTodoValue}
                        onChange={onChange}
                    />

                    <div className="task-modal-actions">
                        <button type="button" className="btn-cancel" onClick={openModalFunction}>Cancelar</button>
                        <button type="submit" className="btn-save">Crear tarea</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export { TodoAgregar }