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

const Layout = ({ children }: Props) => {
  return (
    <PageWrapper>
      <Header headerLogo="../../assets/img/minified-svg/logo-ivolga.svg" />
      <main>{children}</main>
    </PageWrapper>
  );
};

export default Layout;
