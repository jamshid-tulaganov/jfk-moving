import React, { useEffect, useState } from "react";
import "./style.css";
import { connect } from "react-redux";
import movingAction from "../../redux/moving/moving.Action";

import { NavLink } from "react-router-dom";
import Calendar from "react-calendar";
import "./Calendar.css";
import { useNavigate } from "react-router-dom";
import Validation from "../../validations/validationText/validation";

function ChooseDate(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const [time, setTime] = useState(props.movingData.dateOfMove);
  const [valid, setValid] = useState(true);

  useEffect(() => {
    let timer = setInterval(() => {
      setWidth(window.innerWidth);
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  let data = props.movingData;
  data.dateOfMove = time;

  let navigate = useNavigate();

  const checkValidationForDate = () => {
    if (time !== null) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const passTimePage = () => {
    if (time !== null) {
      props.movingAction(data);
      navigate("/time");
    } else {
      checkValidationForDate();
    }
  };

  return (
    <div className="choosecontainer">
      <div className="container">
        {/*<div className="row back-arrow">*/}
        {/*  <div className="col-lg-12 d-flex align-items-start">*/}
        {/*    <NavLink to="/form">*/}
        {/*      <GoBack className="gobackicon" />*/}
        {/*    </NavLink>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="row d-flex justify-content-center">
          <div className="col-12 d-flex flex-column align-items-center">
            <p className="headTxt date--header">
              Choose the date of your move.
            </p>
            <p className="descText date--desc ">
              You can reschedule after booking if necessary.
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-12 px-0 col-lg-8 d-flex justify-content-center">
            <div className="calendar-block">
              <Calendar
                onChange={(value) => {
                  setTime(value);
                  setValid(true);
                }}
                locale="en"
                minDate={new Date()}
                className="calendarContainer"
                value={time}
              />
            </div>
          </div>
        </div>
        <div className="date-btn col-12 d-flex justify-content-center flex-column">
          <div
            className={
              !valid
                ? "opacity-100 validation-error__msg"
                : "opacity-0 validation-error__msg"
            }
          >
            <Validation> Please select one !</Validation>
          </div>
          <button
            className="continue-button btn-date__margin"
            onClick={passTimePage}
          >
            Continue
          </button>
        </div>
        <div className="col-12 back-buttons">
          <NavLink to="/form">
            <button className="back-button">Back</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChooseDate);
