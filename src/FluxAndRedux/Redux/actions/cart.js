import actionTypes from './actionTypes'

export const increment = id => {
    return {
        id: id,
        type: actionTypes.CART_AMOUNT_INCREMENT
    }    
}

export const decrement = id => {
    return {
        id: id,
        type: actionTypes.CART_AMOUNT_DECREMENT
    }    
}