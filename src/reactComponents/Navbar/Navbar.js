import React from "react";
import { Link } from "react-router-dom";

 const Navbar = (props) => {
  return (
    <nav ref={props.open}>
      <div className="close-nav" onClick={props.closeNav} >
        X
      </div>
      <div>
        <Link to="/home">
          <p>Home</p>
        </Link>
      </div>

      <Link to="/create">
        <p>Create</p>
      </Link>
    </nav>
  );
};

export default Navbar