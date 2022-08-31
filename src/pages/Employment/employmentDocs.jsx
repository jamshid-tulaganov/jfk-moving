import React from "react";
import HeaderNav from "../../components/Header/HeaderNav";
import Footer from "../../components/Footer";
import EmploymentDocsCom from "../../components/EmploymentDocsCon/EmploymentDocsCom";

function EmploymentDocs() {
    return(
        <>
         <HeaderNav isLanding={false} />
         <EmploymentDocsCom />
        </>
    )
}

export default EmploymentDocs