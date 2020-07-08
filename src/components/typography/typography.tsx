import React from "react";
import { joinCssClasses } from "../../utils/utils";

type Props = {
  children?: React.ReactNode;
  className?: string;
  component?: "p" | "h1" | "h2" | "span";
};

export const Typography = (props: Props) => {
  const { children, component: Component = "p", className } = props;

  return (
    <Component style={{ margin: 0 }} className={joinCssClasses(Component, className)}>
      {children}
    </Component>
  );
};
