import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  let linkOne;
  let linkTwo;

  if (props.loggedIn === true) {
    linkOne = (
      <Link to="/recipes">
        <p>Recipes</p>
      </Link>
    );
    linkTwo = (
      <Link to="/create">
        <p>Create</p>
      </Link>
    );
  } else {
      linkOne = (
        <Link to="/">
          <p>Sign In/Sign Up</p>
        </Link>
      );
      linkTwo = (
          null
      )
  }

  return (
    <nav ref={props.open}>
      <div className="close-nav" onClick={props.closeNav}>
        X
      </div>
      <div>
        {linkOne}
      </div>

      {linkTwo}
    </nav>
  );
};

export default Navbar;
