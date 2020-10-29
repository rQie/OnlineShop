import React from "react"

import Layout from "../components/layout"
import ImageSlide from "../components/ImageSlide"
import CardImg from "../components/CardImg"
import CardDeck from "../components/CardDeck"

const IndexPage = () => (
  <Layout>
    <ImageSlide />
    <CardImg />
    <CardDeck /> 
  </Layout>
)

export default IndexPage
