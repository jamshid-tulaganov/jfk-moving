import React from 'react';
import Footer from '../components/Footer';
import HeaderNav from '../components/Header/HeaderNav';
import ContactCon from '../components/ContactCon';

function Contact() {
    return (
        <>  <HeaderNav isLanding={false} scroll={false} />
            <ContactCon />
            <Footer />
        </>
    )
}

export default Contact;