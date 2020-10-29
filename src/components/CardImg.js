import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"

import { Row, Col, Image, Container } from 'react-bootstrap';

const CardImg = () => (
<Container>
  <Row>
    <Col sm={6} md={6}>
      <Link to="/about">
      <Image 
        src="https://d19m59y37dris4.cloudfront.net/varkala/1-2/img/product/category-women.jpg" rounded />
    </Link>
    </Col>
    <Col sm={6} md={6}>
      <Image src="https://d19m59y37dris4.cloudfront.net/varkala/1-2/img/product/category-men.jpg" rounded />
    </Col>
  </Row>
</Container> 
)

export default CardImg
