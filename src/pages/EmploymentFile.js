import React from "react";
import EmploymentFileCon from "../components/EmploymentFileCon";
import HeaderNav from "../components/Header/HeaderNav";

function EmploymentFile() {
  return (
    <>
      <EmploymentFileCon />
      <HeaderNav isLanding={false} />
    </>
  );
}

export default EmploymentFile;
