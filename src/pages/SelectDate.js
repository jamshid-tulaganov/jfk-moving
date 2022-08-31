import React from "react";
import HeaderNav from "../components/Header/HeaderNav";
import ChooseDate from "../components/ChooseDate";

function SelectDate() {
  return (
    <>
      <ChooseDate />
      <HeaderNav title="888-588-4848"  isLanding={false}/>
    </>
  );
}

export default SelectDate;
