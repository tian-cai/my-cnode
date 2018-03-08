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
        createTime: ""
    }
    this.getUserDetail = this.getUserDetail.bind(this);
  }

  componentWillMount() {
    this.getUserDetail();
  }
  //获取用户详情
  getUserDetail() {
    let url = service.USER_DETAIL.replace('{loginname}',this.state.username); 
    let that = this;
    axios.get(url)
      .then((response) => {
        that.setState({
            recentReplyTopic: response.data.data.recent_replies,
            recentNewTopic: response.data.data.recent_topics,
            score: response.data.data.score,
            createTime: response.data.data.create_at
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
    let createTime = this.state.createTime;
    let ava = util.getUserAva();
    let loginName = util.getLoginName();
    return (
        <div>
            <h3 className="block-title mt20"><Link to={"/"}>首页</Link><span className="bread-split">/</span>个人信息</h3>
            <div className="item" style={{"lineHeight": "34px"}}>
              <a title={loginName} className="float-left">
                <img src={ava}/>
              </a>
              <div className="item-content">
                <span>积分:{score}</span>
                <span>注册时间:{createTime}</span>
                <Link to={"/user/publish"}>发布话题</Link>
              </div>
            </div>
            <h3 className="block-title mt20">最近参与话题</h3>
            <ul>
            {recentReplyTopic.length>0 && recentReplyTopic.map((ele,index) => {
              return <UserTopic topic={ele} key={index}/>  
            })}
            </ul>
            <h3 className="block-title mt20">最近创建话题</h3>
            <ul>
            {recentNewTopic.length>0 && recentNewTopic.map((ele,index) => {
              return <UserTopic topic={ele} key={index}/>  
            })}
            </ul>
        </div>
    )
  }
}

export default UserDetail;
