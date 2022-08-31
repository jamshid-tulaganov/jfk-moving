import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Calendar from "react-calendar";
import {connect} from "react-redux";
import movingAction from "../../redux/moving/moving.Action";

import CalendarIcon from "../../assets/icons/calendar";
import "./styles.css";
import "react-calendar/dist/Calendar.css";
import InputMask from "react-input-mask";
import SelectComponent from "../UI/Select/select";

const Form = ({moving,header, description, isMargin = true}) => {
  //state
  const [showCal, setShowCal] = useState(false);
  const [loadedDate, setLoadedDate] = useState(new Date());
  const [unLoadingDate, setUnLoadingDate] = useState( new Date() );
  const [showDateTwo, setShowDate] = useState(false);

  const typingData = [
    { value: "Needed", label:"Needed" },
    { value: "Helpers Only", label: "Helpers Only"},
    { value: "Helpers and trucks", label: "Helpers and trucks"},
    { value: "Trucks only", label: "Trucks only"}
  ]

  const serviceData = [
    { value: "Residential", label: "Residential"},
    { value: "Commercial", label: "Commercial"},
    { value: "Storage", label: "Storage"}
  ]
  //jsx
  return (
    <section className='form-component'>
      <div className='container'>
		<div className='form-heading justify-content-center'>
			<h1 className="titleText form--titleText text-center">{ header }</h1>
			<p className="getText">{ description }</p>
		</div>
		<Row className='form-con'>
			<Col lg={4} sm={6} className="form-block margin-top-20 d-flex flex-column align-items-start">
			<p className="label">Pick up address</p>
			<InputMask
				mask={'99999'}
				type={'text'}
				placeholder="Zip code"
				className={"input formComponent--input"}
			>
			</InputMask>
			</Col>

			<Col lg={4} sm={6} className="form-block margin-top-20 d-flex flex-column align-items-start">
			<p className="label"> Loading date </p>

			<div className="date-input locationInpCon locationInpCon--form">
				<CalendarIcon />
				<div
					onClick={() => {
						setShowDate((pre) => !pre);
					}}
					className="input formComponent--input__calendar"
				>
					<p className="cal-text">{ loadedDate.toLocaleDateString() }</p>
				</div>
				{showDateTwo && (
					<div className="calendar form-calendar">
					<Calendar
						onChange={(value) => {
							setShowDate(false);
							setLoadedDate(value)
						}}
						minDate={new Date()}
						locale="en"
					/>
					</div>
				)}
			</div>
			</Col>

			<Col lg={4} sm={6} className="form-block margin-top-20 d-flex flex-column align-items-start">
			<p className="label">Type of moving</p>
			<SelectComponent selectData={typingData} />
			</Col>

			<Col lg={4} sm={6} className="form-block margin-top-20 d-flex flex-column align-items-start">
			<p className="label"> Destination </p>
			<InputMask
				mask={'99999'}
				type={'text'}
				placeholder="Zip code"
				className="input formComponent--input"
			>
			</InputMask>
			</Col>
			<Col lg={4} sm={6} className="form-block margin-top-20 d-flex flex-column align-items-start">
			<p className="label margin-top-20 formComponent--input"> Unloading date </p>
				<div className="date-input locationInpCon locationInpCon--form">
				<CalendarIcon />
				<div
					onClick={() => {
						setShowCal((pre) => !pre);
					}}
					className="input formComponent--input__calendar"
				>
					<p className="cal-text">{unLoadingDate.toLocaleDateString()}</p>
				</div>
				{showCal && (
					<div className="calendar form-calendar calendar--unloaded">
					<Calendar
						onChange={(value) => {
							setShowCal(false);
							setUnLoadingDate(value)
						}}
						minDate={new Date()}
						locale="en"
					/>
					</div>
				)}
			</div>
			</Col>
			<Col lg={4} sm={6} className="form-block margin-top-20 d-flex flex-column align-items-start">
			<p className="label">Service needed</p>
			<SelectComponent selectData={serviceData} />
			</Col>
			<Col sm={12} className='form-block d-flex justify-content-center'>
			<button className="button" type="submit">
				Get a quote
			</button>
			</Col>
		</Row>
    </div>
    </section> 
    
  );
};
function mapStateToProps(state, ownProps) {
  return {
    moving: state.moving
  }
}

const mapDispatchToProps = dispatch => ({
  movingAction: moving => dispatch(movingAction(moving))
})


export default connect(mapStateToProps, mapDispatchToProps)(Form);
