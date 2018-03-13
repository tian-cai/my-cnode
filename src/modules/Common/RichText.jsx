import React from 'react'
import { message,Button } from 'antd'
// 引入编辑器以及编辑器样式
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

class RichText extends React.Component {
  constructor(props) {
    super(props)
    this.addReply = this.addReply.bind(this)
  }

  addReply() {
    let html = this.editorInstance.getContent("html")
    this.props.publishRichText(html)
    this.editorInstance.setContent("","html")
  }

  render () {

    const editorProps = this.props.richTextSet

    return (
      <div>
        <div className="rich-text">
          <BraftEditor {...editorProps} ref={instance => this.editorInstance = instance} />
        </div>
        <Button type="primary" onClick={this.addReply} className="mt20">回复</Button>
      </div>
    )
  } 
}
export default RichText