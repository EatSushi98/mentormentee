import React from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button } from 'react-bootstrap';
import calendarImage from '../assets/images/image-3@2x.png'; 
import studyMaterialImage from '../assets/images/image-1@2x.png';

function MentorPage() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <Card className="mb-4" style={{ maxWidth: '100%' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="profile-picture-url" className="img-fluid rounded-start" alt="Mentor Profile" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Mentor Name</h5>
                  <div className="rating mb-2">
                    {Array(5).fill(0).map((_, i) => (
                      <span key={i} className={`star ${i < 4 ? 'filled' : ''}`}>&#9733;</span>
                    ))}
                  </div>
                  <p className="card-text">Specialization: XYZ Expert</p>
                  <p className="card-text">
                    A brief description about the mentor goes here. Mention expertise, achievements, etc.
                  </p>
                  <Card.Link href="https://linkedin.com/in/mentor-link">LinkedIn</Card.Link>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Schedule</Card.Title>
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&bgcolor=%23ffffff&src=ODVhMTUzMjU0MzliNzM5Yzg3Y2I5NDM3NGIzMjM4MDljNzM3ZmJmMWU1NWI4ZWQ4MzllNjUzOTg1ZGZiZTliMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23A79B8E"
                style={{ border: 'solid 1px #777', width: '800px', height: '600px' }} // Fixed style prop
                frameBorder="0"
                scrolling="no"
              ></iframe>        
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Study Materials</Card.Title>
              <Form>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Upload Study Material</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Upload
                </Button>
              </Form>
              <ListGroup className="mt-3">
                <ListGroup.Item>
                  <img src={studyMaterialImage} alt="Study Material" className="img-fluid" /> Study Material 1
                </ListGroup.Item>
                <ListGroup.Item>
                  <img src={studyMaterialImage} alt="Study Material" className="img-fluid" /> Study Material 2
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MentorPage;
