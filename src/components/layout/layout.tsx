/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "../header/header"
import PageWrapper from "../wrapper/wrapper";

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {

  return (
    <PageWrapper>
      <Header />
      <main>{children}</main>
    </PageWrapper>
  )
}

export default Layout
