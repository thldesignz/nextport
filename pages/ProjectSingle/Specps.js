import React from 'react'


const ProjectSingle = ( props ) => {
    return(
        <div className="wpo-project-details-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-minimal-wrap">
                            <div className="wpo-minimal-img">
                                <img src='/images/img/spec_main.png' alt=""/>
                            </div>
                        </div>
                        <div className="wpo-project-details-list">
                            <div className="row">
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text">
                                        <span>Category</span>
                                        <h2>Email, Web Development</h2>
                                    </div>
                                </div>
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text-3">
                                        <span>Project Date</span>
                                        <h2>10 Jun, 2021</h2>
                                    </div>
                                </div>
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text">
                                        <span>Project URL</span>
                                        <h2><a target="_blank" href="https://stupefied-turing-9892ce.netlify.app/">Click Here</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-p-details-section">
                            <p>Before the email was just plain text, no images just text and links. So i offered to redo the email so that when customers open it it its more appealing and you may get more clicks. The color scheme is the same color scheme from his website so the brand and color schemes flows together. I added his logo and as well as a image. i coded everything in html and its fully responsive. </p> 
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-12">
                                    <div className="wpo-p-details-img">
                                        <img src='/images/img/emailspec.png' alt=""/>
                                    </div>
                                </div>
                                {/* <div className="col-md-12 col-sm-12 col-12">
                                    <div className="wpo-p-details-img">
                                        <img src='https://flawlessjae.net/wp-content/uploads/2021/03/theme1.png' alt=""/>
                                    </div>
                                </div> */}
                                {/* <div className="col-md-12 col-sm-12 col-12">
                                    <div className="wpo-p-details-img">
                                        <img src='https://flawlessjae.net/wp-content/uploads/2021/03/theme2.png' alt=""/>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSingle;