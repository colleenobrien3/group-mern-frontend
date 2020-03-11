import React, { Component } from "react";
// import massageBox from ".storybookComponents/massageBox/massageBox";
import "./massageBox.css"


class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
 
  render() {
    return (
      <div className="massageBox">
        <div>
          <p>massage</p>
        </div>
      </div>
    );
  }
}
 
export default Message;