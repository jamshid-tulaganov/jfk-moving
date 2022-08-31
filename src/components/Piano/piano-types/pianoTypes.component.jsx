import React from "react";
import "./pianoTypes.style.css";
import { Row, Col } from "react-bootstrap";
// images static
import BabyGrand from "../../../assets/images/piano/piano-types/baby-grand.png";
import Grand from "../../../assets/images/piano/piano-types/grand.png";
import Upright from "../../../assets/images/piano/piano-types/upright.png";
// brand images
import YamahaImage from "../../../assets/images/piano/brands/yamaha.png";
import BrandImage from "../../../assets/images/piano/brands/b-piano.png";
import FazioloImage from "../../../assets/images/piano/brands/fazioli.png";
import StenfeyImage from "../../../assets/images/piano/brands/steinway-and-sons.png";
import NventImage from "../../../assets/images/piano/brands/nvent-hoffman.png";
import BaldwinImge from "../../../assets/images/piano/brands/baldwin.png";
import BlutherImage from "../../../assets/images/piano/brands/julius-bluethner.png";
import BechsteinImage from "../../../assets/images/piano/brands/c-bechsteinag.png";

export const PianoTypesComponent = () => (
  <section className="piano-types">
    <div className="container">
      <div className="piano-types__block">
        <div className="piano-types__heading">
          <h1 className="titleText text-center">Type of Pianos We Move</h1>
        </div>
        <div className="piano-images">
          <Row>
            <Col lg={4} sm={12} className="piano-column">
              <div>
                <img src={BabyGrand} alt="Baby Grand piano" />
              </div>
            </Col>
            <Col lg={4} sm={12} className="piano-column">
              <div>
                <img src={Grand} alt="Grand piano" />
              </div>
            </Col>
            <Col lg={4} sm={12} className="piano-column">
              <div>
                <img src={Upright} alt="Upright  piano" />
              </div>
            </Col>
          </Row>
        </div>
        {/* piano brands */}
        <div className="piano-brand">
          <div className="piano-brand__header piano-types__heading">
            <h1 className="titleText text-center">
              Piano Brands we are moving everyday
            </h1>
          </div>
          <div className="piano-brand__block">
            <Row>
              <Col lg={3} sm={6} className="piano-brand__column">
                <div>
                  <img src={YamahaImage} alt="yamaha brand piano" />
                </div>
              </Col>
              <Col lg={3} sm={6} className="piano-brand__column">
                <div>
                  <img src={BrandImage} alt="B brand piano" />
                </div>
              </Col>
              <Col lg={3} sm={6} className="piano-brand__column">
                <div>
                  <img src={FazioloImage} alt="Faziolo brand piano" />
                </div>
              </Col>
              <Col lg={3} sm={6} className="piano-brand__column">
                <div>
                  <img src={StenfeyImage} alt="stenfey brand piano" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={3} sm={6} className="piano-brand__column">
                <div>
                  <img src={NventImage} alt="nvent brand piano" />
                </div>
              </Col>
              <Col lg={3} sm={6} className="piano-brand__column">
                <div>
                  <img src={BaldwinImge} alt="Baldwin brand piano" />
                </div>
              </Col>
              <Col lg={3} sm={6} className="piano-brand__column">
                <div>
                  <img src={BlutherImage} alt="Bluther brand piano" />
                </div>
              </Col>
              <Col lg={3} sm={6} className="piano-brand__column">
                <div>
                  <img src={BechsteinImage} alt="Bechstein brand piano" />
                </div>
              </Col>
            </Row>
          </div>
          <div className="piano-brand__btn">
            <button className="continue-button">Piano Move</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
