import actionTypes from '../action/actionTypes'
const blogs = []

export default (state=blogs, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA_SUCCESS:
            return action.payload
        case actionTypes.GET_DATA_FAILED:
            return action.payload
        default:
            return state
    }
}