import React from "react";
import { Link } from "react-router-dom"
import util from "./../util/util.js"


class Collect extends React.Component {
  constructor(props) {
    super(props);
  }

  
 

  render() {
    let message = this.props.message
    return (
      <li className="item" style={{"lineHeight": "34px"}}>
        <Link title={message.author.loginname} className="float-left" to={`/user/${message.author.loginname}`}>
          <img src={message.author.avatar_url}/>
        </Link>
        <div className="item-content">
          <div className="item-content-title">
            <Link to={`/user/${message.author.loginname}`}>{message.author.loginname}</Link>
            <span style={{"margin": "0px 10px"}}>在话题</span>
            <Link to={`/topic/${message.topic.id}`}>{message.topic.title}</Link>
            <span>{`${message.type}了你`}</span>
          </div>
        </div>
      </li>
    )
  }
}

export default Collect;
