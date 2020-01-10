import React from 'react'

export default class CartList extends React.Component {
	render() {
		return (
			<>
			<h3 style={{borderTop: "3px solid #333"}}>Redux购物车</h3>
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
					<tr>
						<td>1</td>
						<td>苹果</td>
						<td>2</td>
						<td>8888</td>
						<td>
							<button>-</button>
							<span>10</span>
							<button>+</button>
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>梨</td>
						<td>5</td>
						<td>6666</td>
						<td>
							<button>-</button>
							<span>20</span>
							<button>+</button>
						</td>
					</tr>
				</tbody>
			</table>
			</>
		)
	}
}