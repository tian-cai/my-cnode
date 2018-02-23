import React from "react";

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div style={{ display: "inline-block", verticalAlign: "middle" }}>
        <h1>Hello World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Hello;
