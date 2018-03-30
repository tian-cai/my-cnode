import React from "react"
import { Link } from "react-router-dom"
import constant from "./../util/constant.js"

class Collect extends React.Component {
  constructor(props) {
    super(props)
    this.markMsg = this.markMsg.bind(this)
  }

  markMsg() {
    this.props.mark(this.props.message.id)
  }

  render() {
    let message = this.props.message
    return (
      <li className="item" style={{ lineHeight: "34px" }}>
        <Link
          title={message.author.loginname}
          className="float-left"
          to={`/user/${message.author.loginname}`}
        >
          <img src={message.author.avatar_url} />
        </Link>
        <div className="item-content">
          <div className="item-content-title">
            <Link to={`/user/${message.author.loginname}`}>
              {message.author.loginname}
            </Link>
            <span style={{ margin: "0px 10px" }}>在话题</span>
            <Link to={`/topic/${message.topic.id}`}>{message.topic.title}</Link>
            <span style={{ margin: "0px 10px" }}>{`${constant.messageType[
              message.type
            ]}了你`}</span>
            {!message.has_read && (
              <a
                href="javascript:;"
                onClick={this.markMsg}
                className="float-right"
              >
                已读
              </a>
            )}
          </div>
        </div>
      </li>
    )
  }
}

export default Collect
