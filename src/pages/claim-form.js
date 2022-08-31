import React from "react";

import HeaderNav from "../components/Header/HeaderNav";
import Footer from "../components/Footer";
import ClaimFormComponent from "../components/claim/claim-form/claim-form.component";

const ClaimForm = () => {
    return (
        <>
            <HeaderNav isLanding={false} />
            <ClaimFormComponent />
            <Footer />
        </>
    )
}

export default ClaimForm