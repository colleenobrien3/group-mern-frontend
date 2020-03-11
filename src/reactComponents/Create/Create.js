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
      measurementType: "",
      emptyValues: false,
      ingredeLength: 0
    };
  }
  //Setting input value to state
  setInput = e => {
    let value = e.target.className;
    e.persist();
    // e.preventDefault();
    this.setState({ [value]: e.target.value });
  };
  // Creating ingredient object and clearing ingredient input
  setIngredient = e => {
    e.preventDefault();
    if (
      !this.state.ingName ||
      !this.state.measurementValue ||
      !this.state.measurementType
    ) {
      console.log("no");
    } else {
      e.persist();
      let ingredient = {
        name: this.state.ingName,
        measurementValue: this.state.measurementValue,
        measurementType: this.state.measurementType
      };
      let all = this.state.ingredients;
      all.push(ingredient);
      this.setState({
        ingredients: all,
        ingredeLength: this.state.ingredeLength + 1,
        ingName: "",
        measurementValue: "",
        measurementType: ""
      });
      console.log(e);
      for (let i = 0; i < e.target.elements.length; i++) {
        e.target.elements[i].value = "";
      }
    }
  };

  render() {
    let list = this.state.ingredients.map(ingredient => {
      if (this.state.ingredeLength === 0) {
        return null;
      } else {
        return (
          <li
            key={ingredient.name}
          >{`${ingredient.measurementValue} ${ingredient.measurementType} of ${ingredient.name}`}</li>
        );
      }
    });

    console.log(this.state);
    return (
      <div>
        <form className="create-recipe" id="thisContainer">
          <h2>New Recipe</h2>
          <input
            type="text"
            className="author"
            onChange={this.setInput}
          ></input>
          <input
            type="text"
            className="cuisine"
            onChange={this.setInput}
          ></input>
          <input type="text" className="name" onChange={this.setInput}></input>
          <input
            type="text"
            className="cooktime"
            onChange={this.setInput}
          ></input>
          <input type="text" className="image" onChange={this.setInput}></input>
        </form>
        <form onSubmit={this.setIngredient}>
          <input
            type="text"
            placeholder="name (e.g. paprika, flour, chicken)"
            onChange={this.setInput}
            className="ingName"
          ></input>
          <input
            type="number"
            placeholder="value (e.g. 2, 2.25, 4)"
            onChange={this.setInput}
            className="measurementValue"
          ></input>
          <input
            type="text"
            placeholder="type (e.g. cups, tsp, tbsp)"
            onChange={this.setInput}
            className="measurementType"
          ></input>
          <button type="submit"> + </button>
        </form>
        <ul>{list}</ul>
      </div>
    );
  }
}

export default Create;
