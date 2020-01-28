// reducer就是一个普通的函数，去根据action的类型做不同的state操作而已
import { combineReducers } from 'redux'
import cart from './cart'
export default combineReducers({
    cart
})