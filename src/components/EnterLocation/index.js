import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import { connect } from "react-redux";
import InputMask from "react-input-mask";

import movingAction from "../../redux/moving/moving.Action";
import { useNavigate } from "react-router-dom";
//validation
import { zipCodeValidation } from "../../validations/zipCodeValidation";
import Validation from "../../validations/validationText/validation";

import { NavLink } from "react-router-dom";
import Map from "../Map";
import ArrowTop from "../../assets/icons/arrowTop";
import ArrowBottom from "../../assets/icons/arrowBottom";

function EnterLocation(props) {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);

  const [value, setValue] = useState(props.movingData.movingFrom);
  const [value2, setValue2] = useState(props.movingData.movingTo);
  //valid
  const [zipCodeFromValid, setZipCodeFromValid] = useState(true);
  const [zipCodeToValid, setZipCodeToValid] = useState(true);
  const [validAll, setValidAll] = useState(false);

  const [fromList, setFromList] = useState([]);
  const [toList, setToList] = useState([]);

  let data = props.movingData;

  data.movingFrom = value;
  data.movingTo = value2;

  // validations

  function validationAll() {
    if (value === "" || value === null || value.length < 0) {
      setZipCodeFromValid(false);
    }
    if (value2 === "" || value2 === null || value2.length < 0) {
      setZipCodeToValid(false);
    }
  }

  const checkValidation = () => {
    if (
      value.includes("_") &&
      value.length > 0 &&
      value2.includes("_") &&
      value2.length > 0
    ) {
      setValidAll(true);
    } else {
      setValidAll(false);
    }
  };

  const passAddressPage = () => {
    if (
      validAll ||
      (!value.includes("_" && value.length > 0) &&
        !value2.includes("_") &&
        value2.length > 0)
    ) {
      navigate("/form");
    } else {
      validationAll();
    }
  };

  //
  // const sendRequest = (value) => {
  //   axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${value}&key=c9523820972d42c382eb3fa04094bfea`)
  //     .then(res => {
  //       setFromList(res.data.results);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     })
  // }
  // const sendRequest2 = (value) => {
  //   axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${value}&key=c9523820972d42c382eb3fa04094bfea`)
  //     .then(res => {
  //       setToList(res.data.results);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     })
  // }

  return (
    <div className="choosecontainer">
      <div className="container">
        {/*<div className="row back-arrow">*/}
        {/*  <div className="col-lg-12 d-flex align-items-start">*/}
        {/*    <NavLink to="/choose">*/}
        {/*      <GoBack className="gobackicon" />*/}
        {/*    </NavLink>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="row d-flex justify-content-center">
          <div className="col-12 d-flex flex-column align-items-center">
            <p className="headTxt headTxt--location">
              Enter your location information.
            </p>
            <p className="descText">
              If you need help at multiple locations, be sure to add an
              additional address.
            </p>
          </div>
        </div>

        <Map
          onMarkerClick={() => setIsActive(false)}
          active={isActive}
          setIsActive={() => setIsActive(false)}
        />

        <div className="row d-flex justify-content-center">
          <div className="col-md-4  justify-content-center ">
            <div className="loc-input">
              <p className="loc-text">Moving from</p>
              <div
                className={
                  zipCodeFromValid ? "locationInp" : "validation-error"
                }
              >
                <ArrowTop />
                <div className={"w-100"}>
                  <InputMask
                    mask={"99999"}
                    type={"text"}
                    value={value}
                    onChange={(e) => {
                      setValue(e.target.value);
                      setZipCodeFromValid(zipCodeValidation(e.target.value));
                      checkValidation();
                    }}
                    placeholder="Zip code"
                    className={"locationInput"}
                  ></InputMask>
                </div>
              </div>

              <div className={zipCodeFromValid ? "opacity-0" : "opacity-100"}>
                <Validation> Enter a valid zip code </Validation>
              </div>

              {/*{fromList.length > 0 && <ul className="city_list" >*/}
              {/*  {*/}
              {/*    fromList.map((value, index) => (*/}
              {/*      <li*/}
              {/*        onClick={() => {*/}
              {/*          setValue(value.formatted);*/}
              {/*          setFromList([]);*/}
              {/*        }}*/}
              {/*        className="city_item" > {value.formatted} </li>*/}
              {/*    ))*/}
              {/*  }*/}
              {/*</ul>}*/}
            </div>
          </div>
          <div className="col-md-4  justify-content-center">
            <div className="loc-input">
              <p className="loc-text"> Moving to </p>
              <div
                className={zipCodeToValid ? "locationInp" : "validation-error"}
              >
                <ArrowBottom />
                <div className={"w-100"}>
                  <InputMask
                    mask={"99999"}
                    type={"text"}
                    value={value2}
                    onChange={(e) => {
                      setValue2(e.target.value);
                      setZipCodeToValid(zipCodeValidation(e.target.value));
                      checkValidation();
                    }}
                    placeholder="Zip code"
                    className="locationInput"
                  ></InputMask>
                </div>
              </div>
              <div className={zipCodeToValid ? "opacity-0" : "opacity-100"}>
                <Validation> Enter a valid zip code </Validation>
              </div>

              {/*{toList.length > 0 && <ul className="city_list" >*/}
              {/*  {*/}
              {/*    toList.map((value, index) => (*/}
              {/*      <li*/}
              {/*        onClick={() => {*/}
              {/*          setValue2(value.formatted);*/}
              {/*          setToList([]);*/}
              {/*        }}*/}
              {/*        className="city_item" > {value.formatted} </li>*/}
              {/*    ))*/}
              {/*  }*/}
              {/*</ul>}*/}
            </div>
          </div>
          {isActive ? (
            <div className="col-md-4 d-flex justify-content-start align-items-end">
              <button
                className="continue-button-opened"
                onClick={() => setIsActive(false)}
              >
                Continue
              </button>
            </div>
          ) : null}
        </div>
        <div className="row d-flex justify-content-center ">
          {/*{!isActive && <div*/}
          {/*  onClick={() => setIsActive(true)}*/}
          {/*  className="col-md-4 open_whole d-flex justify-content-start align-items-center">*/}
          {/*  <Plus className="plus_minus" />*/}
          {/*  <p className="loc-text-open" > Open the whole map </p>*/}
          {/*</div>*/}
          {/*}*/}

          <div className="col-md-4 d-flex justify-content-start align-items-center"></div>
        </div>

        {!isActive ? (
          <>
            <div className="col-12 back-buttons ">
              <button className="continue-button" onClick={passAddressPage}>
                {" "}
                Continue{" "}
              </button>
            </div>
            <div className="col-12 back-buttons">
              <NavLink to="/choose">
                <button className="back-button"> Back </button>
              </NavLink>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    movingData: state.moving,
  };
}

const mapDispatchToProps = (dispatch) => ({
  movingAction: (moving) => dispatch(movingAction(moving)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnterLocation);
