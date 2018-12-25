import React from "react"
import { Route, Switch } from "react-router-dom"
import getComponent from "./modules/Common/hoc-async-component"

const TopicList = getComponent(()=> import("./modules/Home/TopicList.jsx"))
const TopicDetail = getComponent(()=> import("./modules/Home/TopicDetail.jsx"))
const UserDetail = getComponent(()=> import("./modules/User/UserDetail.jsx"))
const Login = getComponent(()=> import("./modules/Login/Login.jsx"))
const MessageList = getComponent(()=> import("./modules/User/MessageList.jsx"))
const Collect = getComponent(()=> import("./modules/User/Collect.jsx"))
const PublishTopic = getComponent(()=> import("./modules/User/PublishTopic.jsx"))

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
