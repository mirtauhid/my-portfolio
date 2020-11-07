import React from 'react';
import { Carousel } from 'react-bootstrap';
import home from '../../images/projects/projectTwo/Home.png';
import booking from '../../images/projects/projectTwo/Booking.png';
import createAccount from '../../images/projects/projectTwo/Create account.png';
import login from '../../images/projects/projectTwo/Login.png';
import search from '../../images/projects/projectTwo/Search.png';
import '../Projects/Projects.css';

const ProjectTwoSlide = () => {
    return (
        <Carousel>


            <Carousel.Item>
                <img className="img-size" src={home} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img className="img-size" src={createAccount} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img className="img-size" src={booking} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img className="img-size" src={login} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img className="img-size" src={search} alt="" />
            </Carousel.Item>


        </Carousel>
    );
};

export default ProjectTwoSlide;