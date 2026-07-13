import CheckSVG from './check.svg?react'
import DeleteSVG from './delete.svg?react'
import './icon.css'

const iconTypes = {
    'check': (color) => <CheckSVG className="icon-svg-complete" fill={color} />,
    'delete': (color) => <DeleteSVG className="icon-svg-delete" fill={color} />
}

function TodoIcon({ type, click, color }) {
    return (
        <button className={`Icon Icon-svg ${type}`}
            onClick={click}
        >
            {iconTypes[type](color)}
        </button>
    )
}

export { TodoIcon }