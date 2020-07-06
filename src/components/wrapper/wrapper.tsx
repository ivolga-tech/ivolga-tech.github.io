import React from "react";
import "./wrapper.css";

type Props = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: Props) => (
  <div className="page page--defaults" id="page">
    <div className="page__wrapper">
      <div className="page__img">
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

      <div>{children}</div>
    </div>
  </div>
);

export default PageWrapper;
