import React from "react";
import "./ShopCard.style.css";

import imgages from "../../../assets/images/shop/boxes/image1.png";

export const ShopCard = ({ data }) => {
  console.log(data);
  return (
    <section className="col-lg-6 col-md-6 col-sm-12">
      <main className="shop-card">
        <div className="shop-card__image">
          <img src={imgages} alt="card" />
        </div>
        <div className="shop-card__facts">
          <h4 className="shop-card__header">{data.header}</h4>
          <p className="shop-card__txt">{data.description}</p>
          <div className="shop-card__price">
            <p>
              Price: <span>${data.price}.00</span>
            </p>
            {data.size === null ? (
              ""
            ) : (
              <p>
                {" "}
                Size : <span>{data.size}</span>{" "}
              </p>
            )}
          </div>

          <button className="shop-card__btn MovingBox__btn">Add to cart</button>
        </div>
      </main>
    </section>
  );
};
