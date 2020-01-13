import React from 'react'

// 把包装函数引进来
import Wrapper from './wrapper'

@Wrapper
class Sub extends React.Component {
    render() {
        // 这里的this.props其实就是从Wrapper组件传进来的{...this.props}
        return (
             <div>这是被包装的子组件
                 <p>从外部传进来的props的name: {this.props.name}</p>
             </div>
        );
    }
}

export default Sub


// 没有用装饰器的时候
// export default Wrapper(Sub)