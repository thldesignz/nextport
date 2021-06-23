import React from 'react'

const ServiceSection = (props) => {
    return(
        <div  className={`wpo-service-area ${props.serviceclass}`}>
            <div className="container">
                <div className="col-12">
                    <div className="section-title text-center">
                        <h2>Services</h2>
                    </div>
                </div>
                <div className="wpo-service-item">
                    <div className="row">
                       
                        <div className="col-lg-6">
                            <div className="wpo-service-wrap">
                                <div className="wpo-services-icon-wrap">
                                    <div className="wpo-service-icon-2">
                                        <i className="fi flaticon-files-and-folders"></i>
                                    </div>
                                </div>
                                <div className="wpo-service-text">
                                    <h2>Web  Development</h2>
                                    <p>I can create and a design a beautiful UI/UX experience as well as excute and build the project. As well as help with SEO.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="wpo-service-wrap">
                                <div className="wpo-services-icon-wrap">
                                    <div className="wpo-service-icon-3">
                                        <i className="fi flaticon-artist"></i>
                                    </div>
                                </div>
                                <div className="wpo-service-text">
                                    <h2>Graphic Design</h2>
                                    <p>I can help with Your need as far as logos, branding, flyers, banners, promo. ect.</p>
                                </div>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection;