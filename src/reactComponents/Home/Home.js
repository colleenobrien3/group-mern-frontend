import React from "react";
import "./Home.css";
import Input from "../../storybookComponents/Input/Input";
import RecipeCard from "../../storybookComponents/RecipeCard/RecipeCard";
import CardContainer from "../CardContainer/CardContainer";

const Home = props => {
  return (
    <div className="homeContainer">
      <div className="homeCardContainer">
        <CardContainer
          recipes={props.recipe}
          delete={props.delete}
          like={props.like}
        />
      </div>
    </div>
  );
};

export default Home;
