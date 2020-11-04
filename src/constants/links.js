import React from "react"
import { Nav } from 'react-bootstrap';

const data = [
  {
    id: 1,
    text: "Home",
    url: "/",
    style: "scoll-Link"
  },
  {
    id: 2,
    text: "About",
    url: "/about/",
  },
  {
    id: 3,
    text: "Contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
        <Nav.Link id={link.id} href={link.url}>{link.text}</Nav.Link>
  )
})

export default () => {
  return (
    <Nav className="link-direction" >
      {tempLinks}
      </Nav>

  )
}

