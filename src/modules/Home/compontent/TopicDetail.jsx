import React from "react";
import service from "./../../service.js"
import util from "./../../util/util.js"
import CommentList from "./CommentList.jsx"
import { message,Button } from 'antd'
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
    service.commonGet(url, params, function(response) {
      that.setState({
        topicInfo: response.data.data
      })
    }, function(error) {
      message.error(error);
    })
  }
  componentWillMount() {
    this.getTopicDetail({
        mdrender: "true",
        accesstoken: localStorage.getItem('user')
    });
  }

  render() {
    let topicInfo = this.state.topicInfo
    return (
    <div>
      <h3 className="block-title mt20">信息区</h3>
      {topicInfo.title && <div>
        <h2>{topicInfo.title}</h2>
        <Button type="primary">收藏</Button>
        <p>
          <span>{topicInfo.author.loginname}</span>
          <span>{topicInfo.create_at}</span>
          <span>{topicInfo.visit_count}</span>
          <span>{topicInfo.last_reply_at}</span>
        </p>
      </div>}
      <h3 className="block-title mt20">内容区</h3>
      <div dangerouslySetInnerHTML={{__html: topicInfo.content}}></div>
      <h3 className="block-title mt20">评论区：共{topicInfo.reply_count}条回复</h3>
      <CommentList commentList={topicInfo.replies}/>
    </div> 
    );
  }
}

export default TopicDetail;
