import React from 'react';
import CartList from './components/CartList/index'
import store from './store'
import { Provider } from 'react-redux'

export default class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <CartList />
            </Provider>
        )
    }
}