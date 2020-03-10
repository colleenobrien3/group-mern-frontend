import React, { Component } from "react";
import "./Create.css";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      author: "",
      cuisine: "",
      cooktime: "",
      ingredients: [],
      steps: [],
      image: "",
      ingName: "",
      measurementValue: "",
      measurementType: ""
    };
  }
  setInput = e => {
    let place = e.target.placeholder;
    e.preventDefault();
    this.setState({ [place]: e.target.value });
  };

  setIngredient = e => {
    e.preventDefault();
    let ingredient = {
      name: this.state.ingName,
      measurementValue: this.state.measurementValue,
      measurementType: this.state.measurementType
    };
    let all = this.state.ingredients;
    all.push(ingredient);
    this.setState({ ingredients: all });
  };

  render() {
    console.log(this.state);
    return (
      <form className="create-recipe" id="thisContainer">
        <h2>New Recipe</h2>
        <input
          type="text"
          placeholder="author"
          onChange={this.setInput}
        ></input>
        <input
          type="text"
          placeholder="cuisine"
          onChange={this.setInput}
        ></input>
        <input type="text" placeholder="name" onChange={this.setInput}></input>
        <input
          type="text"
          placeholder="cooktime"
          onChange={this.setInput}
        ></input>
        <input type="text" placeholder="image" onChange={this.setInput}></input>
        <input
          type="text"
          placeholder="ingName"
          onChange={this.setInput}
        ></input>
        <input
          type="text"
          placeholder="measurementValue"
          onChange={this.setInput}
        ></input>
        <input
          type="text"
          placeholder="measurementType"
          onChange={this.setInput}
        ></input>
        <button type="submit" onClick={this.setIngredient}></button>
      </form>
    );
  }
}

export default Create;
