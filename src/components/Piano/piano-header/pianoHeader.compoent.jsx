import React from "react";
import "./pianoHeader.sytyle.css";

export const PianoHeader = () => (
  <section className="storage piano-header">
    <div className="storage-bg">
      <h1 className="storage-bg__header d-flex align-items-center flex-column">
        Piano Moving Service
      </h1>
      <p className="storage-bg__txt">
        We move everything from uprights to grand pianos with precision and
        care!
      </p>
    </div>
    <div className="storage-info">
      <h1 className="storage-info__header">Piano Moving</h1>
      <p className="storage-info__txt">
        JFK Moving understands the importance of a cherished piano. Whether you
        need to transport your upright or baby grand to a church, concert venue
        or new residence, we’re ready to help. Along with being rather heavy and
        cumbersome, a piano is delicate and requires special handling to ensure
        it arrives at its destination in the same condition as when we picked it
        up. Our piano movers come equipped with specialized training and
        equipment to relocate any piano safely. Above all else, what separates
        our piano moving service is our attention to detail. Contact us today to
        set up your LA piano move!
      </p>
    </div>
  </section>
);
