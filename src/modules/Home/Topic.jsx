import React from "react";
import "./topic.css"
import constant from "./../util/constant.js"
import util from "./../util/util.js"
import { Link } from "react-router-dom";
import { Tag } from 'antd';

class Topic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {topic} = this.props
    return (
      <li className="item">
        <Link title={topic.author.loginname} className="float-left" to={`/user/${topic.author.loginname}`}>
          <img src={topic.author.avatar_url}/>
        </Link>
        <div className="item-content">
          <div className="item-content-title">
            <Link to={`/topic/${topic.id}`}>{topic.title}</Link>
            <Tag color={constant.tabColor[topic.tab]} style={{"marginLeft": "10px"}}>{constant.tabName[topic.tab]}</Tag>
          </div>
          <div className="item-content-meta">
            <span title={`阅读数:${topic.visit_count}`}><i className="iconfont icon-yuedu"></i>{topic.visit_count}</span>
            <span title={`评论数:${topic.reply_count}`}><i className="iconfont icon-huifu"></i>{topic.reply_count}</span>
            <span title={`创建时间:${util.formatTime(topic.create_at)}`}><i className="iconfont icon-shijian"></i>{util.formatTime(topic.create_at)}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default Topic;
