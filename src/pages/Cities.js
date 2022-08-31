import React from 'react'
import HeaderNav from '../components/Header/HeaderNav';
import Footer from '../components/Footer';
import CitiesCon from '../components/CitiesCon';

function Cities() {
    return (
        <>
            <CitiesCon />
            <Footer />
            <HeaderNav isLanding={false} />
        </>
    )
}

export default Cities