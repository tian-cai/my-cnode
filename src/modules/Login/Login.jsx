import React from "react";
import axios from "axios"
import { Input, Button, Form, message } from 'antd'
import service from "./../service.js"
const FormItem = Form.Item;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    }
    this.login = this.login.bind(this);
    this.getToken = this.getToken.bind(this);
  }

  //验证Access Token是否正确
  login() {
    let url = service.LOGIN
    let {history,location} = this.props
    let that = this
    axios.post(url, {
      accesstoken: that.state.token
    }).then((response) => {
      localStorage.setItem('userToken', that.state.token)
      localStorage.setItem('userInfo', JSON.stringify(response.data))
      if (location.state) {
        history.push(location.state.preUrl)
      } else {
        message.success('登录成功')
      }
      
    })
    .catch((error) => {
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
      <Form layout="inline">
        <FormItem required={true} label={"Access Token"}>
          <Input placeholder="请输入你的Access Token" onChange={this.getToken} value={this.state.token}/>
        </FormItem>
        <FormItem>
          <Button type="primary" onClick={this.login}>登录</Button>
        </FormItem>
      </Form>
    )
  }
}

export default Login;