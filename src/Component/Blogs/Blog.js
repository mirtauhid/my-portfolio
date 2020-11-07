import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Blog.css';
import '../Style/Style.css';
import { Col, Row } from 'react-bootstrap';
import ArticleOne from '../ArticleOne/ArticleOne';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { } from '@fortawesome/free-solid-svg-icons'

const Blog = () => {
    library.add(fab);



    return (
        <div className="blog">
            <div className="blog-header">
                <Navigation></Navigation>
                <div className="mt-50 banner-text" >
                    <h1>My Blog</h1>
                    <br />
                    <h4 className="lineH">I try to smash you with the information that will make your life easier.</h4>
                    <br />
                    <h4 style={{ color: '#fff'}}>Get in touch | {" "}
                        <a className="link-style" href="https://www.github.com/mirtauhid"><FontAwesomeIcon icon={["fab", "github"]} /></a>{" "}
                        <a className="link-style" href="https://www.medium.com/@mirtauhid"><FontAwesomeIcon icon={["fab", "medium"]} /> </a>{" "}
                        <a className="link-style" href="https://www.linkedin.com/in/mirtauhid"><FontAwesomeIcon icon={["fab", "linkedin"]} /> </a>{" "}
                    </h4>
                </div>
            </div>
            <div className="articles">
                <h4 className="articles-headline">My recent articles</h4>
                <Row className=" justify-content-between">
                    <Col md={4}>
                        <div className="article-box">
                            <ArticleOne></ArticleOne>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="article-box">
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="article-box">
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;