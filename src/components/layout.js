/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {


  return (
    <>
      <Header/>
      {children}
        <Footer className="footer" />
    </>
  )
}

export default Layout
