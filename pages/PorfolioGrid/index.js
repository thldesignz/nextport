import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer from '../../components/Footer'
import Portfolio from '../../components/PorfolioSection6'
import Head from 'next/head'

const PorfolioGrid =() => {
    
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
                <title>Portfolio</title>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-MS13S8H0FC"/>
            </Head>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Portfolio'} pageSub={'Portfolio'}/>
            <Portfolio/>
            <Footer Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default PorfolioGrid; 