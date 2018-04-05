import React from "react"
import { Link } from "react-router-dom"
import cnode from "./../../assets/cnodejs.svg"
import MsgCount from "./MsgCount.jsx"
import util from "./../../modules/util/util.js"

class CustomHead extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: util.isLogin()
    }
    this.logout = this.logout.bind(this)
  }

  //注销操作
  logout() {
    util.logout()
    this.setState({
      isLogin: false
    })
    this.props.changeMsgCount(0)
  }

  render() {
    const isLogin = util.isLogin()
    let userName, userAvatar
    if (isLogin) {
      userName = util.getCurrentUserInfo().loginname
      userAvatar = util.getCurrentUserInfo().avatar_url
    }

    return (
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
            <Link to={`/user/${userName}`} className="mr20">
              <img src={userAvatar} className="ava" />
            </Link>
            <a href="javascript:;" onClick={this.logout}>
              注销
            </a>
          </div>
        )}
        <Link to={"/user/message"} className="float-right mr20">
          我的消息<MsgCount
            msgCount={this.props.msgCount}
            changeMsgCount={this.props.changeMsgCount}
          />
        </Link>
        <Link to={"/user/collect"} className="float-right mr20">
          我的收藏
        </Link>
        <Link to={"/user/publish"} className="float-right mr20">
          发布话题
        </Link>
      </div>
    )
  }
}

export default CustomHead
