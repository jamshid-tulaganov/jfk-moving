import React from 'react';
import Footer from '../components/Footer';
import HeaderNav from '../components/Header/HeaderNav';
import EmploymentCon from '../components/EmploymentCon';

function Employment() {
    return (
        <>
            <EmploymentCon />
            <HeaderNav isLanding={false} />
        </>
    )
}

export default Employment;