import React from "react";
import "./Home.css";
import Input from "../../storybookComponents/Input/Input";
import RecipeCard from "../../storybookComponents/RecipeCard/RecipeCard";
import CardContainer from "../CardContainer/CardContainer";

const Home = props => {
  return (
    // <div className="homeContainer">
      <div className="homeCardContainer">
        <Input
          setPassword={props.setPassword}
          setEmail={props.setEmail}
          signUp={props.signUp}
          buttonLabel="Submit"
          formLabel="Sign Up"
        />
      </div>
    // </div>
  );
};

export default Home;
