import React from "react"
import axios from "axios"
import { Input, Button, Form, message } from "antd"
import { Link } from "react-router-dom"
import service from "./../service/service.js"
const FormItem = Form.Item

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token: ""
    }
    this.login = this.login.bind(this)
    this.getToken = this.getToken.bind(this)
  }

  //验证Access Token是否正确
  login() {
    let url = service.LOGIN
    let { history, location } = this.props
    let that = this
    axios
      .post(url, {
        accesstoken: that.state.token
      })
      .then(response => {
        localStorage.setItem("userToken", that.state.token)
        localStorage.setItem("userInfo", JSON.stringify(response.data))
        if (location.state) {
          history.push(location.state.preUrl)
        } else {
          history.push("/")
        }
      })
      .catch(error => {
        message.error(error.response.data.error_msg)
      })
  }

  //获取Token值
  getToken(e) {
    this.setState({
      token: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3 className="block-title mt20">
          <Link to={"/"}>首页</Link>
          <span className="bread-split">/</span>登录
        </h3>
        <Form
          layout="inline"
          className="text-center"
          style={{ marginTop: "50px" }}
        >
          <FormItem required={true} label={"Access Token"}>
            <Input
              placeholder="请输入你的Access Token"
              style={{ width: "300px" }}
              onChange={this.getToken}
              value={this.state.token}
            />
          </FormItem>
          <FormItem>
            <Button type="primary" onClick={this.login}>
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Login
