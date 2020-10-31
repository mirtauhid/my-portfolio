import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const Contact = () => {

    const mailer = (e) => {
        window.open("mailto:mail.tauhidul@gmail.com");
    }

    return (
        <div>
            <div style={{ background: '#191A1D', padding: '30px', color: '#191A1D', height: '578px' }}>
                <Navigation></Navigation>
                <div style={{marginTop: '70px'}}>
                    <h1>Contact Me</h1>
                    <br />
                    <p>
                        If you would like to contact me, Then just fill the form and submit <br />
                    I will reply as soon as i get the mail
                </p>
                </div>
            </div> 

            <div className="ml-auto mr-auto" style={{ width: '1000px', height: '550px', padding: '40px', marginTop: '100px', marginBottom: '300px'}}>
                <h1 style={{color: '#4B6CC1', marginBottom: '100px'}}>Contact Form</h1>
                <Form  onSubmit={mailer()} action="mailto:mail.tauhidul@gmail.com" method="get" enctype="text/plain">
                    <div className="d-flex justify-content-between">
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ fontFamily: 'Rubik,Arial,sans-serif', fontSize: '20px', fontWeight: '500', letterSpacing: '1.26px', color: '#919191' }}>NAME</Form.Label>
                            <Form.Control style={{ border: '2px solid #E2E2E2', background: '#F9F9F9', width: '400px', height: '70px' }} type="text" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ fontFamily: 'Rubik,Arial,sans-serif', fontSize: '20px', fontWeight: '500', letterSpacing: '1.26px', color: '#919191' }}>EMAIL</Form.Label>
                            <Form.Control style={{ border: '2px solid #E2E2E2', background: '#F9F9F9', width: '400px', height: '70px' }} type="email" />
                        </Form.Group>
                    </div>
                    <br />
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{ fontFamily: 'Rubik,Arial,sans-serif', fontSize: '20px', fontWeight: '500', letterSpacing: '1.26px', color: '#919191' }}>YOUR VALUABLE MESSAGE</Form.Label>
                        <Form.Control style={{ border: '2px solid #E2E2E2', background: '#F9F9F9' }} as="textarea" rows={8} />
                    </Form.Group>
                    <br />
                    <div className="text-center">
                        <Button type="submit" value="Send" style={{ fontFamily: 'Rubik,Aria,sans-serif', fontSize: '20px', background: '#4E68C6', height: '60px', width: '180px', borderRadius: '1000px' }}>Submit</Button>
                        <Button style={{ fontFamily: 'Rubik,Aria,sans-serif', fontSize: '20px', background: '#4E68C6', height: '60px', width: '180px', borderRadius: '1000px' , marginLeft: '10px'}}  type="reset" name="reset" value="Clear Form" >Clear</Button>
                    </div>
                </Form>
            </div>
            <br/>
            <Footer></Footer>
        </div>
    );
};

export default Contact;