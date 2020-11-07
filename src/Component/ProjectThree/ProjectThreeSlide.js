import React from 'react';
import { Carousel } from 'react-bootstrap';
import home from '../../images/projects/projectThree/home.png';
import eventadd from '../../images/projects/projectThree/eventadd.png';
import reg from '../../images/projects/projectThree/reg.png';
import admin from '../../images/projects/projectThree/admin.png';
import tasks from '../../images/projects/projectThree/tasks.png';
import login from '../../images/projects/projectThree/login.png';
import '../Projects/Projects.css';

const ProjectOneSlide = () => {
    return (
        <Carousel>


            <Carousel.Item>
                <img className="img-size" src={home} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img className="img-size" src={eventadd} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img className="img-size" src={reg} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img className="img-size" src={admin} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img className="img-size" src={tasks} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img className="img-size" src={login} alt="" />
            </Carousel.Item>


        </Carousel>
    );
};

export default ProjectOneSlide;