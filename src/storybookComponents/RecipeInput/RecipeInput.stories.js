import React from "react";
import { storiesOf } from "@storybook/react";

import RecipeInput from "./RecipeInput.js";

storiesOf("RecipeInput", module).add("Sign Up", () => (
  <RecipeInput
    formLabel="Add Recipe"
    placeHolderName="Name"
    placeHolderPWord="Password"
    placeHolderFoodName="Recipe Name"
    placeHolderFoodCat="Category"
    buttonLabel="Redeem"
    onSubmit={(arg, arg2, arg3, arg4) => alert(arg + arg2 + arg3 + arg4)}
  />
));
