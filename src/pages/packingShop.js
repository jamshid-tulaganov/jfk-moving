import React from "react";
import Footer from "../components/Footer";
import HeaderNav from "../components/Header/HeaderNav";
import { PackingShopHeader } from "../components/PackingShop/PackingShopHeader/PackingShopHeader.component";

export const PackingShop = () => (
  <>
    <HeaderNav isLanding={false} />
    <PackingShopHeader />
    <Footer />
  </>
);
