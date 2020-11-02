import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
import '../Style/Style.css';

const Footer = () => {
    return (
        <Container fluid className="footer mt-100" >
            <p className="footerText">© 2020 Mir Tauhid. All rights reserved.</p>
        </Container>
    );
};

export default Footer;