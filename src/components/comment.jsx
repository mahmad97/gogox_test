import React, { Component } from "react";

class Comment extends Component {
  state = {
    comment: this.props.value,
  };

  render() {
    let comment = this.state.comment;

    return (
      <div className="comment mt-2 mb-2 p-2">
        <p>{comment.email} says:</p>
        <p>{comment.body}</p>
      </div>
    );
  }
}

export default Comment;
