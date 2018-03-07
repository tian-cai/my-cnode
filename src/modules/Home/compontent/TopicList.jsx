import React from "react"
import axios from "axios"
import service from "./../../service.js"
import { message, Pagination  } from 'antd'
import Topic from "./Topic.jsx"

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
    let url = service.GET_TOPICS; 
    let that = this;
    axios.get(url, {params})
      .then((response) => {
        that.setState({
          topicList: response.data.data
        })
      })
      .catch((error) => {
        message.error(error)
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
        {name:"分享", value:"share"},
        {name:"问答", value:"ask"},
        {name:"招聘", value:"job"},
        {name:"测试", value:"dev"}
    ]
    return (
      <div>
        <nav className="block-title">
          {tab.map((ele,index) => {
            return <a className="mr20" key={index} onClick={this.changeTab.bind(this,ele.value)}>{ele.name}</a>
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
