import React, { useEffect, useState } from "react";
import "./style.css";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import movingAction from "../../redux/moving/moving.Action";

import { NavLink } from "react-router-dom";
import Plus from "../../assets/icons/plus";
import Clock from "../../assets/icons/clock";
import Minus from "../../assets/icons/minus";
import Movers from "../../assets/icons/movers";
import Moving from "../../services/movingService";
//component
import ModalComponent from "../UI/modal/modal";

const calSumm = (mover, hour, truck, price, truckPrice) => {
  if (truck !== null) {
    return mover * hour * price + truckPrice * hour;
  }
  return mover * hour * price;
};

const calEst = (mover, truck, price, truckPrice) => {
  if (truck !== null) {
    return mover * price + truckPrice;
  }
  return mover * price;
};

function CalculateContainer(props) {
  //  state
  const [modalShow, setModalShow] = useState(false);
  const [movers, setMovers] = useState(props.movingData.movers);
  const [hours, setHours] = useState(props.movingData.hours);
  const [truck, isTruck] = useState(null);
  const [allPrice, setAllPrice] = useState(0);
  const [hourPrice, setHourPrice] = useState(0);

  //service
  const movingService = new Moving();
  const navigate = useNavigate();
  //data
  let resultData = {};
  let time = props.movingData.time;
  let price = props.movingData.price.split("/")[0];
  let date = JSON.stringify(props.movingData.dateOfMove).split('"')[1];

  let data = props.movingData;
  data.movers = movers;
  data.hours = hours;
  data.price = allPrice + "/" + hourPrice;
  //  function
  let elementaryPrice = 0;
  let truckPrice = 0;
  useEffect(async () => {
    const response = await movingService.getPriceMover();
    if (props.movingData.typeOfPackage === 1) {
      elementaryPrice = response.data[1].price;
    } else {
      elementaryPrice = response.data[1].price;
      truckPrice = response.data[0].price;
      isTruck(true);
    }
    calculatePrice();
  });
  const calculatePrice = () => {
    try {
      const allPrice = calSumm(
        movers,
        hours,
        truck,
        elementaryPrice,
        truckPrice
      );
      setAllPrice(allPrice);
      const hourPrice = calEst(movers, truck, elementaryPrice, truckPrice);
      setHourPrice(hourPrice);
    } catch (e) {
      console.log("Error message", e);
    }
  };
  const changeMovers = (type) => {
    if (type === "minus") {
      if (movers > 0) {
        setMovers(movers - 1);
      }
    } else if (type === "plus") {
      setMovers(movers + 1);
    }
    calculatePrice();
  };
  const changeHours = async (type) => {
    if (type === "minus") {
      if (hours > 0) {
        setHours(hours - 1);
      }
    } else if (type === "plus") {
      setHours(hours + 1);
    }
    calculatePrice();
  };
  const prepareData = () => {
    delete props.movingData.time;
    delete props.movingData.MOVING_STATE;
    Object.assign(resultData, props.movingData);
    props.movingData.time = time;
    resultData.price = price;
    resultData.dateOfMove = date;

    return resultData;
  };
  async function passConfirmPage() {
    try {
      const data = prepareData();
      const response = await movingService.postMovingData(data);
      // if( response.data.isServiceAvailable ) {
      //     props.movingData.time = time;
      //     navigate('/confirm');
      // }else {
      //     setModalShow(true);
      // }
      props.movingData.time = time;
      navigate("/confirm");
    } catch (e) {
      console.log(e);
    }
  }

  //  html
  return (
    <>
      <div className="choosecontainer">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 d-flex flex-column align-items-center">
              <p className="headTxt headTxt--calculate">
                Let us know what you need.
              </p>
              <p className="descText">
                For items weighing +200 lbs, please reserve 3 movers. For more
                details on heavy items, refer to our Terms of Service.
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-evenly ">
            <div className="col-lg-4 col-md-5 d-flex align-items-center justify-content-evenly moveCon">
              <p className="textHour">Hours</p>
              <Clock />
              <Minus
                className="plus_minus"
                onClick={() => changeHours("minus")}
              />
              <p className="countText">{hours}</p>
              <Plus
                className="plus_minus"
                onClick={() => changeHours("plus")}
              />
            </div>
            <div className="col-lg-4 col-md-5 d-flex align-items-center justify-content-evenly moveCon">
              <p className="textHour">Movers</p>
              <Movers />
              <Minus
                className="plus_minus"
                onClick={() => changeMovers("minus")}
              />
              <p className="countText">{movers}</p>
              <Plus
                className="plus_minus"
                onClick={() => changeMovers("plus")}
              />
            </div>
          </div>
          <div className="row calculate--row">
            <div className="col-12 d-flex resultCon justify-content-center ">
              <div className="resultCard resultCard--calculate">
                <p className="headTxtCal mb-0">{allPrice}.00$</p>
                <p className="descText mb-0">Estimated at {hourPrice}/hr</p>
              </div>
            </div>
          </div>
          <div className="col-12 back-buttons">
            <button className="continue-button" onClick={passConfirmPage}>
              Continue
            </button>
          </div>

          <div className="col-12 back-buttons">
            <NavLink to="/time">
              <button className="back-button">Back</button>
            </NavLink>
          </div>
        </div>
      </div>
      <ModalComponent
        description={"Hi user"}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    movingData: state.moving,
  };
}

const mapDispatchToProps = (dispatch) => ({
  movingAction: (movingData) => dispatch(movingAction(movingData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculateContainer);
