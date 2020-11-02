import React from 'react';
import { Carousel } from 'react-bootstrap';
import home from '../../images/projects/ProjectFour/home.png';
import review from '../../images/projects/ProjectFour/review.png';
import auth from '../../images/projects/ProjectFour/auth.png';
import shipment from '../../images/projects/ProjectFour/shipment.png';
import payment from '../../images/projects/ProjectFour/payment.png';
import inventory from '../../images/projects/ProjectFour/inventory.png';


const ProjectFourSlide = () => {
    return (
        <Carousel>


            <Carousel.Item>
                <img style={{ height: '400px', width: '100%' }} src={home} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img style={{ height: '400px', width: '100%' }} src={review} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img style={{ height: '400px', width: '100%' }} src={shipment} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img style={{ height: '400px', width: '100%' }} src={auth} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img style={{ height: '400px', width: '100%' }} src={payment} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img style={{ height: '400px', width: '100%' }} src={inventory} alt="" />
            </Carousel.Item>

        </Carousel>
    );
};

export default ProjectFourSlide;