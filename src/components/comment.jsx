import React, { Component } from "react";

class Comment extends Component {
  state = {
    comment: this.props.value,
  };

  render() {
    let comment = this.state.comment;

    return (
      <div>
        <p>{comment.email} says:</p>
        <p>{comment.body}</p>
      </div>
    );
  }
}

export default Comment;
