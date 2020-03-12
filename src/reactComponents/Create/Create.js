import React, { Component } from "react";
import "./Create.css";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import RecipeCard from "../../storybookComponents/RecipeCard/RecipeCard";
// import Button from "../../storybookComponents/Button/Button";
let reset = {
  name: "",
  author: "",
  cuisine: "",
  course: "",
  cooktime: "",
  ingredients: [],
  steps: [],
  image: "",
  ingName: "",
  measurementValue: "",
  measurementType: "",
  currentStep: ""
};
class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      author: "",
      cuisine: "",
      course: "",
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

  postRequest = e => {
    // e.preventDefault();
    e.persist();
    let url = "";
    if (process.env.NODE_ENV === "production") {
      url = "https://recipe-roledex.herokuapp.com/";
    }
    if (process.env.NODE_ENV === "development") {
      url = "http://localhost:8080/";
    }
    axios
      .post(url, {
        name: this.state.name,
        author: this.state.author,
        cuisine: this.state.cuisine,
        course: this.state.course,
        cooktime: this.state.cooktime,
        ingredients: this.state.ingredients,
        steps: this.state.steps,
        image: this.state.image
      })
      .then(res => {
        this.setState(reset);
      })
      .catch(err => console.log(err));
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

  removeLastStep = e => {
    let lastStep = this.state.steps;
    lastStep.pop();
    this.setState({ steps: lastStep });
  };

  removeLastIngredient = e => {
    let lastIngredient = this.state.ingredients;
    lastIngredient.pop();
    this.setState({ ingredients: lastIngredient });
  };

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
    return (
      <div className="create-wrapper">
        <div className="create-container">
          <h2>New Recipe</h2>
          <form placeholder="create-recipe" id="thisContainer">
            <input
              type="text"
              placeholder="title"
              onChange={this.setInput}
              className="name"
            ></input>
            <input
              type="text"
              placeholder="author"
              onChange={this.setInput}
              className="author"
            ></input>
            <input
              type="text"
              placeholder="cuisine"
              onChange={this.setInput}
              className="cuisine"
            ></input>
            <input
              type="text"
              placeholder="course"
              onChange={this.setInput}
              className="course"
            ></input>
            <input
              type="text"
              placeholder="cooktime"
              onChange={this.setInput}
              className="cooktime"
            ></input>
            <input
              type="text"
              placeholder="image"
              onChange={this.setInput}
              className="image"
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
            <button type="button" onClick={this.removeLastIngredient}>
              -
            </button>
            <button type="submit"> + </button>
          </form>
          <form onSubmit={this.setStep}>
            <input
              className="currentStep"
              placeholder="Wash Veggies..."
              onChange={this.setInput}
            ></input>
            <button type="button" onClick={this.removeLastStep}>
              -
            </button>
            <button type="submit">+</button>
          </form>
          <div onClick={this.props.post}>
            <button type="submit" onClick={this.postRequest}>
              Submit
            </button>
            <Link to="/">Back Home</Link>
          </div>
        </div>
        <RecipeCard data={this.state} />
        {/* <div className="list-container">
          <ul className="list">{list}</ul>
          <ol className="list">{list2}</ol>
        </div> */}
      </div>
    );
  }
}

export default withRouter(Create);
