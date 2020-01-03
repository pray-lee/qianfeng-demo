import React from 'react'

function TodoItem(props) {
    console.log(props)
    return (
        <li>
            {props.title} {props.isCompleted ? "已完成" : "未完成"}
        </li> 
    )
}

export default TodoItem
