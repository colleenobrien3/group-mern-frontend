import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => {
  let linkOne;
  let linkTwo;
  let linkThree;

  if (localStorage.token) {
    linkOne = (
      <Link to="/recipes" className="nav-link">
        <p>Recipes</p>
      </Link>
    );
    linkTwo = (
      <Link to="/create" className="nav-link">
        <p>Create</p>
      </Link>
    );
    linkThree = (
      <Link to="/" onClick={props.logout} className="nav-link">
        <p>Log Out</p>
      </Link>
    );
  } else {
    linkOne = (
      <Link to="/" className="nav-link">
        <p>Sign In</p>
      </Link>
    );
    linkTwo = null;
    linkThree = null;
  }

  return (
    <nav ref={props.open}>
      <div className="close-nav" onClick={props.closeNav}>
        X
      </div>
      <div className="link-box">
        {linkOne}
        {linkTwo}
        {linkThree}
      </div>
    </nav>
  );
};

export default Navbar;
