import React from "react";
import axios from "axios"
import { Link } from "react-router-dom"
import { message } from 'antd'
import service from "./../service.js"
import util from "./../util/util.js"
import Message from "./Message.jsx"

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasReadMeg: [],
      notReadMsg: []
    }
    this.getMessage = this.getMessage.bind(this);
    this.markAll = this.markAll.bind(this);
   
  }
  componentWillMount() {
    this.getMessage()
  }
  // 获取已读和未读消息
  getMessage() {
    let isLogin = util.isLogin()
    let {history,match} = this.props
    if (!isLogin) {
      setTimeout(()=> {
        history.push("/login",{preUrl:match.path})
      },2000)
      return false
    }
    let url = service.USER_MESSAGE_ALL
    axios.get(url,{
      params: {
        accesstoken: localStorage.getItem('userToken'),
        mdrender: "false"
      }
    })
    .then((response) => {
      this.setState({
        hasReadMeg: response.data.data.has_read_messages,
        notReadMsg: response.data.data.hasnot_read_messages,
      })
    })
    .catch((error) => {
      message.error(error)
    })
  }
  // 标记全部已读
  markAll() {
    let url = service.MARK_MESSAGE_ALL;
    let that = this;
    axios.post(url,{
      accesstoken: localStorage.getItem('userToken')
    }).then((response) => {
      that.getMessage()
    })
    .catch((error) => {
      message.error(error)
    })
  }
  

  render() {
    let hasReadMeg = this.state.hasReadMeg;
    let notReadMsg = this.state.notReadMsg;
    return (
      <div>
        <h3 className="block-title mt20">
          <a href="javascript:;" onClick={this.markAll} className="float-right">全部已读</a>
          <Link to={"/"}>首页</Link><span className="bread-split">/</span>未读消息
        </h3>
        {notReadMsg.length ? (<ul>
          {hasReadMeg.map((ele,index) => {
            return <Message message={ele} key={index}/>
          })}
          </ul>) : (<div className="item" style={{"lineHeight": "34px"}}>暂无消息</div>)}

        <h3 className="block-title mt20">已读消息</h3>
        {hasReadMeg.length ? (<ul>
          {hasReadMeg.map((ele,index) => {
            return <Message message={ele} key={index}/>
          })}
          </ul>) : (<div className="item" style={{"lineHeight": "34px"}}>暂无消息</div>)}
      </div>
    )
  }
}

export default MessageList;
