import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { message } from "antd"
import service from "./../service/service.js"
import util from "./../util/util.js"

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      replyId: this.props.comment.id,
      upsLength: this.props.comment.ups.length
    }
    this.goodReply = this.goodReply.bind(this)
  }

  //点赞
  goodReply() {
    const isLogin = util.isLogin()
    if (!isLogin) {
      message.error("请登录再进行操作")
      return false
    }
    const url = service.GOOD_REPLY.replace("{replyId}", this.props.comment.id)
    const that = this
    axios
      .post(url, {
        accesstoken: localStorage.getItem("userToken")
      })
      .then(response => {
        if (response.data.action == "down") {
          that.setState({
            upsLength: that.state.upsLength - 1
          })
        } else {
          that.setState({
            upsLength: that.state.upsLength + 1
          })
        }
      })
      .catch(error => {
        message.error(error.response.data.error_msg)
      })
  }

  render() {
    let { comment, floor } = this.props
    return (
      <li className="item">
        <Link
          title={comment.author.loginname}
          className="float-left"
          to={`/user/${comment.author.loginname}`}
        >
          <img src={comment.author.avatar_url} />
        </Link>
        <div className="item-content">
          <div className="item-content-title">
            <span>{comment.author.loginname}</span>
            <span className="comment-floor">{floor + 1}楼</span>
          </div>
          <div className="item-content-body">
            <p dangerouslySetInnerHTML={{ __html: comment.content }} />
          </div>
          <div className="item-content-meta">
            <span onClick={this.goodReply}>
              <i
                className="iconfont icon-dianzan"
                title={`点赞数:${this.state.upsLength}`}
              />
              {this.state.upsLength}
            </span>
            <span>
              <i
                className="iconfont icon-huifu"
                title={`回复`}
                onClick={this.addReply}
              />回复
            </span>
            <span>
              <i
                className="iconfont icon-shijian"
                title={`创建时间:${util.formatTime(comment.create_at)}`}
              />
              {util.formatTime(comment.create_at)}
            </span>
          </div>
        </div>
      </li>
    )
  }
}

export default Comment
