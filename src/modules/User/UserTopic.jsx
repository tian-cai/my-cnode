import React from "react";
import "./../Home/topic.css"
import { Link } from "react-router-dom";
import util from "./../util/util.js"

class UserTopic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {topic} = this.props
    return (
      <li className="item" style={{"lineHeight": "34px"}}>
        <Link title={topic.author.loginname} className="float-left" to={`/user/${topic.author.loginname}`}>
          <img src={topic.author.avatar_url}/>
        </Link>
        <div className="item-content">
          <div className="item-content-title">
            <Link to={`/topic/${topic.id}`}>{topic.title}</Link>
            <span className="comment-floor">{util.formatTime(topic.last_reply_at)}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default UserTopic;
