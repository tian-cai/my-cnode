import React from "react"
import axios from "axios"
import { Route, Switch, Link } from "react-router-dom"
import { Row, Col, Layout, message, Badge } from "antd"
import "./css/reset.css"
import "./css/common.css"
import "./css/app.css"
import "./css/iconfont.css"
import cnode from "./assets/cnodejs.svg"
import TopicList from "./modules/Home/TopicList.jsx"
import TopicDetail from "./modules/Home/TopicDetail.jsx"
import UserDetail from "./modules/User/UserDetail.jsx"
import Login from "./modules/Login/Login.jsx"
import MessageList from "./modules/User/MessageList.jsx"
import Collect from "./modules/User/Collect.jsx"
import PublishTopic from "./modules/User/PublishTopic.jsx"
import BackUp from "./modules/Common/BackUp.jsx"
import service from "./modules/service/service.js"
import util from "./modules/util/util.js"

const { Header, Footer } = Layout

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: util.isLogin(),
      msgCount: 0
    }
    this.logout = this.logout.bind(this)
    this.getNotReadMsgCount = this.getNotReadMsgCount.bind(this)
  }
  //注销操作
  logout() {
    util.logout()
    this.setState({
      isLogin: util.isLogin()
    })
  }
  //获取未读消息数
  getNotReadMsgCount() {
    let isLogin = util.isLogin()
    if (!isLogin) {
      return
    }
    let url = service.USER_MESSAGE_UNREAD
    let that = this
    axios
      .get(url, {
        params: {
          accesstoken: localStorage.getItem("userToken")
        }
      })
      .then(response => {
        that.setState({
          msgCount: response.data.data
        })
      })
      .catch(error => {
        message.error(error)
      })
  }
  componentWillMount() {
    this.getNotReadMsgCount()
  }

  render() {
    let isLogin = util.isLogin()
    let loginName, userAva
    if (isLogin) {
      loginName = util.getLoginName()
      userAva = util.getUserAva()
    }

    return (
      <Layout className="layout">
        <Row>
          <Col span={18} offset={3}>
            <div className="head">
              <Link href="javascript:;" className="cnode-logo" to={"/"}>
                <img src={cnode} width="200" />
              </Link>
              {!isLogin && (
                <Link to={"/login"} className="float-right mr20">
                  登录
                </Link>
              )}
              {isLogin && (
                <div className="float-right mr20">
                  <Link to={`/user/${loginName}`} className="mr20">
                    <img src={userAva} className="ava" />
                  </Link>
                  <a href="javascript:;" onClick={this.logout}>
                    注销
                  </a>
                </div>
              )}
              <Link to={"/user/message"} className="float-right mr20">
                我的消息<Badge
                  style={{ top: "-12px" }}
                  count={this.state.msgCount}
                />
              </Link>
              <Link to={"/user/collect"} className="float-right mr20">
                我的收藏
              </Link>
              <Link to={"/user/publish"} className="float-right mr20">
                发布话题
              </Link>
            </div>
            <div className="main">
              <Switch>
                <Route exact path="/" component={TopicList} />
                <Route path="/topic/:id" component={TopicDetail} />
                <Route path="/login" component={Login} />
                <Route
                  path="/user/message"
                  render={props => (
                    <MessageList
                      changeMsgCount={this.getNotReadMsgCount}
                      {...props}
                    />
                  )}
                />
                <Route path="/user/collect" component={Collect} />
                <Route path="/user/publish" component={PublishTopic} />
                <Route path="/user/:username" component={UserDetail} />
              </Switch>
            </div>
          </Col>
        </Row>
        <BackUp />
      </Layout>
    )
  }
}

export default App
