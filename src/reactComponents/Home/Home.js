import React from "react";
import "./Home.css";
import Input from "../../storybookComponents/Input/Input";
import RecipeCard from "../../storybookComponents/RecipeCard/RecipeCard";

const Home = props => {
  return (
    <div className="homeContainer">
      <Input
        formLabel="Sign Up"
        placeHolderName="Name"
        placeHolderPWord="Password"
        buttonLabel="Redeem"
        onSubmit={(arg, arg2) => alert(arg + arg2)}
      />
      <RecipeCard
        title="pizza"
        ingredients={["cheese", "sauce"]}
        steps={["make", "eat"]}
      />
    </div>
  );
};

export default Home;
