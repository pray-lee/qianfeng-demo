import React, { Component } from 'react';
import {
    TodoHeader,
    TodoInput,
    TodoList
} from './components'

export default class App extends Component {
  render() {
    const todos = [
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
    return (
        <>
            <TodoHeader>
                待办事项列表
            </TodoHeader>
            <TodoInput />
            <TodoList todos={todos}/>
        </>
    );
  }
}
