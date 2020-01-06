import React from 'react'
import PropTypes from 'prop-types'

function TodoItem(props) {
    const handleCheckboxChange = () => {
        const {
            onCompletedChange = noop,
            id
        } = props
        onCompletedChange(id)
    }
    return (
        <li>
            <input 
                type="checkbox" 
                checked={props.isCompleted}
                onChange={handleCheckboxChange}
            />
            {props.title} {props.isCompleted ? "已完成" : "未完成"}
        </li>
    )
}

TodoItem.propTypes = {
    onCompletedChange: PropTypes.func.isRequired
}

const noop = () => {}

TodoItem.defaultProps = {
    onCompletedChange: noop
}

export default TodoItem
