import React from "react";
import { storiesOf } from "@storybook/react";

import RecipeCard from "./RecipeCard";

storiesOf("RecipeCard", module).add("Sign Up", () => (
  <RecipeCard
    title="Pizza"
    ingredients={[
      "cheese",
      "sauce",
      "pepperoni",
      "olives",
      "mushrooms",
      "sorrow",
      "bacon",
      "green pepeprs",
      "garlic"
    ]}
    steps={["make", "eat"]}
  />
));
