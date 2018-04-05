import React from "react"
import axios from "axios"
import { message, Pagination } from "antd"
import Topic from "./Topic.jsx"
import service from "./../service/service.js"
import constant from "./../util/constant.js"
import util from "./../util/util.js"

class TopicList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topicList: [],
      curPage: 1,
      tab: "all"
    }
    this.getTopicList = this.getTopicList.bind(this)
    this.changePage = this.changePage.bind(this)
    this.changeTab = this.changeTab.bind(this)
  }

  //获取主题
  getTopicList(params) {
    const url = service.GET_TOPICS
    const that = this
    axios
      .get(url, { params })
      .then(response => {
        that.setState({
          topicList: response.data.data
        })
      })
      .catch(error => {
        message.error(error)
      })
  }

  //改变页码
  changePage(page, pageSize) {
    this.setState({
      curPage: page
    })
    this.getTopicList({
      page: page,
      limit: pageSize,
      tab: this.state.tab,
      mdrender: "false"
    })
  }

  //改变Tab
  changeTab(tab, event) {
    util.curTab(event.target)
    this.setState({
      curPage: 1,
      tab: tab
    })
    this.getTopicList({
      page: 1,
      limit: 20,
      tab: tab,
      mdrender: "false"
    })
  }

  componentWillMount() {
    this.getTopicList({
      page: 1,
      limit: 20,
      tab: this.state.tab,
      mdrender: "false"
    })
  }

  render() {
    let topicList = this.state.topicList
    const tab = constant.tab
    return (
      <div>
        <nav className="block-title">
          {tab.map((ele, index) => {
            return (
              <a
                className="mr20"
                key={index}
                onClick={this.changeTab.bind(this, ele.value)}
              >
                {ele.name}
              </a>
            )
          })}
        </nav>
        <ul className="mb20">
          {topicList.map((ele, index) => {
            return <Topic key={index} topic={ele} />
          })}
        </ul>
        <Pagination
          onChange={this.changePage}
          total={500}
          pageSize={20}
          current={this.state.curPage}
        />
      </div>
    )
  }
}

export default TopicList
