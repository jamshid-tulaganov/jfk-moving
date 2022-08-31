import React from "react";
import HeaderNav from "../components/Header/HeaderNav";
import Footer from "../components/Footer";
import GuideTipsComponent from "../components/guide/guide-tips/guide-tips.component";
import Form from "../components/Form";

function GuideTips() {
    return(
        <>
            <HeaderNav isLanding={false} />
            <GuideTipsComponent />
            <Form header={'Book online with Us today.'} description={'As a fully integrated transport and logistics provider, our goal is to develop customized.' } isMargin={false} />
            <Footer />
        </>
    )
}

export default GuideTips