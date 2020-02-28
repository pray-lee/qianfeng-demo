import React from 'react'
import BlogItem from './blogItem'
import {connect, useSelector, useDispatch} from 'react-redux'
import { getBlogList } from '../action/blog'
// 使用connect
class BlogList extends React.Component {
    componentDidMount() {
        this.props.getBlogList()
    }

    render() {
        return (
            <ul>
                {
                    this.props.blogLists.map(item => {
                        return <BlogItem key={item.id} {...item}/>
                    })
                }
            </ul>
        );
    }
}

const mapState = state => ({
    blogLists: state.blogs
})
export default connect(mapState, { getBlogList })(BlogList)

// 使用hooks
// export default () => {
//     const blogLists = useSelector(state => state.blogs)
//     return (
//         <ul>
//             {
//                 blogLists.map(item => {
//                     return <BlogItem key={item.id} {...item}/>
//                 })
//             }
//         </ul>
//     )
// }
