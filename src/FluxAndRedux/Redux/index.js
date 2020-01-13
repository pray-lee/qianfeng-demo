import React from 'react';
import store from './store'
import CartList from './components/CartList'

window.store = store
console.log(store.getState())
class CartListWithStore extends React.Component {
    render () {
        return <CartList store={store}/>
    }
}

export default CartListWithStore