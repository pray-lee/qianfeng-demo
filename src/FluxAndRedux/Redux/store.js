import { createStore } from 'redux'
import rootReducers from './reducers'
export default createStore(
    // reducer放在这
    rootReducers
)