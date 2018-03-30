import React from "react"
import { BackTop } from "antd"

class BackUp extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BackTop visibilityHeight={100}>
        <div className="ant-back-top-inner">UP</div>
      </BackTop>
    )
  }
}
export default BackUp
