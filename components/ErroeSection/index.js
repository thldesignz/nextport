import React from 'react'
import Link from 'next/link'

const ErroeSection = () => {
    return(
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <img src='images/error-404.png' alt=""/>
                            </div>
                            <div className="error-message">
                                <h3>Oops! Page Not Found!</h3>
                                <p>We’re sorry but we can’t seem to find the page you requested. This might be because you have typed the web address incorrectly.</p>
                                <Link href="/"><a className="theme-btn-s2">Back to home</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ErroeSection;