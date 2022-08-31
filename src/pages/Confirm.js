import React from "react";
import HeaderNav from "../components/Header/HeaderNav";
import ConfirmContainer from "../components/ConfirmContainer";

function Confirm() {
    return (
        <>
            <HeaderNav isLanding={false} />
            <ConfirmContainer />
        </>
    );
}

export default Confirm;