import React from "react";
import "./packingService.style.css";
import { Row, Col } from "react-bootstrap";

import FillImage from "../../../assets/images/packing/services/fill.png";
import BoxImage from "../../../assets/images/packing/services/box.png";
import FurnutureImage from "../../../assets/images/packing/services/furnuture.png";
import UnpackingImage from "../../../assets/images/packing/services/unpacking.png";

export const PackingServiceComponent = () => (
  <section className="storageService packing-service">
    <div className="container">
      <div className="storage-service__heading">
        <h1 className="titleText">Types of Packing Services </h1>
      </div>
      <div className="storage-service__block">
        <Row className="storage-service__row">
          <Col lg={6} sm={12} className="storage-service__column d-flex">
            <div className="guide-tips__img tips-content__column">
              <span className="guide-tips__index">01</span>
              <img src={FillImage} alt="checklist" />
            </div>
            <div className="packing-service__info">
              <h3>Full Pack</h3>
              <p>
                You don’t want to worry about packing at all – Imperial will
                send an experienced team of movers and packers to your home to
                pack up from floor to ceiling. If you wish to leave some items
                out to use the night before your move, we can quickly pack those
                up on moving day.
              </p>
            </div>
          </Col>
          <Col lg={6} sm={12} className="storage-service__column d-flex">
            <div className="guide-tips__img tips-content__column">
              <span className="guide-tips__index">02</span>
              <img src={BoxImage} alt="checklist" />
            </div>
            <div className="packing-service__info">
              <h3>Partial Pack</h3>
              <p>
                If you don’t mind packing some of your items on your own, but
                would like some extra help, we can accommodate all your needs.
                Whether it’s a large collection of breakables or clearing
                storage space for the move – we’ll fill in to make your
                experience easier.
              </p>
            </div>
          </Col>
          <Col lg={6} sm={12} className="storage-service__column d-flex">
            <div className="guide-tips__img tips-content__column">
              <span className="guide-tips__index">03</span>
              <img src={FurnutureImage} alt="checklist" />
            </div>
            <div className="packing-service__info">
              <h3>Furniture and Art Packing</h3>
              <p>
                A major concern for many of our customers is the safe keeping of
                their furniture, art and other valuable larger items. Using
                protective furniture wrapping and high quality moving blankets,
                we will dissemble your furniture and wrap each piece so that
                once your furniture arrives in your new location, there isn’t a
                scratch on it. Likewise with your art, we will wrap it using
                only the highest quality supplies so that it is completely
                protected during the transportation process.
              </p>
            </div>
          </Col>
          <Col lg={6} sm={12} className="storage-service__column d-flex">
            <div className="guide-tips__img tips-content__column">
              <span className="guide-tips__index">04</span>
              <img src={UnpackingImage} alt="checklist" />
            </div>
            <div className="packing-service__info">
              <h3>Unpacking</h3>
              <p>
                If you wish to pack yourself, Imperial will create an organized
                schedule in order to make the experience as practical and
                efficient as possible. If you would like some help settling into
                your new home, we can do the entire job or simply provide a few
                hours of assistance – it’s up to you.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </section>
);
