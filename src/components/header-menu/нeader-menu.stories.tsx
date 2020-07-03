import React from "react";
import HeaderMenu from "./нeader-menu";
import { action } from "@storybook/addon-actions";

export default { title: "Header/Header menu" };

export const headerMenu = () => <HeaderMenu openModal={action("button-click")} />;
