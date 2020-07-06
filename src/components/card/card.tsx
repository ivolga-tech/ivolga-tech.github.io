import React from "react";
import "./card.css";

type Props = {
  children: React.ReactNode;
  cardType: "form" | "form-modal";
  className?: string;
};

const Card = ({ children, cardType }: Props): JSX.Element => {
  const renderCardType = (): JSX.Element => {
    switch (true) {
      case cardType === "form":
        return <div className="card card--form">{children}</div>;
      case cardType === "form-modal":
        return <div className="card card--form card--modal">{children}</div>;
    }
    return <div className="card">{children}</div>;
  };

  return renderCardType();
};

export default Card;
