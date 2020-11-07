import React from 'react';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import ProjectThreeSlide from './ProjectThreeSlide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faServer, faCode } from '@fortawesome/free-solid-svg-icons';
import '../Style/Style.css';
import '../Projects/Projects.css';

const ProjectThree = () => {



    return (
        <Container fluid className="mt-100">
            <Row>
                <Col md={7}>
                    <div className="carousel-bg">
                        <div className="carousel-box">
                            <ProjectThreeSlide></ProjectThreeSlide>
                        </div>
                    </div>

                </Col>
                <Col md={5} className="description">
                    <h2>Volunteer Network</h2>
                    <div style={{ height: '315px', width: '100%' }}>
                        <p>
                            Volunteer Network is an amazing react web application for volunteering activities. Users register for volunteering tasks. Authentication is maintained by firebase where mongo DB is using for the database. CSS framework material ui along with two powerful backend tool node and express made it better. backend deployed in Heroku.
                        </p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <Badge variant="light">React</Badge>{' '}
                        <Badge variant="light">Node</Badge>{' '}
                        <Badge variant="light">Mongo</Badge>{' '}
                        <Badge variant="light">Express</Badge>{' '}
                        <Badge variant="light">Firebase</Badge>{' '}
                        <Badge variant="light">Heroku</Badge>{' '}
                        <Badge variant="light">Material</Badge>
                    </div>
                    <br />
                    <div className="d-flex justify-content-left">

                        <Button href="https://volunteer-network-test.web.app/" variant="light"><FontAwesomeIcon icon={faGlobe} /> Live </Button>

                        <Button href="https://github.com/mirtauhid/volunteer-network" className="ml-3" variant="light"><FontAwesomeIcon icon={faCode} /> UI Code</Button>

                        <Button href="https://github.com/mirtauhid/volunteer-network-server" className="ml-3" variant="light"><FontAwesomeIcon icon={faServer} /> Server Code</Button>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProjectThree;