import React from "react"
import { Link } from "gatsby"

import { Row, Col, Image,  Container } from 'react-bootstrap';

const CardImg = () => (
<Container style={{marginBottom: "1.45rem"}}>
  <Row>
    <Col sm={6} md={6}>
      <div className="cardInner"> 
      <Link to="/about">
      <Image
        src="https://d19m59y37dris4.cloudfront.net/varkala/1-2/img/product/category-women.jpg" rounded />
    </Link>
    </div>
    </Col>
    <Col sm={6} md={6}>
      <div className="cardInner">
      <Image src="https://d19m59y37dris4.cloudfront.net/varkala/1-2/img/product/category-men.jpg" rounded />
      </div>
    </Col>
  </Row>
</Container> 
)

export default CardImg
