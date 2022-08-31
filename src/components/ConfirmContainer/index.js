import React, { useState } from "react";
import "./style.css";
import {connect} from "react-redux";
import Moving from "../../services/movingService";

import { NavLink } from "react-router-dom";
import GoBack from "../../assets/icons/goback";
import Clock from "../../assets/icons/clock";
import Movers from "../../assets/icons/movers";


function ConfirmContainer(props) {

  const time = props.movingData.dateOfMove;

  let Summ = props.movingData.price.split('/')[0];
  let Estimated = props.movingData.price.split('/')[1];
  let movers = props.movingData.movers;
  let hours = props.movingData.hours;

  //format date
  let day = "";
  let hour = "";

  const getTimeValue = () => {
    const arr = [ '8:00 - 9:00', '9:00 - 10:00', '10:00 - 11:00',
      '11:00 - 12:00', '12:00 - 1:00', '1:00 - 3:00', '2:00 - 5:00', '3:00 - 6:00'];
    arr.forEach((el, index) => {
      if(index+1 === props.movingData.time ) {
        hour = (index + 1) > 4 ? arr[index+1].split(' ')[0] + ' PM' : arr[index+1] + ' AM';
      }
    })
  }
  getTimeValue();

  const formatDate = (val) => {
    if(val != null) {
      const mainData =  val.split('T')[0].split('-');
      let time = '';
      const mS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      let month = mainData[1];
      mS.forEach((e,index) => {
        if(index +1 == month) {
          let dayTime = Number(mainData[2]) + 1;
          time = `${e} ${dayTime} `
        }
      } )
      day = time;
    }else {
      day='No day selected'
    }
  }

  formatDate(JSON.stringify(props.movingData.dateOfMove));

  return (
    <div className="choosecontainer">
      <div className="container">
        {/*<div className="row back-arrow">*/}
        {/*  <div className="col-lg-12 d-flex align-items-start">*/}
        {/*    <NavLink to="/calculate">*/}
        {/*      <GoBack className="gobackicon" />*/}
        {/*    </NavLink>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="row d-flex justify-content-center">
          <div className="col-12 d-flex flex-column align-items-center">
            <p className="headTxt headTxt--confirm"> Good news! We're available on {day}.</p>
            <p className="descText descText--time mb-0">
             at {hour}
            </p>
          </div>
        </div>
          <div className="confirm-data d-flex ">
            <div className="confirm-data__column d-flex align-items-center moveCon">
              <p className="textHour">Hours</p>
              <Clock  />
              <p className="countText">{hours}</p>
            </div>
            <div className="confirm-data__column d-flex align-items-center justify-content-evenly moveCon">
              <p className="textHour">Movers</p>
              <Movers />
              <p className="countText">{movers}</p>
            </div>
          </div>


        <div className="row">
          <div className="col-12 resultCon d-flex justify-content-center ">
            <div className="resultCard">
              <p className="headTxtCal mb-0"> ${Summ}</p>
              <p className="descText">Estimated at ${Estimated}</p>
              <div className={"result-info"}> Please pay 50$ deposit fee to activate your booking </div>
            </div>
          </div>
        </div>

        <div className="col-12 confirm-button back-buttons">
          <NavLink to="/payment">
            <button className="continue-button"> Proceed to payment </button>
          </NavLink>
        </div>

        <div className="col-12 back-buttons">
          <NavLink to="/calculate">
            <button className="back-button"> Back </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  return {
    movingData: state.moving
  }
}

export default connect(mapStateToProps)(ConfirmContainer);
