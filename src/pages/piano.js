import React from "react";
import Footer from "../components/Footer";
import HeaderNav from "../components/Header/HeaderNav";
import { PianoHeader } from "../components/Piano/piano-header/pianoHeader.compoent";
import { PianoGuideComponennt } from "../components/Piano/piano-guide/pianoGuide.component";
import { PianoTypesComponent } from "../components/Piano/piano-types/pianoTypes.component";

export const Piano = () => (
  <>
    <HeaderNav isLanding={false} />
    <PianoHeader />
    <PianoGuideComponennt />
    <PianoTypesComponent />
    <Footer />
  </>
);
