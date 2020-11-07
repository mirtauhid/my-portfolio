import React from 'react';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import ProjectOneSlide from './ProjectOneSlide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faServer, faCode } from '@fortawesome/free-solid-svg-icons';
import '../Style/Style.css';
import '../Projects/Projects.css';

const ProjectOne = () => {



    return (
        <Container fluid>
            <Row>
                <Col md={7}>
                    <div className="carousel-bg">
                        <div className="carousel-box">
                            <ProjectOneSlide></ProjectOneSlide>
                        </div>
                    </div>

                </Col>
                <Col md={5} className="description">
                    <h2>Creative Agency</h2>
                    <div style={{ height: '315px', width: '100%' }}>
                        <p>
                            Creative Agency is a digital application development company website. This web application is mainly created with react besides bootstrap also used. It is hosted in the firebase and back-end server in Heroku. It has a user Cpanel and admin panel also which are secured with firebase auth. Finally, it's an awesome web application.
                        </p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <Badge variant="light">React</Badge>{' '}
                        <Badge variant="light">Node</Badge>{' '}
                        <Badge variant="light">Mongo</Badge>{' '}
                        <Badge variant="light">Express</Badge>{' '}
                        <Badge variant="light">Firebase</Badge>{' '}
                        <Badge variant="light">Heroku</Badge>{' '}
                        <Badge variant="light">Bootstrap</Badge>{' '}
                    </div>
                    <br />
                    <div className="d-flex justify-content-left">

                        <Button href="https://creative-agency-test.web.app/" variant="light"><FontAwesomeIcon icon={faGlobe} /> Live </Button>

                        <Button href="https://github.com/mirtauhid/creative-agency-client" className="ml-3" variant="light"><FontAwesomeIcon icon={faCode} /> UI Code</Button>

                        <Button href="https://github.com/mirtauhid/creative-agency-server" className="ml-3" variant="light"><FontAwesomeIcon icon={faServer} /> Server Code</Button>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProjectOne;