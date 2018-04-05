import React from "react"
import { Row, Col, Layout, message } from "antd"
import "./css/reset.css"
import "./css/common.css"
import "./css/app.css"
import "./css/iconfont.css"
import BackUp from "./modules/Common/BackUp.jsx"
import CustomHead from "./modules/Home/CustomHead.jsx"
import CustomRoute from "./CustomRoute.jsx"

const { Header, Footer } = Layout

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msgCount: ""
    }
    this.changeMsgCount = this.changeMsgCount.bind(this)
  }
  changeMsgCount(count) {
    this.setState({
      msgCount: count
    })
  }

  render() {
    return (
      <Layout className="layout">
        <Row>
          <Col span={18} offset={3}>
            <CustomHead
              msgCount={this.state.msgCount}
              changeMsgCount={this.changeMsgCount}
            />
            <div className="main">
              <CustomRoute changeMsgCount={this.changeMsgCount} />
            </div>
          </Col>
        </Row>
        <BackUp />
      </Layout>
    )
  }
}

export default App
