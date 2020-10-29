import React from "react"
import { Nav } from 'react-bootstrap';

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
        <Nav.Link id={link.id} href={link.url}>{link.text}</Nav.Link>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <Nav className="mr-auto" >
      {tempLinks}
      </Nav>

  )
}

