import React from "react"

import Layout from "../components/layout"
import ImageSlide from "../components/ImageSlide"
import CardImg from "../components/CardImg"
import CardDeck from "../components/CardDeck"

const IndexPage = () => (
  <Layout>
    <ImageSlide />
    <CardImg />
        <div         style={{
          // margin: `0 auto `,
        //  marginTop: `1.45rem`,
          // maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}>
    <CardDeck /> 
    </div>
  </Layout>
)

export default IndexPage
