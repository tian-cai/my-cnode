import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { message, Spin } from "antd"
import UserTopic from "./../User/UserTopic.jsx"
import service from "./../service/service.js"
import util from "./../util/util.js"

class Collect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collectList: [],
      loading: false
    }
    this.getCollectTopic = this.getCollectTopic.bind(this)
  }

  componentWillMount() {
    this.getCollectTopic()
  }

  getCollectTopic() {
    const isLogin = util.isLogin()
    let { history, match } = this.props
    if (!isLogin) {
      message.warn("您处于未登录状态，2秒后自动跳装至登录页面")
      setTimeout(() => {
        history.push("/login", { preUrl: match.path })
      }, 2000)
      return false
    }
    const loginName = JSON.parse(localStorage.getItem("userInfo")).loginname
    const url = service.USER_COLLECT_TOPIC.replace("{loginname}", loginName)
    this.setState({
      loading: true
    })
    axios
      .get(url)
      .then(response => {
        this.setState({
          collectList: response.data.data,
          loading: false
        })
      })
      .catch(error => {
        this.setState({
          loading: false
        })
        message.error(error)
      })
  }

  render() {
    let collectList = this.state.collectList
    let loading = this.state.loading
    return loading ? (
      <Spin tip="正在加载..." size="large" />
    ) : (
      <div>
        <h3 className="block-title mt20">
          <Link to={"/"}>首页</Link>
          <span className="bread-split">/</span>我的收藏
        </h3>
        {collectList.length ? (
          collectList.map((ele, index) => {
            return <UserTopic topic={ele} key={index} />
          })
        ) : (
          <div className="item" style={{ lineHeight: "34px" }}>
            暂无
          </div>
        )}
      </div>
    )
  }
}

export default Collect
