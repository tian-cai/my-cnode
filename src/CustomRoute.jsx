import React from "react"
import { Route, Switch } from "react-router-dom"
import getComponent from "./modules/Common/hoc-async-component"

const TopicList = getComponent(() => import(/* webpackChunkName: 'Topic' */"./modules/Home/TopicList.jsx"))
const TopicDetail = getComponent(() => import(/* webpackChunkName: 'TopicDetail' */"./modules/Home/TopicDetail.jsx"))
const UserDetail = getComponent(() => import(/* webpackChunkName: 'UserDetail' */"./modules/User/UserDetail.jsx"))
const Login = getComponent(() => import(/* webpackChunkName: 'Login' */"./modules/Login/Login.jsx"))
const MessageList = getComponent(() => import(/* webpackChunkName: 'Message' */"./modules/User/MessageList.jsx"))
const Collect = getComponent(() => import(/* webpackChunkName: 'Collect' */"./modules/User/Collect.jsx"))
const PublishTopic = getComponent(() => import(/* webpackChunkName: 'PublishTopic' */"./modules/User/PublishTopic.jsx"))

class CustomRoute extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={TopicList} />
        <Route path="/topic/:id" component={TopicDetail} />
        <Route path="/login" component={Login} />
        <Route
          path="/user/message"
          render={props => (
            <MessageList
              changeMsgCount={this.props.changeMsgCount}
              {...props}
            />
          )}
        />
        <Route path="/user/collect" component={Collect} />
        <Route path="/user/publish" component={PublishTopic} />
        <Route path="/user/:username" component={UserDetail} />
      </Switch>
    )
  }
}

export default CustomRoute
