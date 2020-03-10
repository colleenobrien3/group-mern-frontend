import React from "react";
import { storiesOf } from "@storybook/react";

import RecipeCard from "./RecipeCard";

storiesOf("RecipeCard", module).add("Sign Up", () => (
  <RecipeCard
    title="pizza"
    ingredients={["cheese", "sauce"]}
    steps={["make", "eat"]}
  />
));
