import React, {Fragment} from 'react';
import Navbar from '../components/Navbar'
import Hero1 from '../components/Hero1'
import Exprience from '../components/exprience'
import AboutHome from '../components/AboutHome'
import PorfolioSectionHome from '../components/PorfolioSectionHome'
import TestSlider from '../components/Testimonial'
import ContactArea from '../components/ContactArea'
import LatestBlog from '../components/LatestNews'
import Footer from '../components/Footer'
import Head from 'next/head';
import { useEffect } from 'react';



const HomePage =() => {


     
                React.useEffect(() => {
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
    
                    gtag('config', 'G-MS13S8H0FC');
    
                    gtag();
                })


                React.useEffect(() => {

                    "use strict";

                    !function() {
                        var t = window.driftt = window.drift = window.driftt || [];
                        if (!t.init) {
                          if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
                          t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
                          t.factory = function(e) {
                            return function() {
                              var n = Array.prototype.slice.call(arguments);
                              return n.unshift(e), t.push(n), t;
                            };
                          }, t.methods.forEach(function(e) {
                            t[e] = t.factory(e);
                          }), t.load = function(t) {
                            var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
                            o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                            var i = document.getElementsByTagName("script")[0];
                            i.parentNode.insertBefore(o, i);
                          };
                        }
                      }();
                      drift.SNIPPET_VERSION = '0.3.1';
                      drift.load('6wsbrn3ipcm4');
                                    })





    return(
        <Fragment>
            <Head>
                <title>Flawless Jae Designs</title>

                

                
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-MS13S8H0FC"/>
            </Head>
            <Navbar />
           <Hero1/>
            <Exprience/>
            <AboutHome/>
            <PorfolioSectionHome/>
            {/* <TestSlider/> */}
            <ContactArea/>
            {/* <LatestBlog/> */}
            <Footer/>
        </Fragment>
    )
};
export default HomePage;


