import React from "react"
// import "bootstrap/dist/css/bootstrap.css"
import { Carousel } from 'react-bootstrap';


const ImageSlide = () => {

  return(
<Carousel className="carousel slide carousel-fade" intervel={500} style={{marginBottom: "1.45rem"}} >
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100" //must active *study why active!!!
      src="https://d19m59y37dris4.cloudfront.net/varkala/1-2/img/photo/home-3-plain.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="carousel-caption d-none d-md-block">
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100" //must active *study why active!!!
      src="https://static.nike.com/a/images/f_auto/dpr_1.0/w_1239,c_limit/79242e64-26fc-4af6-b4ca-77cb802d9b75/nike-just-do-it.jpg"
      alt="Third slide"
    />
    <Carousel.Caption className="carousel-caption d-none d-md-block">
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100" //must active *study why active!!!
      src="https://d19m59y37dris4.cloudfront.net/varkala/1-2/img/photo/home-2-plain.jpg"
      alt="Third slide"
    />
    <Carousel.Caption className="carousel-caption d-none d-md-block">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}


export default ImageSlide