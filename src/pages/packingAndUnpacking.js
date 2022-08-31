import React from "react";
import Footer from "../components/Footer";
import HeaderNav from "../components/Header/HeaderNav";
import { PackingHeaderComponent } from "../components/PackingAndUnpacking/packingAndUnPacking-header/packingAndUnpackingHeader.component";
import { PackingServiceComponent } from "../components/PackingAndUnpacking/packingService/packingService.component";
import { PackingProcessComponent } from "../components/PackingAndUnpacking/packing-process/packingProcess.component";

export const PackingAndUnpacking = () => (
  <>
    <HeaderNav isLanding={false} />
    <PackingHeaderComponent />
    <PackingServiceComponent />
    <PackingProcessComponent />
    <Footer />
  </>
);
