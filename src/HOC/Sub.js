import React from 'react'

import Wrapper from './wrapper'

class Sub extends React.Component {
    render() {
        // 这里的this.props其实就是从Wrapper组件传进来的{...this.props}
        console.log(this.props)
        return (
             <div>这是被包装的子组件
                 <p>从外部传进来的props的name: {this.props.name}</p>
             </div>
        );
    }
}

export default Wrapper(Sub)