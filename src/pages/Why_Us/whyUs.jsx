import React from "react";
import HeaderNav from "../../components/Header/HeaderNav";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import WhyComponent from "../../components/Why_UsComponent/why";

function WhyUs() {
    return(
        <>
          <HeaderNav isLanding={false} scroll={false} />
          <WhyComponent />
            <Form header={'Book online with Us today.'} description={'As a fully integrated transport and logistics provider, our goal is to develop customized.'} isMargin={false} />
          <Footer />
        </>
            )
}

export default WhyUs