import actionTypes from './actionTypes'
export const increment = id => {
    return {
        type: actionTypes.CART_AMOUNT_INCREMENT,
        id: id
    }
}
export const decrement = id => {
    return {
        type: actionTypes.CART_AMOUNT_DECREMENT,
        id: id
    }
}