import React from "react"
import axios from "axios"
import service from "./../service.js"
import util from "./../util/util.js"
import UserTopic from "./UserTopic.jsx"
import { message } from 'antd'
import { Link } from "react-router-dom"

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: this.props.match.params.username,
        recentReplyTopic: [],
        recentNewTopic: [],
        score: "",
        createTime: "",
        ava: ""
    }
    this.getUserDetail = this.getUserDetail.bind(this);
  }

  componentWillMount() {
    this.getUserDetail();
  }
  componentWillReceiveProps(nextProps) {
    this.props = nextProps
    this.getUserDetail() 
  }
  //获取用户详情
  getUserDetail() {
    let url = service.USER_DETAIL.replace('{loginname}',this.props.match.params.username); 
    let that = this;
    axios.get(url)
      .then((response) => {
        that.setState({
            recentReplyTopic: response.data.data.recent_replies,
            recentNewTopic: response.data.data.recent_topics,
            score: response.data.data.score,
            createTime: response.data.data.create_at,
            ava: response.data.data.avatar_url
        })
      })
      .catch((error) => {
        message.error(error);
      })
  }


  render() {
    let recentReplyTopic = this.state.recentReplyTopic;
    let recentNewTopic = this.state.recentNewTopic;
    let score = this.state.score;
    let createTime = util.formatTime(this.state.createTime);
    let ava = this.state.ava;
    let loginName = this.state.username;
    return (
        <div>
            <h3 className="block-title mt20"><Link to={"/"}>首页</Link><span className="bread-split">/</span>个人信息</h3>
            <div className="item" style={{"lineHeight": "34px"}}>
              <a title={loginName} className="float-left">
                <img src={ava}/>
              </a>
              <div className="item-content">
                <span className="mr20">积分 : {score}</span>
                <span className="mr20">注册时间 : {createTime}</span>
              </div>
            </div>
            <h3 className="block-title mt20">最近参与话题</h3>
            {recentReplyTopic.length>0 ? <ul>
              {recentReplyTopic.map((ele,index) => {
                return <UserTopic topic={ele} key={index}/>  
              })}
            </ul> : <div className="item" style={{"lineHeight": "34px"}}>暂无</div>} 
            <h3 className="block-title mt20">最近创建话题</h3>
            {recentNewTopic.length>0 ? <ul>
              {recentNewTopic.map((ele,index) => {
                return <UserTopic topic={ele} key={index}/>  
              })}
            </ul> : <div className="item" style={{"lineHeight": "34px"}}>暂无</div>} 
        </div>
    )
  }
}

export default UserDetail;
