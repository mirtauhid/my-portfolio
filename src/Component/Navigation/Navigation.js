import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';
import '../Style/Style.css';
import myResume from '../../resources/Resume of Tauhid.pdf';

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="#191A1D" variant="dark">
                <div>
                    <Navbar.Brand as={Link} className="brand" to="/">MIR TAUHID</Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/projects" >Projects</Nav.Link>
                        <Nav.Link href={myResume} download="Resume_of_Tauhid.pdf">Resume</Nav.Link>
                        <Nav.Link as={Link} to="/blog" >Blog</Nav.Link>
                        <Nav.Link as={Link} to="/about" >About</Nav.Link>
                        <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;