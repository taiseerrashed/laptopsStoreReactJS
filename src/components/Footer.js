import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row className="ms-5">
          <Col xs={12} md={4}>
            <h3 className="mb-3">Quick Links</h3>
            <ul className="list-unstyled">
              <li>
                <Link to="/" style={{textDecoration: "none", color: "white"}}>Home</Link>
              </li>
              <li>
                <Link to="/store" style={{textDecoration: "none", color: "white"}}>Products</Link>
              </li>
              <li>
                <Link to="/about" style={{textDecoration: "none", color: "white"}}>About Us</Link>
              </li>
              <li>
                <Link to="/contact" style={{textDecoration: "none", color: "white"}}>Contact</Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h3 className="mb-3">Follow Us</h3>
            <ul className="list-unstyled">
              <li>
                <Link to="https://facebook.com" style={{textDecoration: "none", color: "white"}}>Facebook</Link>
              </li>
              <li>
                <Link to="https://twitter.com" style={{textDecoration: "none", color: "white"}}>Twitter</Link>
              </li>
              <li>
                <Link to="https://instagrm.com" style={{textDecoration: "none", color: "white"}}>Instagram</Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h3 className="mb-3">Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123-456-7890</p>
          </Col>
        </Row>
      </Container>
      <hr/>
      <Container fluid className="text-center mt-4">
        <p>&copy; 2024 My E-Commerce App. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
