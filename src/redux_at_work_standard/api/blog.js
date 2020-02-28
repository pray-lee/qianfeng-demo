import request from './index'
export const getBlogData = () => {
    return request.get('/posts')
}
