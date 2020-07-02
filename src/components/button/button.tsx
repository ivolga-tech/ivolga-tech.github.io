import React from "react";
import "./button.css";
import { Typography } from "../typography/typography";
import { joinCssClasses } from "../../utils/utils";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { component?: "div" | "button" };

export const Button = (props: Props) => {
  const { children, className, component: Component = "button", ...otherProps } = props;

  const content =
    typeof children === "string" ? (
      <Typography component="span" className="button__title">
        {children}
      </Typography>
    ) : (
      children
    );
  const joinedClassName = joinCssClasses("btn", className);
  if (Component !== "button") {
    return <Component className={joinedClassName}>{content}</Component>;
  }

  return (
    <button type="button" className={joinedClassName} {...otherProps}>
      {content}
    </button>
  );
};
