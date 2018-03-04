import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/reset.css"
import "./css/common.css" 
import "./css/app.css" 
import cnode from "./assets/cnodejs.svg"
import TopicList from "./modules/Home/compontent/TopicList.jsx"
import TopicDetail from "./modules/Home/compontent/TopicDetail.jsx"
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
            </div>
            <div className="main">
              <Route exact  path="/" component={TopicList} />
              <Route path="/topic/:id" component={TopicDetail} />    
            </div>
            <div className="foot"></div>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default App;
