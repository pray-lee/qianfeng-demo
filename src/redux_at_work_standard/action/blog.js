import actionTypes from './actionTypes'
import {getBlogData} from "../api/blog";

// 开始请求
const getBlogListStart = () => {
    return {
        type: actionTypes.GET_DATA_START,
    }
}
// 请求成功之后的action
const getBlogListSuccess = payload => {
    return {
        type: actionTypes.GET_DATA_SUCCESS,
        payload
    }
}

// 请求失败之后的action
const getBlogListFailed = error => {
    return {
        type: actionTypes.GET_DATA_FAILED,
        error
    }
}

// 请求过程,如果请求成功，调用成功的action, 反之调用失败的action,都是需要定义的
// 异步action，要手动去派发
export const getBlogList = () => {
    return dispatch => {
        dispatch(getBlogListStart())
        getBlogData()
            .then(res => {
                if (res.status === 200)
                    // 手动dispatch一个action
                    dispatch(getBlogListSuccess(res.data))
                else
                    dispatch(getBlogListFailed('有问题，数据没有请求到'))
            })
            .catch(err => dispatch(getBlogListFailed('捕获了异常....代码有问题')))
    }
}
