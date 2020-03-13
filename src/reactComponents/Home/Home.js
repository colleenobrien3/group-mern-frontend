import React from "react";
import "./Home.css";
import Input from "../../storybookComponents/Input/Input";
import { Redirect } from "react-router-dom";

const Home = props => {
  return (
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
