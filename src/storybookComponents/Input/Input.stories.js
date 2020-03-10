import React from "react";
import { storiesOf } from "@storybook/react";

import Input from "./Input.js";

storiesOf("Input", module).add("Default", () => (
  <Input
    formLabel="Sign Up"
    placeHolderName="Name"
    placeHolderPWord="Password"
    buttonLabel="Redeem"
    onSubmit={(arg, arg2) => alert(arg + arg2)}
  />
));
