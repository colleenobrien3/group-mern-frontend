import React from "react";
import "./Response.css";
import { Link } from "react-router-dom";

const Response = (props) => {
    console.log(props)
  let response;

  if (props.loggedIn === true) {
    response = (
      <div>
        Login successful!<Link to="/recipes">See recipes</Link>
      </div>
    );
  } else {
    response = (
      <div>
        Login unsuccessful!<Link to="/">Try again.</Link>
      </div>
    );
  }

return <div>{response}</div>
};

export default Response;
