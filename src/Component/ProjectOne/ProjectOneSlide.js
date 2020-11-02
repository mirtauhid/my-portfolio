import React from 'react';
import { Carousel } from 'react-bootstrap';
import full from '../../images/projects/projectOne/full.png';
import header from '../../images/projects/projectOne/header.png';
import carousel from '../../images/projects/projectOne/carousel.png';
import footer from '../../images/projects/projectOne/footer.png';
import auth from '../../images/projects/projectOne/auth.png';
import userCP from '../../images/projects/projectOne/userCP.png';
import adminCP from '../../images/projects/projectOne/adminCP.png';


const ProjectOneSlide = () => {
    return (
        <Carousel>


            <Carousel.Item>
                <img style={{height: '400px', width: '100%'}} src={full} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img style={{height: '400px', width: '100%'}} src={header} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img style={{height: '400px', width: '100%'}} src={carousel} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img style={{height: '400px', width: '100%'}} src={footer} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img style={{height: '400px', width: '100%'}} src={auth} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img style={{height: '400px', width: '100%'}} src={userCP} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img style={{height: '400px', width: '100%'}} src={adminCP} alt="" />
            </Carousel.Item>


        </Carousel>
    );
};

export default ProjectOneSlide;