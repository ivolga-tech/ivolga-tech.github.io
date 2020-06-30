/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../header/header"
//import "./layout.css"
import PageWrapper from "../wrapper/wrapper";

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <PageWrapper>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
    </PageWrapper>
  )
}

export default Layout
