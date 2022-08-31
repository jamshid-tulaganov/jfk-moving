import React from "react";
import HeaderNav from "../components/Header/HeaderNav";
import CalculateContainer from "../components/CalculateContainer";

function Calculate() {
    return (
        <>
            <HeaderNav isLanding={false} />
            <CalculateContainer />
        </>
    );
}

export default Calculate;