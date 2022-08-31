import React from "react";
import HeaderNav from "../components/Header/HeaderNav";
import EnterAddress from "../components/EnterAddress";

function Form() {
  return (
    <>
      <HeaderNav title="888-588-4848" isLanding={false} />
      <EnterAddress />
    </>
  );
}

export default Form;
