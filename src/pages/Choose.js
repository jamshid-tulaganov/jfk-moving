import React from "react";
import ChooseContainer from "../components/ChooseContainer";
import HeaderNav from "../components/Header/HeaderNav";

function Choose() {
  return (
    <>
        <HeaderNav auth={true} title="888-588-4848" isLanding={false} />
        <ChooseContainer />
    </>
  );
}

export default Choose;
