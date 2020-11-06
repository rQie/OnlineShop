import React from "react"
import { Link } from "gatsby";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const data = [
  {
    id: 1,
    icon: <ImLocation className="social-icon"></ImLocation>,
    text: "Via Rossini 10, 1013 Turin Italy",
   },
  {
    id: 2,
    icon: <FaPhone className="social-icon"></FaPhone>,
    text: "Phone: (0039) 333 12 68 347",
  },
  {
    id: 3,
    icon: <FaEnvelope className="social-icon"></FaEnvelope>,
    text: "Email: ",
    url: "mailto:hello@domain.com"
  },
]
const links = data.map(link => {
  return (
    <div key={link.id}>
      <div >
        {link.icon}
        {link.text}
        <Link to={link.url}>
          {link.url}
      </Link>
      </div>
    </div>
  )
})

export default () => {
  return (
    <div>{links}</div>
  )
}