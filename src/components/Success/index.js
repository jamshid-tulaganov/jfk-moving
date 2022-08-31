import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import image from "../../assets/images/success.png";

function Success() {
  return (
    <div className="choosecontainer">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 d-flex flex-column align-items-center">
            <p className="headTxt">Congratulations!</p>
            <p className="sub-title">
              Thanks for reaching out. One of our representatives will contact
              you shortly.
            </p>
            <p className="descText">
              Thanks for reaching out. One of our representatives will contact
              you shortly.
            </p>
          </div>
        </div>
        <div className=" d-flex justify-content-center mx-auto">
          <img src={image} alt="moving" className="success-img" />
        </div>

        <NavLink to="/">
          <div className="col-12 back-buttons">
            <button className="continue-button">Home</button>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Success;
