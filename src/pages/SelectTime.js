import React from "react";
import HeaderNav from "../components/Header/HeaderNav";
import ChooseTime from "../components/ChooseTime";

function SelectTime() {
    return (
        <>
            <HeaderNav isLanding={false} />
            <ChooseTime />

        </>
    );
}

export default SelectTime;
