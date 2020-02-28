import React, {} from 'react'
import BlogItem from './blogItem'
import {connect} from 'react-redux'
import {getBlogList} from '../action/blog'

// 使用connect
class BlogList extends React.Component {
    componentDidMount() {
        // 去派发一下异步的action ,在这个action里面会有处理数据的部分，就是再新发一个action去接受返回来的数据
        this.props.getBlogList()
    }
    render() {
        const {
            list,
            isLoading,
            errMsg
        } = this.props.blogLists
        return (
            isLoading ?
                <div>loading.......</div>
                :
                (
                    !!errMsg ?
                        <div>{errMsg}</div>
                        :
                        <ul>
                            {
                                list.map(item => {
                                    return <BlogItem key={item.id} {...item}/>
                                })
                            }
                        </ul>
                )
        );
    }
}

const mapState = state => ({
    blogLists: state.blogs
})
export default connect(mapState, {getBlogList})(BlogList)

