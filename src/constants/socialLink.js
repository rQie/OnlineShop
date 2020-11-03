import React from "react"
import { Link } from "gatsby";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { SiInstagram, SiPinterest } from "react-icons/si";

import { Row, Col } from 'react-bootstrap';



const data = [
  {
    id: 1,
    icon: <FaFacebookF className="social-icon"></FaFacebookF>,
    url: "#",
  },
  {
    id: 2,
    icon: <GrTwitter className="social-icon"></GrTwitter>,
    url: "#",
  },
  {
    id: 3,
    icon: <FaGooglePlusG className="social-icon"></FaGooglePlusG>,
    url: "#",
  },
  {
    id: 4,
    icon: <SiInstagram className="social-icon"></SiInstagram>,
    url: "#",
  },
  {
    id: 5,
    icon: <SiPinterest className="social-icon"></SiPinterest>,
    url: "#",
  },
]
const links = data.map(link => {
  return (
    <div className="footer-social" key={link.id}>
      <Link to={link.url} className="social-link">
        {link.icon}
      </Link>
    </div>
  )
})

export default ({ styleClass }) => {
  return (
    <div className={`social-links ${styleClass ? styleClass : ""}`}>{links}</div>
  )
}
