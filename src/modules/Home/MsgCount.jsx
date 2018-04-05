import React from "react"
import axios from "axios"
import { message, Badge } from "antd"
import service from "./../service/service.js"
import util from "./../../modules/util/util.js"

class MsgCount extends React.Component {
  constructor(props) {
    super(props)
    this.getNotReadMsgCount = this.getNotReadMsgCount.bind(this)
  }

  //获取未读消息数
  getNotReadMsgCount() {
    let isLogin = util.isLogin()
    if (!isLogin) {
      return
    }
    const url = service.USER_MESSAGE_UNREAD
    const that = this
    axios
      .get(url, {
        params: {
          accesstoken: localStorage.getItem("userToken")
        }
      })
      .then(response => {
        that.props.changeMsgCount(response.data.data)
      })
      .catch(error => {
        message.error(error)
      })
  }

  componentWillMount() {
    this.getNotReadMsgCount()
  }

  render() {
    return <Badge style={{ top: "-12px" }} count={this.props.msgCount} />
  }
}

export default MsgCount
