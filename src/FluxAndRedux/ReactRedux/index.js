import React from 'react';
import CartList from './components/CartList'
import store from './store'

export default class App extends React.Component {
    render () {
        return (
           <CartList store={store} /> 
        )
    }
}