import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

function TodoList(props) {
    return (
        <ul>
            {
                props.todos.map(item => <TodoItem 
                    key={item.id}
                    {...item}
                    onCompletedChange={props.onCompletedChange}
                />)
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        isCompleted: PropTypes.bool
    })).isRequired
}

export default TodoList
