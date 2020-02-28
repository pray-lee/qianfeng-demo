import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import thunk from "redux-thunk";// 处理异步action用的中间件

export default createStore(rootReducer, applyMiddleware(
    thunk
))