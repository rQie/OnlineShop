import React from "react"
import { Link } from "gatsby";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { SiInstagram, SiPinterest } from "react-icons/si";

const data = [
  {
    id: 1,
    icon: <FaFacebookF></FaFacebookF>,
    url: "#",
  },
  {
    id: 2,
    icon: <GrTwitter></GrTwitter>,
    url: "#",
  },
  {
    id: 3,
    icon: <FaGooglePlusG></FaGooglePlusG>,
    url: "#",
  },
  {
    id: 4,
    icon: <SiInstagram></SiInstagram>,
    url: "#",
  },
  {
    id: 5,
    icon: <SiPinterest></SiPinterest>,
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
