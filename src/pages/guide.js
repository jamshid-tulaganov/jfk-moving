import React from "react";
import GuideMainComponent from "../components/guide/guide-main/guide-main.component";
import HeaderNav from "../components/Header/HeaderNav";
import Footer from "../components/Footer";

function GuidePage() {
    return(
        <>
            <HeaderNav isLanding={false} />
            <GuideMainComponent />
            <Footer />
        </>
    )
}

export default GuidePage;