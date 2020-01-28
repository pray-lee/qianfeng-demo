import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// custom button
const Button = styled.button`
    color: #ff5252;
    outline: 0;
    -webkit-appearance: none;
    border: 0;
    border-radius: 5px;
    border: 1px solid #3276c3;
    margin-left: 5px;
    padding:0px 5px
`
const Input = styled.input`
    -webkit-appearance: none;
    border-radius: 3px;
    outline:0;
    border: 1px solid #333
`
function TodoInput(props) {
    let inputRef = null
    const handleInputChange = (e) => {
        inputRef.value = e.target.value
    }
    const handleClick = () => {
        !!inputRef.value && props.changeTodos(inputRef.value)
    }
    const handleKeyUp = e => {
        if (e.keyCode === 13) {
            handleClick()
            inputRef.value = ''
        }
    }
    return (
        <div>
            <Input 
                type="text"
                ref={el => inputRef = el}
                onChange={handleInputChange}
                onKeyUp={handleKeyUp}
            />
            <Button onClick={handleClick}>
                {props.btnText}
            </Button>
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