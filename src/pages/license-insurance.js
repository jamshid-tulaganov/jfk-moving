import React from "react";
import HeaderNav from "../components/Header/HeaderNav";
import Footer from "../components/Footer";
import LicenseComponent from "../components/license/license.component";

const LicenseInsurance = () => {

    return (
        <>
            <HeaderNav  isLanding={false}/>
            <LicenseComponent />
            <Footer />
        </>
    )
}

export default LicenseInsurance