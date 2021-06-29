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


