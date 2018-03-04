import React from "react";
import service from "./../../service.js"
import CommentList from "./CommentList.jsx"
import { message } from 'antd'
let nodeUrl = service.nodeUrl

class TopicDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        topicId: this.props.match.params.id,
        topicInfo: {}
    }
    this.getTopicDetail = this.getTopicDetail.bind(this)
  }

  //获取指定主题详情
  getTopicDetail(params) {
    let url = nodeUrl + "/api/v1/topic/" + this.state.topicId; 
    let that = this;
    service.getTopicList(url, params, function(response) {
      that.setState({
        topicInfo: response.data.data
      })
    }, function(error) {
      message.error(error);
    })
  }
  componentWillMount() {
    this.getTopicDetail({
        mdrender: "true"
    });
  }

  render() {
    let topicInfo = this.state.topicInfo
    console.log(topicInfo.replies)
    return (
    <div>
      <div>{topicInfo.content}</div>
      <h3>共{topicInfo.reply_count}条回复</h3>
      <CommentList commentList={topicInfo.replies}/>
    </div> 
    );
  }
}

export default TopicDetail;
