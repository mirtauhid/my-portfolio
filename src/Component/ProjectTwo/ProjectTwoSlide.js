import React from 'react';
import { Carousel } from 'react-bootstrap';
import home from '../../images/projects/projectTwo/Home.png';
import booking from '../../images/projects/projectTwo/Booking.png';
import createAccount from '../../images/projects/projectTwo/Create account.png';
import login from '../../images/projects/projectTwo/Login.png';
import search from '../../images/projects/projectTwo/Search.png';


const ProjectTwoSlide = () => {
    return (
        <Carousel>


            <Carousel.Item>
                <img style={{height: '400px', width: '100%'}} src={home} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img style={{height: '400px', width: '100%'}} src={createAccount} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img style={{height: '400px', width: '100%'}} src={booking} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img style={{height: '400px', width: '100%'}} src={login} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img style={{height: '400px', width: '100%'}} src={search} alt="" />
            </Carousel.Item>


        </Carousel>
    );
};

export default ProjectTwoSlide;