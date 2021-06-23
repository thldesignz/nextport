import React from 'react'


const ProjectSingle = ( props ) => {
    return(
        <div className="wpo-project-details-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-minimal-wrap">
                            <div className="wpo-minimal-img">
                                <img src='https://flawlessjae.net/wp-content/uploads/2021/06/Screen-Shot-2021-06-22-at-12.59.45-AM.png' alt=""/>
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
                                        <h2>19 May, 2021</h2>
                                    </div>
                                </div>
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text">
                                        <span>Project URL</span>
                                        <h2><a target="_blank" href="https://fmc6.myshopify.com">Click Here</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-p-details-section">
                            <h3> To view the site <strong>Password: 123456</strong></h3>
                            <p>This is a shopify theme that I created from scratch and then turned into a fully functional liquid shopify theme. Every Section can be changed from customize theme. It features a video Jumbo area where u can have a video playing in the background as well if you choose to just have a static image you can do that as well. It also features a header wher you can link 4 peices from the collection. This was desigend for a boutique store. </p> 
                            <div className="row">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSingle;