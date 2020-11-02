import React from 'react';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import ProjectFourSlide from './ProjectFourSlide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faServer, faCode } from '@fortawesome/free-solid-svg-icons';
import '../Style/Style.css';

const ProjectFour = () => {



    return (
        <Container fluid className="mt-100">
            <Row>
                <Col md={7}>
                    <div style={{ background: '#f6f6f6', borderRadius: '10px', height: '400px', width: '100%', padding: '40px', marginBottom: '100px' }}>
                        <div className="carousel-box">
                            <ProjectFourSlide></ProjectFourSlide>
                        </div>
                    </div>

                </Col>
                <Col md={5} className="description">
                    <h2>Ema John</h2>
                    <div style={{ height: '315px', width: '100%' }}>
                        <p>
                            Ema John is an eCommerce web application. It is very powerful that it uses react with bootstrap. It manages its authentication system with the firebase. Payment module managing by stripe. This application capable of managing the whole selling process and finally stores data in MongoDB with the help of node and express.Backend hosted in Heroku. It's really amazing.
                        </p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <Badge variant="light">React</Badge>{' '}
                        <Badge variant="light">Node</Badge>{' '}
                        <Badge variant="light">Mongo</Badge>{' '}
                        <Badge variant="light">Ex</Badge>{' '}
                        <Badge variant="light">Firebase</Badge>{' '}
                        <Badge variant="light">Heroku</Badge>{' '}
                        <Badge variant="light">Bootstrap</Badge>
                        <Badge variant="light">GitHub</Badge>
                        <Badge variant="light">Stripe</Badge>
                    </div>
                    <br />
                    <div className="d-flex justify-content-left">

                        <Button href="https://ema-john-e.web.app/" variant="light"><FontAwesomeIcon icon={faGlobe} /> Live </Button>

                        <Button href="https://github.com/mirtauhid/ema-john/tree/main/client-side" className="ml-3" variant="light"><FontAwesomeIcon icon={faCode} /> UI Code</Button>

                        <Button href="https://github.com/mirtauhid/ema-john/tree/main/server-side" className="ml-3" variant="light"><FontAwesomeIcon icon={faServer} /> Server Code</Button>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProjectFour;