// src/components/Homepage.js
import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import mentoringImage from '../assets/images/codifyformatter-1@2x.png';
import AuthModal from './AuthModal';
import '../styles/custom.css'; // Import the custom CSS

function Homepage() {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleShowSignup = () => {
    setIsLogin(false);
    setShowModal(true);
  };

  const handleShowLogin = () => {
    setIsLogin(true);
    setShowModal(true);  
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Container className="mt-5">
        <Row className="align-items-center">
          <Col md={6}>
            <img src={mentoringImage} alt="Mentoring" className="img-fluid rounded" />
          </Col>
          <Col md={6} className="text-md-end text-center mt-4 mt-md-0">
            <h1 className="display-4 text-primary">Empower Your Future</h1>
            <p className="quote-text">"The only way to do great work is to love what you do." - Steve Jobs</p>
            <Button variant="primary" size="lg" className="mt-3 button-text" onClick={handleShowSignup}>Get Started</Button>
          </Col>
        </Row>
      </Container>

      {/* AuthModal Component */}
      <AuthModal
        show={showModal}
        handleClose={handleClose}
        title={isLogin ? "Login" : "Sign Up"}
        buttonText={isLogin ? "Login" : "Sign Up"}
        isLogin={isLogin}
      />
    </>
  );
}

export default Homepage;
