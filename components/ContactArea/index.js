import React from 'react'
import ContactForm from '../ContactFrom'


const ContactArea = (props) => {
    return(
        <section className={`wpo-contact-area section-padding ${props.contactclass}`}>
            <div className="wpo-wpo-contact-form-map">
                <div className="container">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h2>Let’s Talk</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className=" col-12">
                            <div className="row">
                                <div className="col col-md-12 col-12">
                                    <div className="wpo-contact-form">
                                        <h2>Get In Touch</h2>
                                        <ContactForm/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default ContactArea;