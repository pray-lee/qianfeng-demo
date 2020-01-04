import React, { Component } from 'react';
import {
    TodoHeader,
    TodoInput,
    TodoList
} from './components'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                {
                    id: 1,
                    title: '吃饭',
                    isCompleted: true
                },
                {
                    id: 2,
                    title: '睡觉',
                    isCompleted: false
                },
            ]
        }
    }
    changeTodos = (inputValue) => {
        const item = {
            id: Math.random(),
            title: inputValue,
            isCompleted: inputValue.length > 3 ? true : false
        }
        this.setState(state => ({
            todos: state.todos.concat(item)
        }), () => {
            console.log('setState completed...')
        })
    }
    render() {
        return (
            <>
                <TodoHeader>
                    待办事项列表
                </TodoHeader>
                <TodoInput changeTodos={this.changeTodos} />
                <TodoList todos={this.state.todos} />
            </>
        );
    }
}
