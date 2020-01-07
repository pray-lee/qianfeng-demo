import React, { useState, useEffect } from 'react';

// useState不会把新的state和旧的state进行合并
// useState唯一的参数就是初始state
// state不一定要是一个对象
// 初始state参数只有在第一次渲染时会被用到

// 因为有了Hooks,之前的‘无状态组件’就可以称之为‘函数组件’

const Counter = () => {
    // 声明一个叫做'count'的state变量
    const [ count, setCount ] = useState(10)
    console.log(count, 'count')
    const minus = () => {
        setCount(count - 1)
    }
    const add = () => {
        setCount(prevState => prevState + 1)
    }

    // SImilar to componentDidMount and componentDidUpdate and componentWillUnmount
    useEffect(() => {
        // update the document title using the browser API
        document.title = `You clicked ${count} times`
        return () => {
            document.title = ''
        }
    })
    return (
        <>

            <h3 style={{"borderTop": "3px solid #333"}}>Hooks demo</h3>
            <button onClick={minus}>-</button>
            <span>{count}</span>
            <button onClick={add}>+</button>
        </>
    )
}
export default Counter