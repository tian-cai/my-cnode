import React from "react"
import service from "./../../service.js"
import { message, Pagination  } from 'antd'
import Topic from "./Topic.jsx"
let nodeUrl = service.nodeUrl
class TopicList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        topicList: []
    }
    this.getTopicList = this.getTopicList.bind(this);
    this.changePage = this.changePage.bind(this);
    this.changeTab = this.changeTab.bind(this);
  }

  //获取主题
  getTopicList(params) {
    let url = nodeUrl + "/api/v1/topics"; 
    let that = this;
    service.getTopicList(url, params, function(response) {
      that.setState({
        topicList: response.data.data
      })
    }, function(error) {
      message.error(error);
    })
  }
  //改变页码
  changePage(page, pageSize) {
    this.getTopicList({
        page: page,
        limit: pageSize,
        tab: "all",
        mdrender: "false"
    });
  }
  //改变Tab
  changeTab(tab) {
    this.getTopicList({
        page: 1,
        limit: 10,
        tab: tab,
        mdrender: "false"
    });
  }

  componentWillMount() {
    this.getTopicList({
        page: 1,
        limit: 10,
        tab: "all",
        mdrender: "false"
    });
  }

  render() {
    let topicList = this.state.topicList;
    let tab = [
        {name:"全部", value:"all"},
        {name:"精华", value:"good"},
        {name:"分享", value:"share"},
        {name:"问答", value:"ask"},
        {name:"招聘", value:"job"},
        {name:"测试", value:"dev"}
    ]
    return (
      <div>
        <nav>
          {tab.map((ele,index) => {
            return <a key={index} onClick={this.changeTab.bind(this,ele.value)}>{ele.name}</a>
          })}
        </nav>
        <ul>
          {topicList.map((ele,index) => {
            return <Topic key={index} topic={ele} />
          })}
        </ul>
        <Pagination onChange={this.changePage} total={500}/>
      </div>
    );
  }
}

export default TopicList;
