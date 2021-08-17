import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer2 from '../../components/Footer2'
import ProjectSingle from '../ProjectSingle/Makarttps'
import Head from 'next/head'

const ProjectDetails =() => {
    return(
        <Fragment>
            <Head>
                <title>Makartt Email</title>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-MS13S8H0FC"/>
            </Head>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Makartt Email'} pageSub={'Project Details'}/>
            <ProjectSingle/>
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default ProjectDetails;