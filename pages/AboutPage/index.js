import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import ServiceSection from '../../components/ServiceSection'
import MySkill from '../../components/MySkill'
import Footer2 from '../../components/Footer'
import AboutArea3 from '../../components/aboutarea3'
import Head from 'next/head'

const AboutPage =() => {
    return(
        <Fragment>
            <Head>
                <title>About Page</title>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-MS13S8H0FC"/>
            </Head>
            <Navbar5/>
            <Breadcrumbs pageTitle={'About Us'} pageSub={'About'}/>
            <AboutArea3/>
            <MySkill/>
            <ServiceSection serviceclass={'wpo-service-area-4 section-padding'}/>
            <Footer2 Ftclass={'wpo-footer-area3'} />
        </Fragment>
    )
};
export default AboutPage;