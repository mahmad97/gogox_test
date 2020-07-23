import React, { Component } from "react";
import CommentsSection from "./commentsSection";

class Post extends Component {
  state = {
    post: this.props.value,
    user: {},
    showComments: false,
  };

  componentDidMount() {
    fetch(
      "https://jsonplaceholder.typicode.com/users/" + this.state.post.userId
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            user: result,
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

  toggleComments = () => {
    if (this.state.showComments) {
      this.setState({ showComments: false });
    } else {
      this.setState({ showComments: true });
    }
  };

  renderComments() {
    if (this.state.showComments) {
      return <CommentsSection value={this.state.post.id} />;
    } else {
      return null;
    }
  }

  render() {
    let post = this.state.post;
    let user = this.state.user;

    return (
      <div className="post mt-3 mb-3 p-2">
        <h5>{post.title}</h5>
        <p>By: {user.email}</p>
        <p>{post.body}</p>
        <button
          className="btn btn-info btn-sm"
          onClick={() => this.toggleComments()}
        >
          Comments
        </button>
        {this.renderComments()}
      </div>
    );
  }
}

export default Post;
