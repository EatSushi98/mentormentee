import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import AuthModal from './AuthModal';
import { Link } from 'react-router-dom';

function MyNavbar() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleSignupShow = () => setShowSignup(true);
  const handleSignupClose = () => setShowSignup(false);

  const handleLoginShow = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  const switchToLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fs-3 fw-bold">Mentor Connect</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={handleSignupShow}>Find Mentor</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={handleSignupShow}>Become Mentor</span>
                </li>
              </ul>
              <Nav.Link onClick={handleSignupShow} className="btn btn-outline-primary ms-3">Sign Up</Nav.Link>
              <Nav.Link onClick={handleLoginShow} className="btn btn-primary ms-2">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <AuthModal show={showSignup} handleClose={handleSignupClose} title="Sign Up" buttonText="Sign Up" switchToLogin={switchToLogin} />
      <AuthModal show={showLogin} handleClose={handleLoginClose} title="Login" buttonText="Login" />
    </>
  );
}

export default MyNavbar;
