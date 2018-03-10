import React from "react";
import axios from "axios"
import { Link } from "react-router-dom"
import { message } from 'antd'
import service from "./../service.js"
import util from "./../util/util.js"
import UserTopic from "./../User/UserTopic.jsx"

class Collect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collectList: []
    }
    this.getCollectTopic = this.getCollectTopic.bind(this)
  }

  componentWillMount() {
    this.getCollectTopic()
  }
  getCollectTopic() {
    let isLogin = util.isLogin()
    let {history,match} = this.props
    if (!isLogin) {
      setTimeout(()=> {
        history.push("/login",{preUrl:match.path})
      },2000)
      return false
    }
    let loginName = JSON.parse(localStorage.getItem('userInfo')).loginname
    let url = service.USER_COLLECT_TOPIC.replace('{loginname}',loginName)
    axios.get(url)
    .then((response) => {
      this.setState({
        collectList: response.data.data
      })
    })
    .catch((error) => {
      message.error(error)
    })
  }
 

  render() {
    let collectList = this.state.collectList
    return (
      <div>
        <h3 className="block-title mt20"><Link to={"/"}>首页</Link><span className="bread-split">/</span>我的收藏</h3>
        {collectList.length ? collectList.map((ele,index) => {
          return <UserTopic topic={ele} key={index} />
        }) : <div className="item" style={{"lineHeight": "34px"}}>暂无</div>}
      </div>
    )
  }
}

export default Collect;
