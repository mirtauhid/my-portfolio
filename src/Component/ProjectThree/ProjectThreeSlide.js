import React from 'react';
import { Carousel } from 'react-bootstrap';
import home from '../../images/projects/projectThree/home.png';
import eventadd from '../../images/projects/projectThree/eventadd.png';
import reg from '../../images/projects/projectThree/reg.png';
import admin from '../../images/projects/projectThree/admin.png';
import tasks from '../../images/projects/projectThree/tasks.png';
import login from '../../images/projects/projectThree/login.png';


const ProjectOneSlide = () => {
    return (
        <Carousel>


            <Carousel.Item>
                <img style={{height: '400px', width: '100%'}} src={home} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img style={{height: '400px', width: '100%'}} src={eventadd} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img style={{height: '400px', width: '100%'}} src={reg} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img style={{height: '400px', width: '100%'}} src={admin} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img style={{height: '400px', width: '100%'}} src={tasks} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img style={{height: '400px', width: '100%'}} src={login} alt="" />
            </Carousel.Item>


        </Carousel>
    );
};

export default ProjectOneSlide;