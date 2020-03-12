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

  let picture = {
    backgroundImage: `url(${recipe.image})`
  };
  return (
    <div className="recipeCard">
      <div className="change">
        <div
          className="delete"
          onClick={props.delete}
          id={props.data._id}
        ></div>
        <div className="edit"></div>
      </div>
      <h2 className="recipeName">{recipe.name}</h2>
      <div className="card-top">
        <div className="card-content">
          <p className="bold">Author: {recipe.author}</p>
          <p className="bold">Cuisine: {recipe.cuisine}</p>
          <p className="bold">Course: {recipe.course}</p>
          <p className="bold">Cooktime: {recipe.cooktime}</p>
        </div>
        <div className="card-picture" style={picture}></div>
      </div>
      <div className="spanContainer">
        <span className="cardSpan ingredient-list">
          <p>Ingredients:</p>
          <ul>{ingredients}</ul>
        </span>
        <span className="cardSpan step-list">
          <p>Instructions:</p>
          <ol>{steps}</ol>
        </span>
      </div>
      <div onClick={props.like} id={props.data._id}>
        Like
        <div>
          Likes:
          <span>{recipe.likes}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
