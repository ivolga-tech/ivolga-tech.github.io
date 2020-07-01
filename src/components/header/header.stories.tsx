import React from "react";
import Header from "./header";
import { CreateImage } from "../../utils/utils";

export default { title: "Header" };

export const headerRoot = () => (
  <Header headerLogo={CreateImage({ size: 111, size2: 60, text: "Logo" })} />
);
