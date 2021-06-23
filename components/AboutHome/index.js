import React from 'react';
import Link from 'next/link'

const AboutHome = (props) => {

  return (
    <div className="wpo-about-area-3 wpo-about-area-s1 section-padding">
        <div className="wpo-about-wrap">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="about-s2-img">
                            <img src='images/about/about1.jpg' alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="wpo-about-text">
                            <h2>Creativity is nothing but a mind set free</h2>
                            <p>My name is Jae. I am a web designer and developer. Design is my passion I love any and everything that has to do with design. I love to bring peoples ideas to life and create a beautiful experience. I,m from Ohio I have an Aassociate's Degree in Graphic Design, with a specialization in Multimedia and web. </p>
                            <ul>
                                <li>Shopify</li>
                                <li>Laravel</li>
                                <li>React</li>
                            </ul>
                            <Link href="/AboutPage"><a className="theme-btn-s2">More About</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutHome;