import React from "react";
import { Link } from "react-router-dom";

const Deleted = () => {
  return (
    <div>
      <h2>Recipe has been deleted</h2>
      <Link to="/">Go back to All Recipes</Link>
    </div>
  );
};

export default Deleted;
