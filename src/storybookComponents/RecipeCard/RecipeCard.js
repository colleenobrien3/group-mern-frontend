import React from "react";
import "./RecipeCard.css";

const RecipeCard = props => {
  let classList = "";
  if (props.large) {
    classList += ` button-large`;
  }
  let steps = props.steps.map(item => {
    return <li>{item}</li>;
  });
  let ingredients = props.ingredients.map(item => {
    return <li>{item}</li>;
  });

  return (
    <div class="recipeCard">
      <div>{props.title}</div>
      <div className="spanContainer">
        <span className="cardSpan">
          <p>Ingredients</p>
          <ul>{ingredients}</ul>
        </span>
        <span className="cardSpan">
          <p>Steps</p>
          <ol>{steps}</ol>
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
