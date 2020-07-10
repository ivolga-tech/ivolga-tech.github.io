/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PageWrapper from "../wrapper/wrapper";
import Header from "../header/header";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <PageWrapper>
      <Header headerLogo={require("../../assets/img/minified-svg/logo-ivolga.svg")} />
      <main>
        <div className="page__content" id="content">
          {children}
        </div>
      </main>
    </PageWrapper>
  );
};

export default Layout;
