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
                        <Route path="/home" exact>
                            <Home/>
                        </Route>
                        <Route path="/user">
                            <User/>
                        </Route>
                        <Route path="/article">
                            <Article/>
                        </Route>
                        <Route path="/404">
                            <NotFound/>
                        </Route>
                        <Redirect to="/home" from="/" exact />
                        <Redirect to="/404"/>
                    </Switch>
                </div>
            </>
        );
    }
}