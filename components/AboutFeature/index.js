import React from 'react';
import Link from 'next/link'

const AboutFeatures = (props) => {

  return (
    <div className="about-feature-area">
        <div className="container">
            <div className="about-features-wrap">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-feature-left">
                            <h2>We creat the best product what you are looking for.</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-feature-right">
                            <p>My name is John Smith. I am a web designer and developer.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                            <Link href="/AboutPage"><a className="theme-btn-s2">More About</a></Link>
                        </div>
                    </div>
                </div>
                <div className="radius-ball"></div>
            </div>
        </div>
    </div>
  );
}

export default AboutFeatures;