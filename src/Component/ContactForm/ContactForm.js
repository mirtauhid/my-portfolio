import React from 'react';
import './ContactForm.css';
import '../Style/Style.css';
import { Button, Col, Container, Row } from 'react-bootstrap';


const ContactForm = () => {


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     fetch("http://localhost:3001/send", {
    //         method: "POST",
    //         data: {
    //             name: `${document.getElementById('the-name').value}`,
    //             email: `${document.getElementById('the-email').value}`,
    //             message: `${document.getElementById('the-message').value}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.msg === 'success') {
    //                 alert("Message Sent.");
    //                 this.resetForm();
    //             } else if (data.msg === 'fail') {
    //                 alert("Message failed to send.")
    //             }
    //             resetForm();
    //         });


    // }
    // const resetForm = () => {
    //     document.getElementById('mail-form').reset();
    // }



    return (
        <Container fluid className="contacts-form">
            <h1 style={{ color: '#4B6CC1', textAlign: 'center' }}>Contact Form</h1>
            <br />
            <form  method='post' className="main-form" id="mail-form">
                <Row className="row d-flex justify-content-between mt-50 ">
                    <Col md={6}>
                        <label className="label-text" for="the-name">NAME</label>
                        <br />
                        <input type="text" name="name" id="the-name" />
                    </Col>
                    <Col md={6}>
                        <label className="label-text" for="the-email">EMAIL</label>
                        <br />
                        <input type="text" name="email" id="the-email" />
                    </Col>
                </Row>
                <Row style={{ padding: '15px', marginTop: '50px' }}>
                    <label className="label-text" for="the-message">MESSAGE</label>
                    <textarea name="message" id="the-message"></textarea>
                </Row>
                <Button variant="primary"
                    style={{ marginLeft: '39%', marginTop: '30px' }}
                    className="main-button" type="submit">Submit</Button>
            </form>
        </Container>
    );
};

export default ContactForm;