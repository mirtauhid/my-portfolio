import React from 'react';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';

import ProjectTwoSlide from './ProjectTwoSlide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';
import '../Style/Style.css';
import '../Projects/Projects.css';

const ProjectTwo = () => {



    return (
        <Container fluid className="mt-100">
            <Row>
                <Col md={7}>
                    <div className="carousel-bg">
                        <div className="carousel-box">
                            <ProjectTwoSlide></ProjectTwoSlide>
                        </div>
                    </div>

                </Col>
                <Col md={5} className="description">
                    <h2>Travel Guru</h2>
                    <div style={{ height: '315px', width: '100%' }}>
                        <p>
                            Travel Guru is a travel agency website. It is nicely created to react where material UI used as a CSS framework. This web application has a secure authentication system for both user and admin. Powerful context API is present in it besides google map used efficiently.
                            User data storing system perfectly implemented for future use.
                        </p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <Badge variant="light">React</Badge>{' '}
                        <Badge variant="light">Context API</Badge>{' '}
                        <Badge variant="light">Google Map</Badge>{' '}
                        <Badge variant="light">Firebase Auth</Badge>{' '}
                        <Badge variant="light">Bootstrap</Badge>
                    </div>
                    <br />
                    <div className="d-flex justify-content-left">

                        <Button href="https://travel-guru-agency.web.app/" variant="light"><FontAwesomeIcon icon={faGlobe} /> Live </Button>

                        <Button href="https://github.com/mirtauhid/travel-guru" className="ml-3" variant="light"><FontAwesomeIcon icon={faCode} /> UI Code</Button>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProjectTwo;