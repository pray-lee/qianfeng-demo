// 上面的combineReducers可以做reducer的合并
import { combineReducers } from 'redux'
import cart from './cart'
export default combineReducers({
    cart,
})