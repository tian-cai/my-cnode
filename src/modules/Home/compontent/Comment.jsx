import React from "react"
import "./topic.css"

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {comment} = this.props
    return (
      <li className="item">
        <a title={comment.author.loginname} className="float-left">
          <img src={comment.author.avatar_url}/>
        </a>
        <div className="item-content">
          <div className="item-content-title">
            <span>{comment.author.loginname}</span>
          </div>
          <div className="item-content-body">
            <p>{comment.content}</p>
          </div>
          <div className="item-content-meta">
            <span>点赞数：{comment.ups.length}</span>
            <span>回复</span>
            <span>创建时间：{comment.create_at}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default Comment;
