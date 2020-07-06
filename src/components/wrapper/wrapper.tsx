import React from "react";
import "./wrapper.css";
import "flexboxgrid"
import { joinCssClasses } from "../../utils/utils";
import { useLocation } from "@reach/router";

type Props = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: Props) => {
  const location = useLocation().pathname;

  return (
    <div className="page page--defaults" id="page">
      <div className="page__wrapper">
        <div className={joinCssClasses("page__img", location !== "/" ? "blur" : "")}>
          <div className="page__img-wrap">
            <figure className="icon icon--ivolga">
              <img
                src="../../assets/img/minified-svg/ivolga-bg.svg"
                alt="ivolga-bg"
                width="1083px"
                height="1081px"
              />
            </figure>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
