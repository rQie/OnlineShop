import React from "react";
import { Link } from "gatsby";
import { Row, Col } from 'react-bootstrap';

import PageLinks from "../constants/links"
import SocialLink from "../constants/socialLink"


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
              <p>
                <i className="fas fa-map-marker-alt"></i> Via Rossini 10, 10136
                Turin Italy
              </p>
              <p>
                <i className="fas fa-phone"></i> Phone: (0039) 333 12 68 347
              </p>
              <p>
                <i className="fas fa-envelope"></i> Email:{" "}
                <Link to="mailto:hello@domain.com">hello@domain.com</Link>
              </p>
              <p>
                <i className="fab fa-skype"></i> Skype: you_online
              </p>
            </Col>
            <Col md={4} className="footer-links wow fadeInUp">
              <Row>
                <Col>
                  <h3>Links</h3>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <p>
                    <Link className="scroll-link" to="#top-content">
                      Home
                    </Link>
                  </p>
                  <p>
                    <Link to="#">Features</Link>
                  </p>
                  <p>
                    <Link to="#">How it works</Link>
                  </p>
                  <p>
                    <Link to="#">Our clients</Link>
                  </p>
                </Col>
                <Col md={6}>
                  <p>
                    <Link to="#">Plans &amp; pricing</Link>
                  </p>
                  <p>
                    <Link to="#">Affiliates</Link>
                  </p>
                  <p>
                    <Link to="#">Terms</Link>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <Row className="footer-links">
            <div className="col-md-6 footer-copyright">
              &copy; 2020 Your company. All rights reserved. Template by{" "}
              <Link to="hhttps://rifqie.netlify.app/">RIFQIE</Link>
            </div>
            <SocialLink />
          </Row>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
