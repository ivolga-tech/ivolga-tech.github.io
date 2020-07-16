import React from "react";
import HeaderMenu from "./нeader-menu";
import { action } from "@storybook/addon-actions";

export default { title: "Header/Header menu" };

export const headerMenu = () => (
  <HeaderMenu
    menuState={false}
    openMenu={action("open menu")}
    closeMenu={action("close menu")}
    openModal={action("button-click")}
  />
);
