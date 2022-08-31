import React from "react";
import "./pianoGuide.style.css";
import { Row, Col } from "react-bootstrap";
// images static
import Blanket from "../../../assets/images/piano/guide/blanket.png";
import Boxes from "../../../assets/images/piano/guide/boxes.png";
import Packing from "../../../assets/images/piano/guide/packing.png";
import Piano from "../../../assets/images/piano/guide/piano.png";
import Poly from "../../../assets/images/piano/guide/poly.png";

export const PianoGuideComponennt = () => (
  <section className="storageService piano-guide">
    <div className="container">
      <div className="storage-service__heading piano-guide__header">
        <h1 className="titleText">Piano Moving Guide</h1>
      </div>
      <div className="paino-guide__block">
        <Row className="storage-service__row">
          <Col
            lg={6}
            sm={12}
            className="piano-guide__column d-flex align-items-center"
          >
            <div className="piano-column__img">
              <img
                src={Poly}
                alt="houses and people"
                title="people are carreing boxes into houes"
              />
            </div>
            <h3>Careful disassembly of components</h3>
          </Col>
          <Col
            lg={6}
            sm={12}
            className="piano-guide__column d-flex align-items-center"
          >
            <div className="piano-column__img">
              <img
                src={Blanket}
                alt="blanket"
                title="Plenty of blankets to protect the body"
              />
            </div>
            <h3>Plenty of blankets to protect the body</h3>
          </Col>
          <Col
            lg={6}
            sm={12}
            className="piano-guide__column d-flex align-items-center"
          >
            <div className="piano-column__img">
              <img
                src={Boxes}
                alt="boxes"
                title="Professional loading and unloading"
              />
            </div>
            <h3>Professional loading and unloading</h3>
          </Col>
          <Col
            lg={6}
            sm={12}
            className="piano-guide__column d-flex align-items-center"
          >
            <div className="piano-column__img">
              <img
                src={Packing}
                alt="packing boxes"
                title="Specialized packing of each component"
              />
            </div>
            <h3>Specialized packing of each component</h3>
          </Col>
          <Col
            lg={6}
            sm={12}
            className="piano-guide__column d-flex align-items-center"
          >
            <div className="piano-column__img">
              <img
                src={Piano}
                alt="piano"
                title="Reassembly of the entire piano"
              />
            </div>
            <h3>Reassembly of the entire piano</h3>
          </Col>
        </Row>
      </div>
    </div>
  </section>
);
