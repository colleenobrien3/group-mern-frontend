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
      <h3>{props.title}</h3>
      <div className="spanContainer">
        <span className="CardSpan">
          <h4>Ingredients</h4>
          <ul>{ingredients}</ul>
        </span>
        <span className="cardSpan">
          <h4>Steps</h4>
          <ol>{steps}</ol>
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
