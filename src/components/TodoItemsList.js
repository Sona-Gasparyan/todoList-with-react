import TodoItem from "./TodoItem"


const ToDoItemsList = (props) => {
    const todoItems = props.items.map(item => (
        <TodoItem key={item} item={item} removeTodoItem={props.removeTodoItem} />
    )
    )

    return (
        <ul>
            {todoItems}
        </ul>
    )
}


export default ToDoItemsList