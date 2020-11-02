import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';
import '../Style/Style.css';

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
                        <Nav.Link href="https://uc220eaa440159efa3ba6280ff2f.dl.dropboxusercontent.com/cd/0/get/BCVAxj4feS9pNBkl7LVTKyoa5Pyps3oJzasNC9EHD82NkP_ht-awx7cuu2mBPDLBHNtORW_0jcFIdZO0AR3OAU6DazeOGlnPhVoZmiEpvi6NZKb5HlGiSxHFn0ts3avC_pE/file" >Resume</Nav.Link>
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