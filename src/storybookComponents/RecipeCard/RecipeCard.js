import React from "react";
import "./RecipeCard.css";

const RecipeCard = props => {
  // let classList = "";
  // if (props.large) {
  //   classList += ` button-large`;
  // }
  let steps = props.steps.map(item => {
    return <li>{item}</li>;
  });
  let ingredients = props.ingredients.map(item => {
    return <li>{item}</li>;
  });

  return (
    <div class="recipeCard">
      <h2 className="recipeName">{props.title}</h2>
      <div className="spanContainer">
        <span className="cardSpan ingredient-list">
          <p>Ingredients:</p>
          <ul>{ingredients}</ul>
        </span>
        <span className="cardSpan step-list">
          <p>Steps:</p>
          <ol>{steps}</ol>
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
