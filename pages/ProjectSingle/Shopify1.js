import React from 'react'


const ProjectSingle = ( props ) => {
    return(
        <div className="wpo-project-details-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-minimal-wrap">
                            <div className="wpo-minimal-img">
                                <img src='/images/shopify1.png' alt=""/>
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
                                        <h2>19 June, 2021</h2>
                                    </div>
                                </div>
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text">
                                        <span>Project URL</span>
                                        <h2><a target="_blank" href="https://fmc-9.myshopify.com/">Click Here</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-p-details-section">
                            <h3> To view the site <strong>Password: 123456</strong></h3>
                            <p>This is an shopify theme that i built off of the Debut theme. I designed and created all the inner sections of the website from scratch. Using bootstrap, htmml, & CSS. I also designed the banners and the collection images using canva so you can chnage and update them to say what ever you want to fit your site. The site is fully Responisive </p> 
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-12">
                                    <div className="wpo-p-details-img">
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/QfzIognipFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/* <div className="col-md-12 col-sm-12 col-12">
                                    <div className="wpo-p-details-img">
                                        <img src='https://flawlessjae.net/wp-content/uploads/2021/05/Screenshot-2021-05-07-at-18-06-09-Jamies-Soul-Food-Dashboard.png' alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-12">
                                    <div className="wpo-p-details-img">
                                        <img src='https://flawlessjae.net/wp-content/uploads/2021/05/Screenshot-2021-05-07-at-18-06-09-Jamies-Soul-Food-Dashboard.png' alt=""/>
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