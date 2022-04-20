import React from 'react'


const ProjectSingle = ( props ) => {
    return(
        <div className="wpo-project-details-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-minimal-wrap">
                            <div className="wpo-minimal-img">
                                <img src='/images/lawn.png' alt=""/>
                            </div>
                        </div>
                        <div className="wpo-project-details-list">
                            <div className="row">
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text">
                                        <span>Category</span>
                                        <h2>Web Design, Landing Page, Web Development</h2>
                                    </div>
                                </div>
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text-3">
                                        <span>Project Date</span>
                                        <h2>5 Aug, 2021</h2>
                                    </div>
                                </div>
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text">
                                        <span>Project URL</span>
                                        <h2><a target="_blank" href="https://new-lawncare.herokuapp.com/">Click Here</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-p-details-section">
                            <p>This is a landing page that i built using Laravel. This is only the landing page right now. in the future i will have a full stack site built out using this landing page. </p> 
                            {/* <div className="row">
                                <div className="col-md-12 col-sm-12 col-12">
                                    <div className="wpo-p-details-img">
                                        <img src='https://flawlessjae.net/wp-content/uploads/2021/03/theme3.png' alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-12">
                                    <div className="wpo-p-details-img">
                                        <img src='https://flawlessjae.net/wp-content/uploads/2021/03/theme1.png' alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-12">
                                    <div className="wpo-p-details-img">
                                        <img src='https://flawlessjae.net/wp-content/uploads/2021/03/theme2.png' alt=""/>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSingle;