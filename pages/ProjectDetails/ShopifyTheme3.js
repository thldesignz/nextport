import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer2 from '../../components/Footer2'
import ProjectSingle from '../ProjectSingle/Shopify3'
import Head from 'next/head'

const ProjectDetails =() => {
    return(
        <Fragment>
            <Head>
                <title>Shopify Theme 3</title>
            </Head>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Shopify Theme 3'} pageSub={'Project Details'}/>
            <ProjectSingle/>
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default ProjectDetails;