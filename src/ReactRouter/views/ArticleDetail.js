import React from 'react'
import {useParams} from 'react-router-dom'
export default () => {
    // hooks way..
    const { id } = useParams()
    return (
        <h1 style={{fontSize: '14px'}}>文章详情 {id}</h1>
    )
}