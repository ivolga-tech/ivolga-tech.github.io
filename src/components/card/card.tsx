import React from "react";
import "./card.css";
import { Link } from "gatsby";
import { joinCssClasses } from "../../utils/utils";

type Props = {
  children: React.ReactNode;
  cardType?: "form" | "form-modal" | "link";
  className?: string;
  to?: string;
  title?: string;
};

const Card = ({ children, cardType, className, to, title }: Props): JSX.Element => {
  const renderCardType = (): JSX.Element => {
    switch (true) {
      case cardType === "form":
        return <div className="card card--form">{children}</div>;
      case cardType === "form-modal":
        return <div className="card card--form card--modal">{children}</div>;
      case cardType === "link":
        return (
          <Link
            to={to ? to : ""}
            className={joinCssClasses("card", className)}
            data-toggle="link"
            title={title}
          >
            {children}
          </Link>
        );
    }
    return <div className={joinCssClasses("card", className)}>{children}</div>;
  };

  return renderCardType();
};

export default Card;
