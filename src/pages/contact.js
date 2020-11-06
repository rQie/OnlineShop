import React from "react"
import { Parallax } from 'react-parallax';
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { BsChat } from "react-icons/bs";



import Layout from "../components/layout"
import { Row } from "react-bootstrap";

const Image1 = `https://images.unsplash.com/photo-1523885140068-cafbdc242af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80`

const Contact = () => (
  <Layout>
    <Parallax bgImage={Image1} strength={-200}>
      <div style={{ maxHeight: "100%" }}>
        <Row className="contact-row" >
        <div class="col-8-lg-4 bg-white contact-container">
    <div class="contact-inner">
      <FiPhoneCall className="contact-icon"/>
      <h2 class="card-title"><span class="d-block text-gray">Feel the summer</span> Tennis Look</h2>
      <a href="#" class="underlined">Shop Now</a>
    </div>
  </div>
  <div class="col-8-lg-4 bg-white contact-container">
    <div class="contact-inner">
    <FiMail className="contact-icon" />
      <h2 class="card-title"><span class="d-block text-gray">Feel the summer</span> Tennis Look</h2>
      <a href="#" class="underlined">Shop Now</a>
    </div>
  </div>
  <div class="col-8-lg-4 bg-white contact-container">
    <div class="contact-inner">\
    <BsChat className="contact-icon" />
      <h2 class="card-title"><span class="d-block text-gray">Feel the summer</span> Tennis Look</h2>
      <a href="#" class="underlined">Shop Now</a>
    </div>
  </div>
        </Row>
      </div>
    </Parallax>
  </Layout>
)

export default Contact
