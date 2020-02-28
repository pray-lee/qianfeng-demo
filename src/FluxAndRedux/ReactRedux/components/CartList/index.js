import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
	increment,
	decrement
} from '../../actions/cart'
const H3 = styled.h3`
	border-top: 3px solid #ff5252;
	font-size: 24px;
	color: #ff5252
`

class CartList extends React.Component {
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
						{
							this.props.cartList.map(item => (
								<tr key={item.id}>
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.price}</td>
									<td>{item.amount}</td>
									<td>
										<button onClick={() => this.props.decrement(item.id)}>-</button>
										<button onClick={() => this.props.increment(item.id)}>+</button>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</>
		)
	}
}
const mapStateToProps = state => ({
    // cartList的名字就是赋值给this.props的名字
	cartList: state.cart
})
export default connect(mapStateToProps, {increment, decrement})(CartList)
