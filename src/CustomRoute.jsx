import React from "react"
import { Route, Switch } from "react-router-dom"
import TopicList from "./modules/Home/TopicList.jsx"

let TopicDetail, UserDetail, Login, MessageList, Collect, PublishTopic

import("./modules/Home/TopicDetail.jsx").then(module => {
  TopicDetail = module.default
})
import("./modules/User/UserDetail.jsx").then(module => {
  UserDetail = module.default
})
import("./modules/Login/Login.jsx").then(module => {
  Login = module.default
})
import("./modules/User/MessageList.jsx").then(module => {
  MessageList = module.default
})
import("./modules/User/Collect.jsx").then(module => {
  Collect = module.default
})
import("./modules/User/PublishTopic.jsx").then(module => {
  PublishTopic = module.default
})

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
