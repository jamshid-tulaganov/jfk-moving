import React from "react";
import Footer from "../components/Footer";
import HeaderNav from "../components/Header/HeaderNav";
import { PoolTableHeader } from "../components/PoolTable/pool-header/PoolHeader.component";
import { PoolTypeComponent } from "../components/PoolTable/pool-type/poolType.component";

export const PoolTable = () => (
  <>
    <HeaderNav isLanding={false} />
    <PoolTableHeader />
    <PoolTypeComponent />
    <Footer />
  </>
);
