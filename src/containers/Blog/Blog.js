import React, { Component } from "react";
// import axios from 'axios';
import './Blog.css';
import Posts from './Posts/Posts'

import Post from "../../components/Post/Post";
import "./Blog.css";
import {Route} from 'react-router-dom'

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">home</a>
              </li>
              <li>
                <a href="/new-post">new post</a>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact render={() => <h1>Hello</h1>} />
        <Route path="/" exact render={() => <h1>Hello 2</h1>} />
      </div>
    );
  }
}

export default Blog;
