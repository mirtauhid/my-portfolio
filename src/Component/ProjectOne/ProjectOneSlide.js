import React from 'react';
import { Carousel } from 'react-bootstrap';
import full from '../../images/projects/projectOne/full.png';
import header from '../../images/projects/projectOne/header.png';
import carousel from '../../images/projects/projectOne/carousel.png';
import footer from '../../images/projects/projectOne/footer.png';
import auth from '../../images/projects/projectOne/auth.png';
import userCP from '../../images/projects/projectOne/userCP.png';
import adminCP from '../../images/projects/projectOne/adminCP.png';
import '../Projects/Projects.css';


const ProjectOneSlide = () => {
    return (
        <Carousel>


            <Carousel.Item>
                <img className="img-size" src={full} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img className="img-size" src={header} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img className="img-size" src={carousel} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img className="img-size" src={footer} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img className="img-size" src={auth} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img className="img-size" src={userCP} alt="" />
            </Carousel.Item>


            <Carousel.Item>
                <img className="img-size" src={adminCP} alt="" />
            </Carousel.Item>


        </Carousel>
    );
};

export default ProjectOneSlide;