import React from "react";
import "./Home.css";
import Input from "../../storybookComponents/Input/Input";
import { Redirect } from "react-router-dom";
import RecipeCard from "../../storybookComponents/RecipeCard/RecipeCard";
import CardContainer from "../CardContainer/CardContainer";

const Home = props => {
  return (
    // <div className="homeContainer">
    <div className="homeCardContainer">
      {localStorage.token ? (
        <Redirect to="/recipes" />
      ) : (
        <>
          <Input
            setPassword={props.setPassword}
            setEmail={props.setEmail}
            signUp={props.signUp}
            buttonLabel="Submit"
            formLabel="Sign Up"
          />
          <Input
            setPassword={props.setPassword}
            setEmail={props.setEmail}
            signUp={props.signIn}
            buttonLabel="Submit"
            formLabel="Sign In"
          />
        </>
      )}
    </div>
    // </div>
  );
};

export default Home;
