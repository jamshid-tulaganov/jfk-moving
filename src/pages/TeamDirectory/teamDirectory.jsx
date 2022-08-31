import React from "react";
import HeaderNav from "../../components/Header/HeaderNav";
import Team from "../../components/Team/team";
import Footer from "../../components/Footer";
function TeamDirectory() {
    return(
        <>
            <HeaderNav isLanding={false} scroll={false} />
            <Team />
            <Footer />
        </>
    )
}

export default TeamDirectory;