import React from "react";
import "./Home.css";
import Input from "../../storybookComponents/Input/Input";

const Home = props => {
  return (
    <Input
      formLabel="Sign Up"
      placeHolderName="Name"
      placeHolderPWord="Password"
      buttonLabel="Redeem"
      onSubmit={(arg, arg2) => alert(arg + arg2)}
    />
  );
};

export default Home;
