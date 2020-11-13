import React, { Component } from "react";
// import axios from 'axios';
import "./Blog.css";
import Posts from "./Posts/Posts";

import Post from "../../components/Post/Post";
import "./Blog.css";
import { Route, NavLink } from "react-router-dom";
import NewPost from "./NewPost/NewPost";
import FullPost from './FullPost/FullPost'

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline",
                  }}
                >
                  home
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
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/:id" exact component={FullPost} />
      </div>
    );
  }
}

export default Blog;
