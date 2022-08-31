import React from 'react';
import Footer from '../components/Footer';
import PaymentCon from '../components/PaymentCon';
import HeaderNav from '../components/Header/HeaderNav';

function Payment() {
    return (
        <>
            <PaymentCon />
            <Footer />
            <HeaderNav isLanding={false} />
        </>
    )
}

export default Payment;