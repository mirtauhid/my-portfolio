import React from 'react';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import './ProjectOne.css';
import ProjectOneSlide from './ProjectOneSlide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faServer, faCode } from '@fortawesome/free-solid-svg-icons'

const ProjectOne = () => {



    return (
        <Container fluid>
            <Row>
                <Col md={7}>
                    <div style={{ background: '#f6f6f6',borderRadius: '10px', height: '400px', width: '100%', padding: '40px', marginBottom: '100px'}}>
                        <div className="carousel-box">
                            <ProjectOneSlide></ProjectOneSlide>
                        </div>
                    </div>

                </Col>
                <Col md={5} className="description">
                    <h2>Creative Agency</h2>
                    <div style={{ height: '315px', width: '100%' }}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates dolorem praesentium, ducimus voluptate quos quae temporibus illum iusto numquam nesciunt.</p>
                    </div>
                    <div className="d-flex justify-content-left">
                    <Button variant="dark"><FontAwesomeIcon icon={faGlobe} /> Live </Button>
                    <Button className="ml-3" variant="dark"><FontAwesomeIcon icon={faCode} /> UI Code</Button>
                    <Button className="ml-3" variant="dark"><FontAwesomeIcon icon={faServer} /> Server Code</Button>
                    </div>
                    <br/>
                    <div className="d-flex justify-content-between">
                        <Badge variant="primary">Primary</Badge>{' '}
                        <Badge variant="secondary">Secondary</Badge>{' '}
                        <Badge variant="success">Success</Badge>{' '}
                        <Badge variant="danger">Danger</Badge>{' '}
                        <Badge variant="warning">Warning</Badge> <Badge variant="info">Info</Badge>{' '}
                        <Badge variant="light">Light</Badge> <Badge variant="dark">Dark</Badge>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProjectOne;