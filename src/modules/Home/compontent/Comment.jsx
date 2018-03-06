import React from "react"
import "./topic.css"
import { Link } from "react-router-dom";

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {comment,floor} = this.props
    return (
      <li className="item">
        <Link title={comment.author.loginname} className="float-left" to={`/user/${comment.author.loginname}`}>
          <img src={comment.author.avatar_url}/>
        </Link>
        <div className="item-content">
          <div className="item-content-title">
            <span>{comment.author.loginname}</span>
            <span className="comment-floor">{floor+1}楼</span>
          </div>
          <div className="item-content-body">
            <p dangerouslySetInnerHTML={{__html: comment.content}}></p>
          </div>
          <div className="item-content-meta">
            <span><i className="iconfont icon-dianzan" title={`点赞数:${comment.ups.length}`}></i>{comment.ups.length}</span>
            <span><i className="iconfont icon-huifu" title={`回复`}></i>回复</span>
            <span><i className="iconfont icon-shijian" title={`创建时间:${comment.create_at}`}></i>{comment.create_at}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default Comment;
