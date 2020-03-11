import React from "react";
import "./RecipeCard.css";

const RecipeCard = props => {
  console.log(props);
  // let classList = "";
  // if (props.large) {
  //   classList += ` button-large`;
  // }
  //   let steps = props.steps.map(item => {
  //     return <li>{item}</li>;
  //   });
  //   let ingredients = props.ingredients.map(item => {
  //     return <li>{item}</li>;
  //   });

  return (
    <div class="recipeCard">
      <h2 className="recipeName">{props.title}</h2>
      <p>Author: {props.author}</p>
      <h3>Cuisine: {props.cuisine}</h3>
      <h3>Course: {props.course}</h3>
      <h3>Cooktime: {props.cooktime}</h3>
      <div className="spanContainer">
        <span className="cardSpan ingredient-list">
          <p>Ingredients:</p>
          {/* <ul>{ingredients}</ul> */}
        </span>
        <span className="cardSpan step-list">
          <p>Steps:</p>
          {/* <ol>{steps}</ol> */}
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
