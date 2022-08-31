import React from "react";
import HeaderNav from "../components/Header/HeaderNav";
import Success from "../components/Success";

function Congrats() {
  return (
    <>
      <HeaderNav isLanding={false} />
      <Success />
    </>
  );
}

export default Congrats;
