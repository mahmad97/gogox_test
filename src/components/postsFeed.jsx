import React, { Component } from "react";
import Post from "./post";

class PostsFeed extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          result = result.slice(0, 10);
          this.setState({
            isLoaded: true,
            posts: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    return (
      <div id="feed" className="container text-left">
        <h1 className="mt-2 text-center">Posts Feed</h1>
        {this.state.posts.map((post) => (
          <Post key={post.id} value={post} />
        ))}
      </div>
    );
  }
}

export default PostsFeed;
