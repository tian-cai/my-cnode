import React from "react"
import axios from "axios"
import { Input, message, Select } from "antd"
import service from "./../service.js"
import RichText from "./../Common/RichText.jsx"
import util from "./../util/util.js"
import { Link } from "react-router-dom"
const Option = Select.Option

class PublishTopic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      tab: ""
    }
    this.publishRichText = this.publishRichText.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getTitle = this.getTitle.bind(this)
  }

  componentWillMount() {
    let isLogin = util.isLogin()
    let { history, match } = this.props
    if (!isLogin) {
      message.warn("您处于未登录状态，2秒后自动跳装至登录页面")
      setTimeout(() => {
        history.push("/login", { preUrl: match.path })
      }, 2000)
      return false
    }
  }
  publishRichText(html) {
    let url = service.POST_TOPIC
    let that = this
    axios
      .post(url, {
        accesstoken: localStorage.getItem("userToken"),
        title: this.state.title,
        tab: this.state.tab,
        content: html
      })
      .then(response => {
        message.success("发布成功")
      })
      .catch(error => {
        message.error(error.response.data.error_msg)
      })
  }

  handleChange(value) {
    this.setState({
      tab: value
    })
  }

  getTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  render() {
    let richTextSet = {
      height: 400
    }
    return (
      <div>
        <h3 className="block-title mt20">
          <Link to={"/"}>首页</Link>
          <span className="bread-split">/</span>发布话题
        </h3>
        <Select
          placeholder="请选择一个版块"
          style={{ width: 200, marginTop: "20px" }}
          onChange={this.handleChange}
        >
          <Option value="share">分享</Option>
          <Option value="job">招聘</Option>
          <Option value="ask">问答</Option>
          <Option value="dev">测试</Option>
        </Select>
        <Input
          placeholder="请输入标题"
          onBlur={this.getTitle}
          style={{ margin: "20px 0px" }}
        />
        <RichText
          richTextSet={richTextSet}
          publishRichText={this.publishRichText}
        />
      </div>
    )
  }
}

export default PublishTopic
