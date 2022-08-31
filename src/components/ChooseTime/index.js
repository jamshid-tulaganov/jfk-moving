import React, { useState } from "react";
import "./style.css";
import { connect } from "react-redux";
import movingAction from "../../redux/moving/moving.Action";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Validation from "../../validations/validationText/validation";

function ChooseTime(props) {
  const [time, setTime] = useState(props.movingData.time);
  const [valid, setValid] = useState(false);
  let data = props.movingData;
  data.time = time;

  let navigate = useNavigate();
  let day = "";

  function formatDate(val) {
    let time = "";
    if (val !== null) {
      let mainData = val.split("T")[0].split("-");
      const mS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let month = mainData[1];
      mS.forEach((e, index) => {
        if (index + 1 == month) {
          let dayTime = Number(mainData[2]) + 1;
          time = `${e} ${dayTime}`;
        }
      });
      day = time;
    } else {
      day = "No day selected";
    }
  }
  formatDate(JSON.stringify(data.dateOfMove));

  const checkValidationForTime = () => {
    if (time === "") setValid(true);
  };

  const passCalculatePage = () => {
    if (time !== "") {
      props.movingAction(data);
      navigate("/calculate");
    } else {
      checkValidationForTime();
    }
  };

  return (
    <div className="choosecontainer">
      <div className="container">
        {/*<div className="row back-arrow">*/}
        {/*  <div className="col-lg-12 d-flex align-items-start">*/}
        {/*    <NavLink to="/date">*/}
        {/*      <GoBack className="gobackicon" />*/}
        {/*    </NavLink>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="row d-flex justify-content-center">
          <div className="col-12 d-flex flex-column align-items-center">
            <p className="headTxt headTxt--margin">
              Select the time you want your move to begin on {day} .
            </p>
            <p className="descText desc--margin">
              Pick a time that's best for your schedule.
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center ">
          <div className="col-lg-8 col-sm-12 d-flex justify-content-start ">
            <p className="date_title">Morning show up</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-2 col-sm-6 col-6 d-flex justify-content-center ">
            <button
              className={time !== 1 ? "time_button" : "time_button_active"}
              onClick={() => {
                setTime(1);
                setValid(false);
              }}
            >
              8:00 - 9:00
            </button>
          </div>
          <div className="col-lg-2 col-sm-6 col-6 d-flex justify-content-center ">
            <button
              className={time !== 2 ? "time_button" : "time_button_active"}
              onClick={() => {
                setTime(2);
                setValid(false);
              }}
            >
              9:00 - 10:00
            </button>
          </div>
          <div className="col-lg-2 col-sm-6 col-6 d-flex justify-content-center ">
            <button
              className={time !== 3 ? "time_button" : "time_button_active"}
              onClick={() => {
                setTime(3);
                setValid(false);
              }}
            >
              10:00 - 11:00
            </button>
          </div>
          <div className="col-lg-2 col-sm-6 col-6 d-flex justify-content-center ">
            <button
              className={time !== 4 ? "time_button" : "time_button_active"}
              onClick={() => {
                setTime(4);
                setValid(false);
              }}
            >
              11:00 - 12:00
            </button>
          </div>
        </div>
        <div className="row d-flex justify-content-center ">
          <div className="col-lg-8 col-sm-12 d-flex justify-content-start ">
            <p className="date_title">Afternoon show up</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-2 col-sm-6 col-6 d-flex justify-content-center ">
            <button
              className={time !== 5 ? "time_button" : "time_button_active"}
              onClick={() => {
                setTime(5);
                setValid(false);
              }}
            >
              12:00 - 1:00
            </button>
          </div>
          <div className="col-lg-2 col-sm-6 col-6 d-flex justify-content-center ">
            <button
              className={time !== 6 ? "time_button" : "time_button_active"}
              onClick={() => {
                setTime(6);
                setValid(false);
              }}
            >
              1:00 - 3:00
            </button>
          </div>
          <div className="col-lg-2 col-sm-6 col-6 d-flex justify-content-center ">
            <button
              className={time !== 7 ? "time_button" : "time_button_active"}
              onClick={() => {
                setTime(7);
                setValid(false);
              }}
            >
              2:00 - 5:00
            </button>
          </div>
          <div className="col-lg-2 col-sm-6 col-6 d-flex justify-content-center ">
            <button
              className={time !== 8 ? "time_button" : "time_button_active"}
              onClick={() => {
                setTime(8);
                setValid(false);
              }}
            >
              3:00 - 6:00
            </button>
          </div>
        </div>

        <div className="col-12 back-buttons flex-column">
          <div
            className={
              !valid
                ? "opacity-0 validation-error__msg"
                : "opacity-100 validation-error__msg"
            }
          >
            <Validation> Please select one !</Validation>
          </div>
          <button
            className="continue-button btn--date"
            onClick={passCalculatePage}
          >
            Continue
          </button>
        </div>

        <div className="col-12 back-buttons">
          <NavLink to="/date">
            <button className="back-button"> Back </button>
          </NavLink>
        </div>
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
  movingAction: (movingData) => dispatch(movingAction(movingData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseTime);
