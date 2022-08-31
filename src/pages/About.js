import React from 'react';
import Footer from '../components/Footer';
import HeaderNav from '../components/Header/HeaderNav';
import AboutCon from '../components/AboutCon';
import MovingBoxes from '../components/movingBoxes/movingBoxes';
import CoverageNetwork from '../components/coverageNetwork/coverageNetwork';

function About() {
    return (
        <>  
            <HeaderNav isLanding={false} />
            <AboutCon />
            <MovingBoxes onlyBoxes={true} />
            <CoverageNetwork />
            <Footer />
        </>
    )
}

export default About;