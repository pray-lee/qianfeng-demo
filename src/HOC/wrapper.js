import React from 'react'
import styled from 'styled-components'

const H3 = styled.h3`
    color:#ff5252;
    border-top: 3px solid #333
`

// 定义一个高阶组件,本质使用的就是这个Wrapper组件，然后传递props即可

export default MyComponent => {
    return class Wrapper extends React.Component {
       render() {
           return (
               <>
                <H3>HOC 高阶组件</H3>
                <MyComponent {...this.props}/>
               </>
           )
       } 
    }
}

