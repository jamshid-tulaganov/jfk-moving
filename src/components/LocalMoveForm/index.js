import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Calendar from "react-calendar";
import CalendarIcon from "../../assets/icons/calendar";
import "./styles.css";
import "react-calendar/dist/Calendar.css";

const Form = ({ header, description }) => {
  const [value, setValue] = useState(new Date());
  const [showCal, setShowCal] = useState(false);

  return (
    <section className="local-form">
      <div className="container">
        <div className="localMoving justify-content-center text-center">
          <h1 className="localMoving-header"> {header} </h1>
          <p className="localMoving__description text-center"> {description}</p>
        </div>
        <Row className="form-con">
          <Col
            sm={6}
            className="form-con__block margin-top-20 d-flex flex-column align-items-start"
          >
            <p className="label"> Moving from </p>
            <input className="input" type="text" placeholder="Zip code" />
          </Col>
          <Col
            sm={6}
            className="form-con__block margin-top-20 d-flex flex-column align-items-start"
          >
            <p className="label"> Moving to </p>
            <input className="input" type="text" placeholder="Zip code" />
          </Col>
          <Col
            sm={6}
            className="form-con__block margin-top-20 d-flex flex-column align-items-start"
          >
            <p className="label"> Moving size </p>
            <input className="input" type="text" placeholder="2-3 bedroom" />
          </Col>
          <Col
            sm={6}
            className="form-con__block margin-top-20 d-flex flex-column align-items-start"
          >
            <p className="label margin-top-20"> Move date </p>
            <div className="date-input">
              <div
                onClick={() => {
                  setShowCal((pr) => !pr);
                }}
                className="input"
              >
                <p className="cal-text"> {value.toLocaleDateString()} </p>
                <CalendarIcon />
              </div>
              {showCal && (
                <div className="calendar local--calendar">
                  <Calendar
                    onChange={(value) => {
                      setShowCal(false);
                      setValue(value);
                    }}
                    minDate={new Date()}
                    locale="en"
                    value={value}
                  />
                </div>
              )}
            </div>
          </Col>
          <Col sm={6} md={12} lg={12} className="form-con__block form-con__btn">
            <button className="button" type="submit">
              Get moving
            </button>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Form;
