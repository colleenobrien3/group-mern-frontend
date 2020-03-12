import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    let classList = "";
    if (this.props.large) {
      classList += ` Input-large`;
    }
    return (
      <form
        className={classList}
        onSubmit={e => {
          e.preventDefault();
          this.props.onSubmit(this.state.name, this.state.password);
        }}
        id="thisContainer"
      >
        <h4>{this.props.formLabel}</h4>
        <input
          placeholder={this.props.placeHolderName || this.props.label}
          onChange={this.props.setEmail}
        ></input>
        <br />
        <input
          placeholder={this.props.placeHolderPWord || this.props.label}
          onChange={this.props.setPassword}
        ></input>
        <br />
        <button>{this.props.buttonLabel}</button>
      </form>
    );
  }
}

export default Input;
