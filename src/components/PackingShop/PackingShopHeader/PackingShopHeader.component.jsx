import React from "react";
import "./PackingShopHeader.style.css";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { BoxesShop } from "../BoxesShop/BoxesShop.component";
import { OtherSuppliesComponent } from "../OtherSupplies/OtherSupplies.component";
import { BundiesComponent } from "../Bundies/Bundies.component";

export const PackingShopHeader = () => {
  const [isActive, setActive] = useState(1);

  return (
    <section>
      <div className="container">
        <div className="packing-shop__header">
          <h1 className="headTxt">Packing supplies & Moving boxes</h1>
          <p className="getTxt pb-0 mb-0 text-center">
            JFK Moving offers a full line of moving boxes and supplies in Los
            Angeles. Our large selection of high quality moving boxes will help
            make your move a breeze! Along with moving boxes, JFK Moving offers
            a full array of packing tape, bubble wrap, protective wraps, and
            moving kits.
          </p>
        </div>
        <div className="packing-shop__navigate">
          <Row>
            <Col className="packing-shop__column" lg={4} md={4}>
              <button
                className={
                  isActive === 1 ? "active-shop__btn shop__btn" : "shop__btn"
                }
                onClick={() => setActive(1)}
              >
                Boxes
              </button>
            </Col>
            <Col className="packing-shop__column" lg={4} md={4}>
              <button
                className={
                  isActive === 2 ? "active-shop__btn shop__btn" : "shop__btn"
                }
                onClick={() => setActive(2)}
              >
                Other supplies
              </button>
            </Col>
            <Col className="packing-shop__column" lg={4} md={4}>
              <button
                className={
                  isActive === 3 ? "active-shop__btn shop__btn" : "shop__btn"
                }
                onClick={() => setActive(3)}
              >
                Bundies
              </button>
            </Col>
          </Row>
        </div>
        {isActive === 1 ? <BoxesShop /> : null}
        {isActive === 2 ? <OtherSuppliesComponent /> : null}
        {isActive === 3 ? <BundiesComponent /> : null}
      </div>
    </section>
  );
};
