import React from 'react';
import Navigation from '../Navigation/Navigation';
import ProjectOne from '../ProjectOne/ProjectOne';
import './Projects.css';

const Projects = () => {
    return (
        <div>
            <div style={{ background: '#191A1D', padding: '30px', color:'#191A1D', height: '578px'}}>
                <Navigation></Navigation>
                <div className="projects-main">
                    <h1>My Projects</h1>
                    <br />
                    <p>
                        In my learning period, I have acquired a decent amount of knowledge <br />
                    So, I needed to actualize my insight to strengthen my base of coding. <br />
                    Here are the amazing projects that I did in my learning period.
                </p>
                </div>
            </div>
            <div style={{ marginTop: '150px', padding: '40px'}}>
                <ProjectOne></ProjectOne>
            </div>
        </div>
    );
};

export default Projects;