import React from "react";
import { storiesOf } from "@storybook/react";

import RecipeCard from "./RecipeCard";

storiesOf("RecipeCard", module).add("Sign Up", () => (
  <RecipeCard
    title="Pizza"
    ingredients={["cheese", "sauce"]}
    steps={["make", "eat"]}
  />
));
