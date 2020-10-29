import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const About = () => (
  <Layout>
    <div         style={{
          margin: `0 auto `,
         marginTop: `1.45rem`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}>
    <h1>Hi from the About page</h1>
    <p>Welcome to page About</p>
    <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default About
