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
                            <p> I'm a Front-End Developer located in Ohio. I have a passion for creating and love to bring people's vision to life. I'm always learning and gaining more skills. I'm working on becoming a better developer and learning new skills. Recently I created my first app using ionic and react.  </p>
                            <p> My interest in web development started with myspace where I started to break down and figure out how to customize the layout to the way I wanted. That was the start of me getting into graphic design and web development.  </p>
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