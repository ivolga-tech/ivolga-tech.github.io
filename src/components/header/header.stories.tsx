import React from "react";
import { CreateImage } from "../../utils/utils";
import Header from "./header";

export default { title: "Header" };

export const headerRoot = () => (
  <Header headerLogo={CreateImage({ size: 111, size2: 60, text: "Logo" })} />
);
