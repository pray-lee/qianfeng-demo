import actionTypes from '../actions/actionTypes' // 自己编写reducers
const carts = [{
        id: '1',
        name: '苹果',
        price: '888.88',
        amount: 100
    },{
        id: '2',
        name: '桃子',
        price: '666.66',
        amount: 1000
    }]

export default (state=carts, action) => {
    switch (action.type) {
        case actionTypes.CART_AMOUNT_INCREMENT:
            return state.map(item => {
                if(item.id === action.id) {
                    item.amount += 1    
                }
                return item
            })
        case actionTypes.CART_AMOUNT_DECREMENT:
            return state.map(item => {
                if(item.id === action.id) {
                    item.amount -= 1    
                }
                return item
            })
        default:
            return state
    }
}