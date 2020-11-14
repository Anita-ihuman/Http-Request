import React, { Component } from "react";
// import axios from 'axios';
import "./Blog.css";
import Posts from "./Posts/Posts";

import Post from "../../components/Post/Post";
import "./Blog.css";
import { Route, NavLink, Switch } from "react-router-dom";
import NewPost from "./NewPost/NewPost";


class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline",
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-search=true",
                  }}
                >
                  new post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Hello</h1>} />
        <Route path="/"  render={() => <h1>Hello 2</h1>} /> */}

        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/" exact component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
