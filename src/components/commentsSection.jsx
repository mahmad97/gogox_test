import React, { Component } from "react";
import Comment from "./comment";

class CommentsSection extends Component {
  state = {
    postId: this.props.value,
    comments: [],
  };

  componentDidMount() {
    fetch(
      "https://jsonplaceholder.typicode.com/comments?postId=" +
        this.state.postId
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            comments: result,
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
      <div>
        {this.state.comments.map((comment) => (
          <Comment key={comment.id} value={comment} />
        ))}
      </div>
    );
  }
}

export default CommentsSection;
