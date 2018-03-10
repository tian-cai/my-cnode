import React from "react"
import Comment from "./Comment.jsx"

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let commentList = this.props.commentList
    return (
      <ul>
        {commentList && commentList.map((ele,index) => {
          return <Comment key={index} comment={ele} floor={index} />
        })}
      </ul>
    );
  }
}

export default CommentList;
