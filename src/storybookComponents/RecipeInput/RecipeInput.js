import React, { Component } from "react";
import "./RecipeInput.css";

class RecipeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      foodName: "",
      foodCat: ""
    };
  }
  getInputName = event => {
    this.setState({ name: event.target.value });
  };
  getInputPassword = event => {
    this.setState({ password: event.target.value });
  };
  getInputFoodName = event => {
    this.setState({ foodName: event.target.value });
  };
  getInputFoodCat = event => {
    this.setState({ foodCat: event.target.value });
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
          this.props.onSubmit(
            this.state.name,
            this.state.password,
            this.state.foodName,
            this.state.foodCat
          );
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
        ></input>{" "}
        <br />
        <input
          placeholder={this.props.placeHolderFoodName || this.props.label}
          onChange={event => this.getInputFoodName(event)}
        ></input>
        <br />
        <input
          placeholder={this.props.placeHolderFoodCat || this.props.label}
          onChange={event => this.getInputFoodCat(event)}
        ></input>{" "}
        <br />
        <button>{this.props.buttonLabel}</button>
      </form>
    );
  }
}

export default RecipeInput;
