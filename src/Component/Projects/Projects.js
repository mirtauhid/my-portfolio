import React from 'react';
import Navigation from '../Navigation/Navigation';
import ProjectOne from '../ProjectOne/ProjectOne';
import './Projects.css';
import '../Style/Style.css';
import ProjectTwo from '../ProjectTwo/ProjectTwo';
import ProjectThree from '../ProjectThree/ProjectThree';
import ProjectFour from '../ProjectFour/ProjectFour';
import Footer from '../Footer/Footer';

const Projects = () => {
    return (
        <div>
            <div className="header-section">
                <Navigation></Navigation>
                <div className="header-text">
                    <h1>My Projects</h1>
                    <br />
                    <h4>
                        In my learning period, I have acquired a decent amount of knowledge <br />
                    So, I needed to actualize my insight to strengthen my base of coding. <br />
                    Here are the amazing projects that I have done already.
                    </h4>
                </div>
            </div>
            <div className="projects-container">
                <ProjectOne></ProjectOne>
                <ProjectTwo></ProjectTwo>
                <ProjectThree></ProjectThree>
                <ProjectFour></ProjectFour>
            </div>
            <br/>
            <Footer></Footer>
        </div>
    );
};

export default Projects;