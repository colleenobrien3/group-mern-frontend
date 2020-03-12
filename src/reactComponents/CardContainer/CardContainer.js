import React from "react";
import "./CardContainer.css";
import Input from "../../storybookComponents/Input/Input";
import RecipeCard from "../../storybookComponents/RecipeCard/RecipeCard";

const CardContainer = props => {
  let cards = props.recipes.map((item, index) => {
    return (
      <RecipeCard
        key={index}
        data={props.recipes[index]}
        delete={props.delete}
      />
    );
  });

  return <div className="homeContainer">{cards}</div>;
};

export default CardContainer;
