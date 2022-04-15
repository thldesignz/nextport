import React from 'react'


const ProjectSingle = ( props ) => {
    return(
        <div className="wpo-project-details-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-minimal-wrap">
                            <div className="wpo-minimal-img">
                                <img src='/images/jamies.png' alt=""/>
                            </div>
                        </div>
                        <div className="wpo-project-details-list">
                            <div className="row">
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text">
                                        <span>Category</span>
                                        <h2>Web </h2>
                                    </div>
                                </div>
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text-3">
                                        <span>Project Date</span>
                                        <h2>29 April, 2021</h2>
                                    </div>
                                </div>
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text">
                                        <span>Project URL</span>
                                        <h2><a target="_blank" href="http://jamies-restaurant.herokuapp.com/">Click Here</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-p-details-section">
                            <h3> To check out back end click here <a target='_blank' href="http://jamies-restaurant.herokuapp.com/login"> click Here </a> <strong>email: jade@gmail.com</strong> <strong>Password: 12345678</strong>
                            </h3>
                            <p>This is an full stack applicationbuilt using Laravel and react. Its for a resteraunt that i made up. on the back end you can add employees in the system as well as add mor food categories and items to the restaurant. Admin you can sales as well as other features that regular employees cant see. </p> 
                            <div className="row">
                                <div className="col-md-12 col-sm-12col-12">
                                    <div className="wpo-p-details-img">
                                         <img src='https://flawlessjae.net/wp-content/uploads/2021/05/Screenshot-2021-05-07-at-18-06-09-Jamies-Soul-Food-Dashboard.png' alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-12">
                                    <div className="wpo-p-details-img">
                                        <img src='https://flawlessjae.net/wp-content/uploads/2021/05/Screenshot-2021-05-07-at-18-06-09-Jamies-Soul-Food-Dashboard.png' alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSingle;

