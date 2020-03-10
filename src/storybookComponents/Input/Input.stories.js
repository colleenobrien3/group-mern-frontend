import React from "react";
import { storiesOf } from "@storybook/react";

import Input from "./Input.js";

storiesOf("Input", module).add("Sign Up", () => (
  <Input
    formLabel="Sign Up"
    placeHolderName="Name"
    placeHolderPWord="Password"
    buttonLabel="Redeem"
    onSubmit={(arg, arg2) => alert(arg + arg2)}
  />
));

storiesOf("Input", module).add("Sign In", () => (
  <Input
    formLabel="Sign In"
    placeHolderName="Name"
    placeHolderPWord="Password"
    buttonLabel="Sign In"
    onSubmit={(arg, arg2) => alert(arg + arg2)}
  />
));
