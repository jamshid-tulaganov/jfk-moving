import React from "react";
import { imgUrl } from "../../../config.user.json";
import { Row } from "react-bootstrap";
import { ShopCard } from "../ShopCard/ShopCard.component";

export const OtherSuppliesComponent = () => {
  const shopData = [
    {
      imgUrl: `${imgUrl}/boxes/image1.png`,
      header: "Shrink Wrap & Dispenser",
      description:
        "Bundle, band, wrap or tie with Oz's narrow width stretch film",
      price: "12",
      size: "Twin/Full/Queen",
    },
    {
      imgUrl: `${imgUrl}/boxes/image1.png`,
      header: "Shrink Wrap & Dispenser",
      description:
        "Bundle, band, wrap or tie with Oz's narrow width stretch film",
      price: "12",
      size: "Twin/Full/Queen",
    },
    {
      imgUrl: `${imgUrl}/boxes/image1.png`,
      header: "Shrink Wrap & Dispenser",
      description:
        "Bundle, band, wrap or tie with Oz's narrow width stretch film",
      price: "12",
      size: null,
    },
    {
      imgUrl: `${imgUrl}/boxes/image1.png`,
      header: "Shrink Wrap & Dispenser",
      description:
        "Bundle, band, wrap or tie with Oz's narrow width stretch film",
      price: "12",
      size: null,
    },
    {
      imgUrl: `${imgUrl}/boxes/image1.png`,
      header: "Shrink Wrap & Dispenser",
      description:
        "Bundle, band, wrap or tie with Oz's narrow width stretch film",
      price: "12",
      size: null,
    },
    {
      imgUrl: `${imgUrl}/boxes/image1.png`,
      header: "Shrink Wrap & Dispenser",
      description:
        "Bundle, band, wrap or tie with Oz's narrow width stretch film",
      price: "12",
      size: "Twin/Full/Queen",
    },
  ];

  return (
    <section>
      <div className="boxes--container">
        <Row>
          {shopData.map((data, index) => (
            <ShopCard data={data} key={index} />
          ))}
        </Row>

        <div className="shop-btn">
          <button className="continue-button">Shop Now</button>
        </div>
      </div>
    </section>
  );
};
