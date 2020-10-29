import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import { Navbar } from 'react-bootstrap';
import PageLinks from "../constants/links"

const Header = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/">Online Shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <PageLinks />
    </Navbar.Collapse>
  </Navbar>
)

export default Header
