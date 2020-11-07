import React from 'react';
import { Badge, Container as div } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import './About.css';
import '../Style/Style.css';
import myPhoto from '../../images/myphoto.jpg';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div fluid className="about-container">
            <div className="about-header">
                <Navigation></Navigation>
                <div className="mt-50 about-text" >
                    <h1>About Me</h1>
                    <br />
                    <h4 className="lineH">Here is a little bit about myself !!!</h4>
                </div>
            </div>
            <div className="about-main d-flex justify-content-around">
                <div className="photoBox" >
                    <div className="carousel-box">
                        <img src={myPhoto} alt="" />
                    </div>
                </div>
                <div className="text-box">
                    <h4 style={{ color: '#191A1D' }}>
                        Who I Am
                    </h4>
                    <p>
                        My name is TAUHID. I am a web developer from Dhaka, BD. <br />
                        Currently, I'm a student at Jahangirnagar University and <br />
                        Statistics is my major there. I love programming and problem <br />
                        -solving. Now I'm working on my own projects besides I am <br />
                        learning new skills to stay myself updated and skillful. <br />
                        I just trying to prove that my brain has angle brackets.
                    </p>
                    <br />
                    <p>My skill set</p>
                    <div className="d-flex justify-content-between">
                        <Badge variant="light">Javascript</Badge>{' '}
                        <Badge variant="light">React</Badge>{' '}
                        <Badge variant="light">Redux</Badge>{' '}
                        <Badge variant="light">Node</Badge>{' '}
                        <Badge variant="light">Express</Badge>{' '}
                        <Badge variant="light">MongoDB</Badge>{' '}
                        <Badge variant="light">HTML</Badge>{' '}
                        <Badge variant="light">CSS</Badge>{' '}
                    </div>
                    <br />
                    <div className="d-flex justify-content-between">
                        <Badge variant="light">Bootstrap</Badge>{' '}
                        <Badge variant="light">Material</Badge>{' '}
                        <Badge variant="light">Bootstrap</Badge>{' '}
                        <Badge variant="light">Material</Badge>{' '}
                        <Badge variant="light">Firebase</Badge>{' '}
                        <Badge variant="light">Heroku</Badge>{' '}
                        <Badge variant="light">Netlify</Badge>{' '}
                    </div>
                    <br />
                    <div className="d-flex justify-content-between">
                        <Badge variant="light">ES6</Badge>{' '}
                        <Badge variant="light">Algorithm</Badge>{' '}
                        <Badge variant="light">OOP</Badge>{' '}
                        <Badge variant="light">GIT</Badge>{' '}
                        <Badge variant="light">API</Badge>{' '}
                        <Badge variant="light">Dev Tool</Badge>{' '}
                        <Badge variant="light">Problem Solving</Badge>{' '}
                    </div>
                </div>
            </div>
            <div className="about-main-media justify-content-center">
                <img className="photoBox"  src={myPhoto} alt="" />
                <h4 style={{ color: '#191A1D' }}>
                    Who I Am
                    </h4>
                <p>
                    My name is TAUHID. I am a web developer from Dhaka, BD. <br />
                        Currently, I'm a student at Jahangirnagar University and <br />
                        Statistics is my major there. I love programming and problem <br />
                        -solving. Now I'm working on my own projects besides I am <br />
                        learning new skills to stay myself updated and skillful. <br />
                        I just trying to prove that my brain has angle brackets.
                </p>
                <br />
                <p>My skill set</p>
                <div className="d-flex justify-content-between">
                    <Badge variant="light">Javascript</Badge>{' '}
                    <Badge variant="light">React</Badge>{' '}
                    <Badge variant="light">Redux</Badge>{' '}
                    <Badge variant="light">Node</Badge>{' '}
                    <Badge variant="light">Express</Badge>{' '}
                    <Badge variant="light">MongoDB</Badge>{' '}
                    <Badge variant="light">HTML</Badge>{' '}
                    <Badge variant="light">CSS</Badge>{' '}
                </div>
                <br />
                <div className="d-flex justify-content-between">
                    <Badge variant="light">Bootstrap</Badge>{' '}
                    <Badge variant="light">Material</Badge>{' '}
                    <Badge variant="light">Bootstrap</Badge>{' '}
                    <Badge variant="light">Material</Badge>{' '}
                    <Badge variant="light">Firebase</Badge>{' '}
                    <Badge variant="light">Heroku</Badge>{' '}
                    <Badge variant="light">Netlify</Badge>{' '}
                </div>
                <br />
                <div className="d-flex justify-content-between">
                    <Badge variant="light">ES6</Badge>{' '}
                    <Badge variant="light">Algorithm</Badge>{' '}
                    <Badge variant="light">OOP</Badge>{' '}
                    <Badge variant="light">GIT</Badge>{' '}
                    <Badge variant="light">API</Badge>{' '}
                    <Badge variant="light">Dev Tool</Badge>{' '}
                    <Badge variant="light">Problem Solving</Badge>{' '}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;