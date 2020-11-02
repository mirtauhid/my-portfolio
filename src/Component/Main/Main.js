import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import avatar from '../../images/image.png';
import './Main.css';
import '../Style/Style.css';

const Main = () => {
    return (
        <Container fluid className="mt-100">
            <Row>
                <Col md={6} className="my-auto">
                    <div className="introText">
                        <h1>Hey, I'm Tauhid.</h1>
                        <br />
                        <h4 style={{lineHeight: '40px'}}>
                            A front-end web developer from <br />
                            Dhaka in Bangladesh. I create awesome <br />
                            websites to make their online presence.
                        </h4>
                        <br />
                        <Button className="main-button">My Projects</Button>
                    </div>
                </Col>
                <Col md={{ span: 5, offset: 1 }}>
                    <div className="photo-back" ></div>
                    <img id="avatar" src={avatar} alt="avatar" />
                </Col>
            </Row>
        </Container>
    );
};

export default Main;