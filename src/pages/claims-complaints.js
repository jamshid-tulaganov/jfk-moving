import React from "react";
import HeaderNav from "../components/Header/HeaderNav";
import Footer from "../components/Footer";
import ClaimsMainComponent from "../components/claim/claims-main/claims-main.component";

const ClaimsComplaints = () => {
    return (
        <>
         <HeaderNav isLanding={false} />
         <ClaimsMainComponent />
         <Footer />
        </>
    )
}

export default ClaimsComplaints