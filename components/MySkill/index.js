import React from 'react';

const MySkill = (props) => {

  return (
    <div className="skill-area section-padding">
        <div className="container">
            <div className="col-12">
                <div className="section-title-2 text-center">
                    <h2>My skills</h2>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="progress yellow">
                        <span className="progress-left">
                            <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                            <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">90%</div>
                    </div>
                    <h3>HTML</h3>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="progress blue">
                        <span className="progress-left">
                            <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                            <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">80%</div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="progress pink">
                        <span className="progress-left">
                            <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                            <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">65%</div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="progress green">
                        <span className="progress-left">
                            <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                            <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">47%</div>
                    </div>
                </div>
            </div> */}
            <div className="row">
                <div className="col-sm-12 icons">
                <i className="fab fa-html5"></i>
                <i className="fab fa-css3-alt"></i>
                <i className="fab fa-js"></i>
                <i className="fab fa-php"></i>
                <i className="fab fa-cpanel"></i>
                <i className="fab fa-github"></i>
                <i className="fab fa-laravel"></i>
                <i className="fab fa-npm"></i>
                <i className="fab fa-react"></i>
                <i className="fab fa-sass"></i>
                <i className="fab fa-shopify"></i>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MySkill;