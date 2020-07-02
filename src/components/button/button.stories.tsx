import React from "react";
import { Button } from "./button";

export default { title: "Button" };

export const DefaultButton = () => <Button>button</Button>;

export const LargeButton = () => <Button className="btn--lg">button</Button>;

export const YellowButton = () => <Button className="btn--yellow">button</Button>;

export const MobileButton = () => <Button className="btn--mobile">button</Button>;
