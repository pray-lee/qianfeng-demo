import actionTypes from "../actions/actionTypes";

export default (state= [1,2,3], action) => {
    switch(action.type) {
        case actionTypes.CART_AMOUNT_INCREMENT:
            return {
                abc: 'abc'
            }
        default:
            return state
    }
}