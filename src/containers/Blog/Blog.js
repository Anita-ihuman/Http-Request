import React, { Component } from "react";
// import axios from 'axios';
import './Blog.css';
import Posts from './Posts/Posts'

import Post from "../../components/Post/Post";
import "./Blog.css";
import { Route, Link } from 'react-router-dom'
import NewPost from './NewPost/NewPost'

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                            <Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-search=true'
                }}>new post</Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Hello</h1>} />
        <Route path="/"  render={() => <h1>Hello 2</h1>} /> */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
