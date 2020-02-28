import React from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import {Home, User, Article, NotFound, ArticleDetail} from "./views";

export default class RouterDemo extends React.Component {
    render() {
        return (
            <>
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                    <li>
                        <Link to="/user">用户</Link>
                    </li>
                    <li>
                        <Link to="/article">文章列表</Link>
                    </li>
                </ul>
                <div className="router-view">
                    <Switch>
                        <Route path="/" exact>
                            <Home/>
                        </Route>
                        <Route path="/user">
                            <User/>
                        </Route>
                        <Route path="/article">
                            <Article/>
                        </Route>
                        <Redirect to="/404">
                            <NotFound/>
                        </Redirect>
                    </Switch>
                </div>
            </>
        );
    }
}