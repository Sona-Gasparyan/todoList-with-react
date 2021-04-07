

const TodoItem = (props) => {

    return (
        <li className="listItem" >
            {props.item }
            <span className="close" onClick={() => { props.removeTodoItem(props.item) }}>×</span>
        </li>
    )
}

export default TodoItem