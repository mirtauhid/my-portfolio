import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Contact.css';
import '../Style/Style.css';
import Footer from '../Footer/Footer';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {

    

    return (
        <div>
            <div className="contact-header">
                <Navigation></Navigation>
                <div className="mt-50" >
                    <h1>Contact Me</h1>
                    <br />
                    <h4 className="lineH">
                        If you'd like to contact me, just fill out the form and submit it! <br />
                        I will get back to you shortly.
                    </h4>
                </div>
            </div>
            <div className="contact-form mt-100 ml-auto mr-auto">
                <ContactForm></ContactForm>
            </div>
            <div style={{marginTop: "300px"}}>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Contact;