import React from 'react'
import Link from 'next/link'


const PorfolioSectionHome = ( props ) => {
    return(
        <div className="wpo-protfolio-area-2 wpo-protfolio-area-s1 section-padding">
            <div className="container">
                <div className="col-12">
                    <div className="section-title text-center">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-protfolio-item">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 custom-grid">
                                    <div className="">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src='https://flawlessjae.net/wp-content/uploads/2021/05/Screenshot-2021-05-07-at-18-05-39-Jamies-Learn-How-To-Code-Get-a-Job-Passive-Income.png' alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Jamies Famous Burger</h2>
                                                <span>Full-Stack. Web Development</span>
                                                <Link href="/ProjectDetails/Jamies">View Work</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 custom-grid">
                                    <div className="">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src='https://flawlessjae.net/wp-content/uploads/2021/06/Screen-Shot-2021-06-21-at-12.52.49-PM.png' alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Theme For Hair STore</h2>
                                                <span>Web Design . Web Development</span>
                                                <Link href="/ProjectDetails/ShopifyTheme1">View Work</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 custom-grid">
                                    <div className="">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src='https://flawlessjae.net/wp-content/uploads/2021/06/Screen-Shot-2021-06-22-at-12.37.39-AM.png' alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Shopify Theme</h2>
                                                <span>Shopify . Web Development</span>
                                                <Link href="/ProjectDetails/ShopifyTheme2">View Work</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 custom-grid">
                                    <div className="">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src='https://flawlessjae.net/wp-content/uploads/2021/06/Screen-Shot-2021-06-22-at-12.59.45-AM.png' alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Shopify Theme</h2>
                                                <span>Shopify . Web Development</span>
                                                <Link href="/ProjectDetails/ShopifyTheme3">View Work</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="protfolio-btn">
                                <Link href="/PorfolioGrid"><a>See More Work</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PorfolioSectionHome;