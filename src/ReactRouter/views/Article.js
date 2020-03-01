import React from 'react'
import {Link, Route, BrowserRouter} from 'react-router-dom'
import ArticleDetail from "./ArticleDetail";
export default () => {
    return (
        <>
            <h1>文章列表</h1>
            <Link to="/article/1">文章1</Link>
            <Link to="/article/2">文章2</Link>
            <div>
                <Route path="/article/:id">
                    <ArticleDetail />
                </Route>
            </div>
        </>
    )
}
