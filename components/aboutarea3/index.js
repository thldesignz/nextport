import React from 'react';
import Link from 'next/link'

const AboutArea3 = (props) => {

  return (
    <div className="wpo-about-area-3 section-padding">
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
                            <p>My name is Jae. I am a web designer and developer. Design is my passion I love any and everything that has to do with design. I love to bring peoples ideas to life and create a beautiful experience. I,m from Ohio I have an Aassociate's Degree in Graphic Design, with a specialization in Multimedia and web.  </p>
                            <ul>
                                {/* <li>High Quality Service</li>
                                <li>Best Price in Marketplace.</li>
                                <li>Unique Design and Development.</li> */}
                            </ul>
                            {/* <Link href="/"><a className="theme-btn-s2">Download CV</a></Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutArea3;