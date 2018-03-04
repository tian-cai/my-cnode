import React from "react";
import "./topic.css"
import { Link } from "react-router-dom";

class Topic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {topic} = this.props
    return (
      <li className="item">
        <a title={topic.author.loginname} className="float-left">
          <img src={topic.author.avatar_url}/>
        </a>
        <div className="item-content">
          <div className="item-content-title">
            <Link to={`/topic/${topic.id}`}>{topic.title}</Link>
          </div>
          <div className="item-content-meta">
            <span>回复数：{topic.reply_count}</span>
            <span>阅读数：{topic.visit_count}</span>
            <span>创建时间：{topic.create_at}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default Topic;
