import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <Container fluid style={{height: '100px', background: '#101114', width: '100%', position: 'absolute'}} >
            <p className="footerText">© 2020 Mir Tauhid. All rights reserved.</p>
        </Container>
    );
};

export default Footer;