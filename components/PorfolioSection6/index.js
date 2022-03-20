import React, { Component } from 'react';


import Link from 'next/link'

class Portfolio extends Component {

    state = {
        onWebDesign: false,
        onShopify: false,
        onWebApp: false,
        onEmail: false,
        isOpen : false,
    }

    render() {

        const allElement = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                onShopify: true,
                onWebDesign: true,
                onEmail: true,
            });
        }

        const webDesign = event => {
            event.preventDefault();
            this.setState({
                onWebDesign: true,
                onShopify: false,
                onWebApp: false,
                onEmail: false,
                isOpen: true,
            });
        }

        const Shopify = event => {
            event.preventDefault();
            this.setState({
                onShopify: true,
                onWebDesign: false,
                onWebApp: false,
                onEmail: false,
                isOpen: true,
            });
        }

        const webApp = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                onShopify: false,
                onWebDesign: false,
                onEmail: false,
                isOpen: true,
            });
        }

        const Email = event => {
            event.preventDefault();
            this.setState({
                onEmail: true,
                onWebApp: false,
                onShopify: false,
                onWebDesign: false,
                isOpen: true,
            });
        }



        return (
            <section id="protfolio" className="gallery-section wpo-protfolio-area-7 section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="gallery-filters">
                                <ul>
                                    <li><button data-filter="*" className="current" onClick={allElement}>All</button></li>
                                    <li><button data-filter=".Web-Design" onClick={webDesign}>Web Design</button></li>
                                    <li><button data-filter=".Shopify" onClick={Shopify}>Shopify</button></li>
                                    <li><button data-filter=".Web-Application" onClick={webApp}>Web Application</button></li>               
                                    <li><button data-filter=".Email" onClick={Email}>Email</button></li> 
                                </ul>
                            </div>
                            <div className="gallery-container gallery-fancybox masonry-gallery payra-masonary ">
                               
                               
                                <div className={this.state.onWebDesign ? "grid active" : "grid" 
                                    && this.state.onShopify ? "grid " : "grid"
                                    && this.state.onWebApp ? "grid " : "grid"
                                    && this.state.onEmail ? "grid " : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="wpo-protfolio-single">
                                        <div className="wpo-protfolio-img">
                                            <img src='/images/project/realEstate.png' alt="" className="img img-responsive"/>
                                        </div>
                                        <div className="wpo-protfolio-text">
                                            <h2>Landing Page</h2>
                                            <span>Web Design . Web Development</span>
                                            <Link href="/ProjectDetails/RealLanding"><a>View Work</a></Link>
                                        </div>
                                    </div>  
                                </div>

                                <div className={this.state.onWebDesign ? "grid active" : "grid"
                                    && this.state.onShopify ? "grid active " : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <div className="wpo-protfolio-single">
                                        <div className="wpo-protfolio-img">
                                            <img src='images/shopify1.png' alt="" className="img img-responsive"/>
                                        </div>
                                        <div className="wpo-protfolio-text">
                                            <h2>Shopify Theme</h2>
                                            <span>Shopify . Web Development</span>
                                            <Link href="/ProjectDetails/ShopifyTheme1"><a>View Work</a></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className={this.state.onEmail ? "grid active" : "grid" 
                                    && this.state.onEmail ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="wpo-protfolio-single">
                                        <div className="wpo-protfolio-img">
                                            <img src='images/imgg/fenty_pre2.png' alt="" className="img img-responsive"/>
                                        </div>
                                        <div className="wpo-protfolio-text">
                                            <h2>Promotional Email</h2>
                                            <span>Web Develeoper . Email</span>
                                            <Link href="/ProjectDetails/Fentyp"><a>View Work</a></Link>
                                        </div>
                                    </div>  
                                </div>
                                <div className={this.state.onWebDesign ? "grid active" : "grid"
                                    && this.state.onEmail ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <div className="wpo-protfolio-single">
                                        <div className="wpo-protfolio-img">
                                            <img src='images/img/maka.png' alt="" className="img img-responsive"/>
                                        </div>
                                        <div className="wpo-protfolio-text">
                                            <h2>Transactional  Email</h2>
                                            <span>Email . Web Developer</span>
                                            <Link href="/ProjectDetails/Makartt"><a>View Work</a></Link>
                                        </div>
                                    </div>
                                </div> 
                                <div className={this.state.onWebDesign ? "grid active" : "grid"
                                    && this.state.onShopify ? "grid active " : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <div className="wpo-protfolio-single">
                                        <div className="wpo-protfolio-img">
                                            <img src='https://flawlessjae.net/wp-content/uploads/2021/06/Screen-Shot-2021-06-22-at-12.59.45-AM.png' alt="" className="img img-responsive"/>
                                        </div>
                                        <div className="wpo-protfolio-text">
                                            <h2>Shopify Theme</h2>
                                            <span>Shopify . Web Development</span>
                                            <Link href="/ProjectDetails/ShopifyTheme3"><a>View Work</a></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className={this.state.onWebDesign ? "grid active" : "grid"
                                    && this.state.onEmail ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <div className="wpo-protfolio-single">
                                        <div className="wpo-protfolio-img">
                                            <img src='images/img/spec_main.png' alt="" className="img img-responsive"/>
                                        </div>
                                        <div className="wpo-protfolio-text">
                                            <h2> Email</h2>
                                            <span>Email . Web Developer</span>
                                            <Link href="/ProjectDetails/Spec"><a>View Work</a></Link>
                                        </div>
                                    </div>
                                </div> 

                                <div className={this.state.onWebDesign ? "grid active" : "grid"
                                    && this.state.onShopify ? "grid active " : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <div className="wpo-protfolio-single">
                                        <div className="wpo-protfolio-img">
                                            <img src='https://flawlessjae.net/wp-content/uploads/2021/06/Screen-Shot-2021-06-22-at-12.37.39-AM.png' alt="" className="img img-responsive"/>
                                        </div>
                                        <div className="wpo-protfolio-text">
                                            <h2>Shopify Theme</h2>
                                            <span>Shopify . Web Development</span>
                                            <Link href="/ProjectDetails/ShopifyTheme2"><a>View Work</a></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className={this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.onWebDesign ? "grid active " : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <div className="wpo-protfolio-single">
                                        <div className="wpo-protfolio-img">
                                            <img src='/images/project/jamies.png' alt="" className="img img-responsive"/>
                                        </div>
                                        <div className="wpo-protfolio-text">
                                            <h2>Web App</h2>
                                            <span>Web App . Web Development</span>
                                            <Link href="/ProjectDetails/Jamies.png"><a>View Work</a></Link>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <div className={this.state.onShopify ? "grid active" : "grid"
                                    && this.state.onEmail ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <div className="wpo-protfolio-single">
                                        <div className="wpo-protfolio-img">
                                            <img src='images/protfolio/img-17.jpg' alt="" className="img img-responsive"/>
                                        </div>
                                        <div className="wpo-protfolio-text">
                                            <h2>Minimalism</h2>
                                            <span>Illustration . Art Direction</span>
                                            <Link href="/ProjectDetails"><a>View Work</a></Link>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className={this.state.onShopify ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.onEmail ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <div className="wpo-protfolio-single">
                                        <div className="wpo-protfolio-img">
                                            <img src='images/protfolio/img-6.jpg' alt="" className="img img-responsive"/>
                                        </div>
                                        <div className="wpo-protfolio-text">
                                            <h2>Minimalism</h2>
                                            <span>Illustration . Art Direction</span>
                                            <Link href="/ProjectDetails"><a>View Work</a></Link>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            {/* ajwifie2 */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;