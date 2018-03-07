import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./css/reset.css"
import "./css/common.css" 
import "./css/app.css" 
import "./css/iconfont.css" 
import cnode from "./assets/cnodejs.svg"
import TopicList from "./modules/Home/compontent/TopicList.jsx"
import TopicDetail from "./modules/Home/compontent/TopicDetail.jsx"
import UserDetail from "./modules/User/UserDetail.jsx"
import Login from "./modules/Login/Login.jsx"
import Message from "./modules/User/Message.jsx"
import Collect from "./modules/User/Collect.jsx"
import util from "./modules/util/util.js"
import { Row, Col, Layout } from 'antd'
const { Header, Footer } = Layout

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: util.isLogin()
    }
    this.logout = this.logout.bind(this)
  }
  logout() {
    util.logout()
    this.setState({
      isLogin: util.isLogin()
    })
  }

  render() {
    let isLogin = util.isLogin()
    let loginName,userAva
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
                <img src={cnode} width="200"/>
              </Link>
              {!isLogin && <Link to={"/login"} className="float-right mr20">登录</Link>}
              {isLogin && <div className="float-right mr20">
                <Link to={`/user/${loginName}`} className="mr20">
                  <img src={userAva} className="ava"/>
                </Link>
                <a href="javascript:;" onClick={this.logout}>注销</a>
              </div>}
              <Link to={"/user/message"} className="float-right mr20">我的消息</Link>
              <Link to={"/user/collect"} className="float-right mr20">我的收藏</Link>
            </div>
            <div className="main">
              <Switch>
                <Route exact  path="/" component={TopicList} />
                <Route path="/topic/:id" component={TopicDetail} />  
                <Route path="/login" component={Login} />  
                <Route path="/user/message" component={Message} />     
                <Route path="/user/collect" component={Collect} /> 
                <Route path="/user/:username" component={UserDetail} />   
              </Switch>    
            </div>
            <div className="foot"></div>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default App;
