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
      currentStep: ""
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
      //   console.log("no");
    } else {
      //   e.persist();
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
      //   console.log(e);
      for (let i = 0; i < e.target.elements.length; i++) {
        e.target.elements[i].value = "";
      }
    }
  };

  removeLast = e => {};

  setStep = e => {
    e.preventDefault();
    // e.persist();
    let allSteps = this.state.steps;
    allSteps.push(e.target.elements[0].value);
    this.setState({
      steps: allSteps,
      currentStep: ""
    });
    e.target.elements[0].value = "";
  };

  render() {
    let list = this.state.ingredients.map(ingredient => {
      return (
        <li
          key={ingredient.name}
        >{`${ingredient.measurementValue} ${ingredient.measurementType} of ${ingredient.name}`}</li>
      );
    });

    let list2 = this.state.steps.map((step, index) => {
      return <li key={index}>{step}</li>;
    });

    console.log(this.state);
    return (
      <div className="create-wrapper">
        <div className="create-container">
          <form placeholder="create-recipe" id="thisContainer">
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
            <input
              type="text"
              placeholder="name"
              onChange={this.setInput}
            ></input>
            <input
              type="text"
              placeholder="cooktime"
              onChange={this.setInput}
            ></input>
            <input
              type="text"
              placeholder="image"
              onChange={this.setInput}
            ></input>
          </form>
          <form className="form-ingredients" onSubmit={this.setIngredient}>
            <input
              type="text"
              placeholder="name (e.g. paprika, flour, chicken)"
              onChange={this.setInput}
              className="ingName"
            ></input>
            <input
              type="text"
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
          <form onSubmit={this.setStep}>
            <input
              className="currentStep"
              placeholder="Wash Veggies"
              onChange={this.setInput}
            ></input>
            <button type="submit">+</button>
          </form>
        </div>
        <div className="list-container">
          <ul>{list}</ul>
          <ol>{list2}</ol>
        </div>
      </div>
    );
  }
}

export default Create;
