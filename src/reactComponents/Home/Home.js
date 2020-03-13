import React from "react";
import "./Home.css";
import Input from "../../storybookComponents/Input/Input";

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
      <Input
        setPassword={props.setPassword}
        setEmail={props.setEmail}
        signUp={props.signIn}
        buttonLabel="Submit"
        formLabel="Sign In"
      />
    </div>
    // </div>
  );
};

export default Home;
