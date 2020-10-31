import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import avatar from '../../images/image.png';
import './Main.css';

const Main = () => {
    return (
        <Container className="main">
            <Row>
                <Col md={6} className="my-auto">
                    <div className="introText">
                        <h1>Hey, I'm Tauhid.</h1>
                        <br />
                        <p>
                            A front-end web developer from <br />
                        Dhaka in Bangladesh. I create awesome <br />
                        websites to make their online presence.
                    </p>
                        <br />
                        <Button className="mainBtn" variant="primary">My Projects</Button>
                    </div>
                </Col>
                <Col className="main-right" md={{ span: 5, offset: 1 }}>
                    <div style={{height: '360px', width: '360px', background: '#121316', position: 'absolute' , marginLeft: '85px'}}></div>
                    <img style={{ position: 'relative', padding: '40px', marginLeft: '85px'}} src={avatar} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Main;