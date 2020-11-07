import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import avatar from '../../images/image.png';
import './Main.css';
import '../Style/Style.css';
import myResume from '../../resources/Resume of Tauhid.pdf';

const Main = () => {
    return (
        <Container fluid className="mt-100">
            <Row>
                <Col md={6} className="my-auto">
                    <div className="introText">
                        <h1>Hey, I'm Tauhid.</h1>
                        <br />
                        <h4 style={{ lineHeight: '40px' }}>
                            A front-end web developer from
                            Dhaka in Bangladesh. I create awesome
                            websites to make their online presence.
                        </h4>
                        <br />
                        <Button variant="dark" className="main-button" href={myResume} download="Resume_of_Tauhid.pdf">My Resume</Button>
                    </div>
                </Col>
                <Col md={{ span: 5, offset: 1 }} className="photo-container">
                    <div className="photo-back" ></div>
                    <img class="avatar" src={avatar} alt="avatar" />
                </Col>
            </Row>
            <Row className="for_media">

                <img class="avatar-media" src={avatar} alt="avatar" />

            </Row>
        </Container>
    );
};

export default Main;