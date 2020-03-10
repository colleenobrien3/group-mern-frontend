import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }
  getInputName = event => {
    this.setState({ name: event.target.value });
  };
  getInputPassword = event => {
    this.setState({ password: event.target.value });
  };
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
          onChange={event => this.getInputName(event)}
        ></input>
        <br />
        <input
          placeholder={this.props.placeHolderPWord || this.props.label}
          onChange={event => this.getInputPassword(event)}
        ></input>
        <br />
        <button>{this.props.buttonLabel}</button>
      </form>
    );
  }
}

export default Input;
