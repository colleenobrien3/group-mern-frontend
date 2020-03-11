import React from "react";
import "./RecipeCard.css";

const RecipeCard = props => {
  let recipe = props.data;
  console.log(recipe);

  let steps = recipe.Steps.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  let ingredients = recipe.ingredients.map((item, index) => {
    return (
      <li
        key={index}
      >{`${item.measurementValue} ${item.measurementType} of ${item.name}`}</li>
    );
  });

  return (
    <div class="recipeCard">
      <h2 className="recipeName">{recipe.name}</h2>
      <h3>Author: {recipe.author}</h3>
      <h3>Cuisine: {recipe.cuisine}</h3>
      <h3>Course: {recipe.course}</h3>
      <h3>Cooktime: {recipe.cooktime}</h3>
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
