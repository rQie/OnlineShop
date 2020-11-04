import React from "react";
import { Link } from "gatsby";
import { Row, Col } from 'react-bootstrap';

import PageLinks from "../constants/links"
import SocialLink from "../constants/socialLink"
import Contacts from "../constants/contact"


const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <Row>
            <Col md={3} className="footer-about wow fadeInUp">
              <img
                className="logo-footer"
                src="assets/img/logo.png"
                alt="logo-footer"
                data-at2x="assets/img/logo.png"
              />
              <p>
                We are a young company always looking for new and creative ideas
                to help you with our products in your everyday work.
              </p>
              <p>
                <Link to="#">Our Team</Link>
              </p>
            </Col>
            <Col md={4} className="offset-md-1 footer-contact wow fadeInDown">
              <h3>Contact</h3>
              <Contacts/>
            </Col>
            <Col md={4} className="footer-links wow fadeInUp">
              <Row>
                <Col>
                  <h3>Links</h3>
                </Col>
              </Row>
              <Row >
                  <PageLinks/>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <Row className="footer-links">
            <Col col={6} className="footer-copyright">
              &copy; 2020 Your company. All rights reserved. Template by{" "}
              <Link to="hhttps://rifqie.netlify.app/">RIFQIE</Link>
            </Col>
            <SocialLink />
          </Row>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
