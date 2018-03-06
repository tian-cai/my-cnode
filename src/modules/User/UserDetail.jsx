import React from "react"
import service from "./../service.js"
import UserTopic from "./UserTopic.jsx"
import { message } from 'antd'
import { Link } from "react-router-dom"

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: this.props.match.params.username,
        recentReplyTopic: [],
        recentNewTopic: []
    }
    this.getUserDetail = this.getUserDetail.bind(this);
    this.getUserCollectTopic = this.getUserCollectTopic.bind(this);
  }

  componentWillMount() {
    this.getUserDetail();
    // this.getUserCollectTopic();
  }
  //获取用户详情
  getUserDetail() {
    let url = service.nodeUrl + "/api/v1/user/" + this.state.username; 
    let that = this;
    service.commonGet(url,null,function(response) {
        console.log(response)
        that.setState({
            recentReplyTopic: response.data.data.recent_replies,
            recentNewTopic: response.data.data.recent_topics
        })
    },function(error) {
        message.error(error);
    })
  }
  //获取用户收藏主题
  getUserCollectTopic() {
    let url = service.nodeUrl + "/api/v1/topic_collect/" + this.stata.username; 
    service.commonGet(url,null,function(response) {
        console.log(response)
    },function(error) {
        message.error(error);
    })        
  }


  render() {
    let recentReplyTopic = this.state.recentReplyTopic;
    let recentNewTopic = this.state.recentNewTopic;
    return (
        <div>
            <h3 className="block-title mt20"><Link to={"/"}>首页</Link><span className="bread-split">/</span>个人信息</h3>
            <h3 className="block-title mt20">最近参与话题</h3>
            <ul>
            {
                recentReplyTopic.length && recentReplyTopic.map((ele,index) => {
                return <UserTopic topic={ele} key={index}/>  
              })
            }
            </ul>
            <h3 className="block-title mt20">最近创建话题</h3>
            <ul>
            {
                recentNewTopic.length && recentNewTopic.map((ele,index) => {
                return <UserTopic topic={ele} key={index}/>  
              })
            }
            </ul>
        </div>
    )
  }
}

export default UserDetail;
