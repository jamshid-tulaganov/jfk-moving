import React from "react";
import HeaderNav from "../components/Header/HeaderNav";
import EnterLocation from "../components/EnterLocation";

function Location() {
  return (
    <>
      <HeaderNav title="888-588-4848" isLanding={false} />
      <EnterLocation />
    </>
  );
}

export default Location;
