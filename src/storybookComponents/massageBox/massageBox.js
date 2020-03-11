import React, { Component } from "react";
// import massageBox from ".storybookComponents/massageBox/massageBox";
import "./massageBox.css"





class Message extends React.Component {
  showAlert() {
    this.refs.messageBox.alert("Alert", "This is alert!").ok(() => {
      console.log("Alert ok!");
    });
  }

  showConfirm() {
    this.refs.messageBox
      .confirm("Confirm", "This is confirm!")
      .ok(() => {
        console.log("Confirm ok!");
      })
      .cancle(() => {
        console.log("Confirm cancle!");
      });
  }

  render() {
    return (
      <div className="massageBox">
        <h6>Writ your Massage</h6>
        <textarea
          id="wmd-input"
          name="post-text"
          class="wmd-input s-input bar0 js-post-body-field processed"
          data-post-type-id="2"
          cols="92"
          rows="15"
          tabindex="101"
          data-min-length=""
        ></textarea>
        </div>
    );
  }
}



 
export default Message;