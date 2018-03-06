import React from "react";
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
    let url = service.nodeUrl + "/api/v1/accesstoken"
    let that = this
    service.commonPost(url, {
      accesstoken: that.state.token
    }, function(response) {
      localStorage.setItem('user', that.state.token)
    }, function(error) {
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
