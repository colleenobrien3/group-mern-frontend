import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Input.css";

class Input extends Component {
  render() {
    let classList = "signUp";
    if (this.props.large) {
      classList += ` Input-large`;
    }
    return (
      <form
        className={classList}
        onSubmit={(e) => {
          e.preventDefault();
          this.props.onSubmit(this.state.name, this.state.password);
        }}
        id="thisContainer"
      >
        <div>{this.props.formLabel}</div>
        <label>Email</label>
        <input
          placeholder={this.props.placeHolderName || this.props.label}
          onChange={this.props.setEmail}
        ></input>

        <br />
        <label> Password</label>
        <input
          placeholder={this.props.placeHolderPWord || this.props.label}
          onChange={this.props.setPassword}
          type= "password"
        ></input>

        <br />
        <Link to="/response">
          <button onClick={this.props.signUp}>{this.props.buttonLabel}</button>
        </Link>
      </form>
    );
  }
}

export default Input;
