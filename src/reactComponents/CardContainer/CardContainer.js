import React from "react";
import "./CardContainer.css";
import Input from "../../storybookComponents/Input/Input";
import RecipeCard from "../../storybookComponents/RecipeCard/RecipeCard";

const CardContainer = props => {
  //   console.log(props);
  //   for (let i = 0; i < props.recipes.length; i++) {
  //     console.log(props.recipes[i]);
  //   }
  let cards = props.recipes.map((item, index) => {
    console.log(item);
    return <RecipeCard key={index} data={props.recipes[index]} />;
  });

  return <div className="homeContainer">{cards}</div>;
};

export default CardContainer;
