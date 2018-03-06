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
import { Row, Col, Layout } from 'antd'
const { Header, Footer } = Layout

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout className="layout">
        <Row>
          <Col span={18} offset={3}>
            <div className="head">
              <a href="javascript:;" className="cnode-logo">
                <img src={cnode} width="200"/>
              </a>
              <Link to={"/login"} className="float-right">登录</Link>
            </div>
            <div className="main">
              <Route exact  path="/" component={TopicList} />
              <Route path="/topic/:id" component={TopicDetail} />  
              <Route path="/user/:username" component={UserDetail} />  
              <Route path="/login" component={Login} />     
            </div>
            <div className="foot"></div>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default App;
