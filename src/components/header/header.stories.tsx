import React from "react";
import { CreateImage } from "../../utils/utils";
import Header from "./header";
import { action } from "@storybook/addon-actions";

export default { title: "Header" };

export const headerRoot = () => (
  <Header
    menuState={false}
    openMenu={action("open menu")}
    closeMenu={action("close menu")}
    headerLogo={CreateImage({ size: 111, size2: 60, text: "Logo" })}
  />
);
