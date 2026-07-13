import React from "react";
import { TodoIcon } from './TodoIcon.jsx'

function DeleteIcon(props) {
    return (
        <TodoIcon
            type='delete'
            color='red'
            click={props.deleteClick}
        />
    )
}

export { DeleteIcon }