import React from 'react'
import styled from 'styled-components'
import {
	increment,
	decrement
} from '../../actions/cart'
const H3 = styled.h3`
	border-top: 3px solid #ff5252;
	font-size: 24px;
	color: #ff5252
`

export default class CartList extends React.Component {
	state = {
		carts: []
	}
	// static getDerivedStateFromProps(props, state) {
	// 	return {
	// 		carts: props.store.getState().cart
	// 	}
	// }
	getState = () => {
		this.setState({
			carts:this.props.store.getState().cart 
		})
	}
	componentDidMount() {
		this.getState()
		this.props.store.subscribe(this.getState)
	}
	render() {
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
					{this.state.carts.map(item => {
						return (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.name}</td>
								<td>{item.price}</td>
								<td>{item.amount}</td>
								<td>
									<button onClick={() => this.props.store.dispatch(decrement(item.id))}>-</button>
									<button onClick={() => this.props.store.dispatch(increment(item.id))}>+</button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
			</>
		)
	}
}