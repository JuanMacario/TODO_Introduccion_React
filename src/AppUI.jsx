import { TodoItem } from './TodoList/TodoItem/TodoItem.jsx'
import { TodoCounter } from './TodoCounter/TodoCounter.jsx'
import { TodoSearch } from './TodoSearch/TodoSearch.jsx'
import { TodoList } from './TodoList/TodoList.jsx'
import { TodoButton } from './TodoButton/TodoBottom.jsx'
import { TodoLoading } from './Todo/TodoLoading.jsx'
import { TodoError } from './Todo/TodoError.jsx'
import { TodoContext } from './TodoContetx/index.jsx'
import { TodoEmpty } from './Todo/TodoEmpty.jsx'
import { TodoAgregar } from './TodoAgregar/index.jsx'
import { Modal } from './Modal/Index.jsx'
import React from 'react'

function AppUI() {
    const {
        openModal,
        openModalFunction,
        addTodo
    } = React.useContext(TodoContext)

    return (

        <div className='center'>
            <TodoCounter />
            <TodoSearch />

            <TodoContext.Consumer>
                {({
                    loading,
                    error,
                    completedTodo,
                    totalTodos,
                    setSearchValue,
                    completed,
                    searchEdTodos,
                    deleteTodo,
                    searchValue,
                }) => (
                    <TodoList>
                        {loading &&
                            <>
                                <TodoLoading />
                                <TodoLoading />
                                <TodoLoading />
                            </>
                        }
                        {error && <TodoError />}
                        {(!loading && searchEdTodos.length == 0) && <TodoEmpty />}

                        {searchEdTodos.map(todo => (
                            <TodoItem
                                key={todo.texto}
                                texto={todo.texto}
                                completed={todo.completed}
                                onComplete={() => { completedTodo(todo.texto) }}
                                onDelete={() => { deleteTodo(todo.texto) }} />
                        ))}
                    </TodoList>
                )}

            </TodoContext.Consumer>

            <TodoButton />


            {openModal && (
                < Modal >
                    <TodoAgregar />
                </Modal>
            )}
        </div >
    )


}

export { AppUI }