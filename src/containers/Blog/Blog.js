import React, { Component } from "react";
// import axios from 'axios';
import './Blog.css';
import Posts from './Posts/Posts'

import Post from "../../components/Post/Post";
import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import "./Blog.css";

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
            <Posts/>
      </div>
    );
  }
}

export default Blog;
