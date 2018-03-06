import React from "react";
import "./topic.css"
import { Link } from "react-router-dom";
import { Tag } from 'antd';

class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.tabColor = this.tabColor.bind(this)
  }
  tabColor(tab) {
    let obj = {
      share: 'blue',
      ask: 'red',
      job: 'purple',
      dev: 'yellow'
    }
    return obj[tab];
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
            <Tag color={this.tabColor(topic.tab)}>{topic.tab}</Tag>
          </div>
          <div className="item-content-meta">
            <span title={`阅读数:${topic.visit_count}`}><i className="iconfont icon-yuedu"></i>{topic.visit_count}</span>
            <span title={`评论数:${topic.reply_count}`}><i className="iconfont icon-huifu"></i>{topic.reply_count}</span>
            <span title={`创建时间:${topic.create_at}`}><i className="iconfont icon-shijian"></i>{topic.create_at}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default Topic;
