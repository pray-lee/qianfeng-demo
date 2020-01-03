import React from 'react'
import PropTypes from 'prop-types'

function TodoInput(props) {
    return (
        <div>
            <input type="text"/>
            <button>
                {props.btnText}
            </button>
        </div>
    )
}
TodoInput.propTypes = {
    btnText: PropTypes.string.isRequired
}
TodoInput.defaultProps = {
    btnText: '添加todo'
}

export default TodoInput
