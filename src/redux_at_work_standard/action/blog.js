import actionTypes from './actionTypes'
import {getBlogData} from "../api/blog";

// 请求成功之后的action
const getBlogListSuccess = blogList => {
    return {
        type: actionTypes.GET_DATA_SUCCESS,
        payload: blogList
    }
}

// 请求失败之后的action
const getBlogListFailed = error => {
    return {
        type: actionTypes.GET_DATA_FAILED,
        payload: error
    }
}

// 请求过程,如果请求成功，调用成功的action, 反之调用失败的action,都是需要定义的
export const getBlogList = () => dispatch => {
   getBlogData()
       .then(res => dispatch(getBlogListSuccess(res.data)))
       .catch(err => dispatch(getBlogListFailed(err)))
}
