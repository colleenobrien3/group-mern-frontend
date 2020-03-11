import React from "react";
import "./Home.css";
import Input from "../../storybookComponents/Input/Input";
import RecipeCard from "../../storybookComponents/RecipeCard/RecipeCard";
import CardContainer from "../CardContainer/CardContainer";

const Home = props => {
  console.log(props.refresh);
  return (
    <div className="homeContainer">
      <div className="homeCardContainer">
        <CardContainer recipes={props.recipe} delete={props.delete} />
      </div>
    </div>
  );
};

export default Home;
