import React from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {
    increment,
    decrement
} from '../../actions/cart'

const H3 = styled.h3`
	border-top: 3px solid #ff5252;
	font-size: 24px;
	color: #ff5252
`

export default function CartList(props) {
    // useSelector 传一个函数返回需要的state
    const cartList = useSelector(state => state.cart )
    // useDispatch返回执行结果，然后再用返回的结果去处理action
    const dispatch = useDispatch()
    return (
        <>
            <H3>Redux购物车</H3>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>商品名称</th>
                    <th>价格</th>
                    <th>数量</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {
                    cartList.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.amount}</td>
                            <td>
                                <button onClick={() => dispatch(decrement(item.id))}>-</button>
                                <button onClick={() => dispatch(increment(item.id))}>+</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}
