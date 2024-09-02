import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import calendarImage from '../assets/images/image-3@2x.png'; // Placeholder for Calendly integration
import studyMaterialImage from '../assets/images/image-1@2x.png'; // Placeholder for study material


function MenteePage() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <Card className="mb-4" style={{ maxWidth: '100%' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="mentor-profile-picture-url" className="img-fluid rounded-start" alt="Mentor Profile" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Mentor Name</h5>
                  <p className="card-text">Specialization: XYZ Expert</p>
                  <p className="card-text">
                    A brief description about the mentor goes here. Mention expertise, achievements, etc.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Study Materials</Card.Title>
              <ListGroup>
                <ListGroup.Item>
                  <img src={studyMaterialImage} alt="Study Material" className="img-fluid" /> Study Material 1
                  <Button variant="link" className="float-end">Download</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <img src={studyMaterialImage} alt="Study Material" className="img-fluid" /> Study Material 2
                  <Button variant="link" className="float-end">Download</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Rate Your Mentor</Card.Title>
              <p>Provide your feedback and rating for the mentor.</p>
              <div className="rating">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className="star">&#9733;</span>
                ))}
              </div>
              <Button variant="primary" className="mt-3">Submit Rating</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Schedule</Card.Title>
              <iframe
                 src="https://calendar.google.com/calendar/appointments/
                      schedules/AcZssZ2sb2LGcHoQ3emTsV-tWqiSIkDZqMhGzbjV
                      sOmUxGbh25HzrO7caXG_EvKUMG7AdyVAk8V6SUVS?gv=true"
                       width="100%"
                      height="600" 
                      frameborder="0">
              </iframe> 
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MenteePage;
