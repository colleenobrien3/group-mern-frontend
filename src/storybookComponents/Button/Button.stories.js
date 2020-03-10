import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module).add("Primary", () => <Button label="Primary" />);

storiesOf("Button", module).add("Large", () => (
  <Button label="Primary" large />
));
