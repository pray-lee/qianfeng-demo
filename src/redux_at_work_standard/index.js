import React from 'react'
import styled from "styled-components";
import Blogs from './components/blogs'
import { Provider } from 'react-redux'
import store from './store'
const H3 = styled.h3`
    color:#3276c3;
    font-size: 24px;
    border-top: 3px solid #3276c3
`
export default function AsyncActionDemo() {
    return (
        <Provider store={store}>
            <H3>hello asyncActionDemo</H3>
            <Blogs />
        </Provider>
    )
}