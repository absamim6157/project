import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Company Name</h5>
            <p>Sabrina's Store .</p>
          </Col>
          <Col md={3}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                <li><i className="fa fa-envelope" aria-hidden="true"></i>
                        </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
