import './TodoItem.css'
import { DeleteIcon } from './DeleteIcon';
import { CompleteIcon } from './CompleteIcon';

function TodoItem(props) {
    return (
        < li >
            <CompleteIcon completeClick={props.onComplete} completed={props.completed}/>
            <p className={props.completed ? 'true' : ''}>{props.texto}</p>
            <DeleteIcon deleteClick={props.onDelete}/>
        </li >
    );
}

export { TodoItem }