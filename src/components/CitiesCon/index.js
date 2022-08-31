import React from "react";
import "./styles.css";
import city from "../../assets/images/city.png";
import { NavLink } from "react-router-dom";
import GoBack from "../../assets/icons/goback";

const data = [1, 2, 3, 4, 5, 6, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

function Cities() {
  return (
    <div className="choosecontainer">
      <div className="container">
        <div className="row back-arrow">
          <div className="col-lg-12 d-flex align-items-start">
            <NavLink to="/calculate">
              <GoBack className="gobackicon" />
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col-12 flex-column align-items-center">
            <h3 className="headTxt">Cities we serve</h3>
            <p className="descTextCities">
              If you don't see your city don't worry.
            </p>
          </div>
        </div>
        <div className="row">
          {data.map((val, key) => (
            <div className="col-lg-4 col-md-6 d-flex justify-content-center">
              <div className="city">
                <img src={city} className="city_image" />

                <p className="city_name">Irvine</p>
                <p className="city_desc">
                  Master Janitorial is a full-service company that has been
                  providing Office Cleaning Services to the city of Irvine for
                  over 50 years.{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cities;
