import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
    return (
        <ul>
            {
                props.todos.map(item => <TodoItem 
                    key={item.id} {...item}
                />)
            }
        </ul>
    )
}

export default TodoList
