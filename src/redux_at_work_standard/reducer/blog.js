import actionTypes from '../action/actionTypes'
const blogs = {
    isLoading: true,
    list: [],
    errMsg: ''
}

export default (state=blogs, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA_START:
            return {
                ...state,
                isLoading: true,
                errMsg: ''
            }
        case actionTypes.GET_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                list: action.payload,
                errMsg: ''
            }
        case actionTypes.GET_DATA_FAILED:
            return {
                ...state,
                isLoading: false,
                errMsg: action.error,
            }
        default:
            return state
    }
}