import React from "react";
import "./RecipeCard.css";

const RecipeCard = props => {
  let recipe = props.data;
  console.log(recipe);

  let steps = recipe.steps.map((item, index) => {
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
      <p>Author: {recipe.author}</p>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Course: {recipe.course}</p>
      <p>Cooktime: {recipe.cooktime}</p>
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
