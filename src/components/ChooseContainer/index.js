import React, { useState } from "react";
import { connect } from "react-redux";
import movingAction from "../../redux/moving/moving.Action";
import "./style.css";
import Validation from "../../validations/validationText/validation";

import move4 from "../../assets/images/move4.png";
import move5 from "../../assets/images/move5.png";
import { useNavigate } from "react-router-dom";

function ChooseContainer(props) {
  const [active, setActive] = useState(props.movingData.typeOfPackage);
  const [valid, setValid] = useState(true);
  const data = props.movingData;
  data.typeOfPackage = active;

  let navigate = useNavigate();

  const checkValidBoxContainer = () => {
    if (active === 0) {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  const passLocationPage = () => {
    if (active !== 0) {
      navigate("/location");
    } else {
      checkValidBoxContainer();
    }
  };

  return (
    <div className="choosecontainer container--padding">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 d-flex flex-column align-items-center">
            <p className="headTxt headTxt--container">
              Choose what you need and book a move online.
            </p>
            <p className="descText">
              From state to state, JFK Moving Co will fully support you every
              step of the way.
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center ">
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div
              onClick={() => {
                setActive(1);
                setValid(true);
                props.movingAction(data);
              }}
              className={
                active === 1
                  ? "chooseBox activeCard mobile--margin"
                  : "chooseBox mobile--margin"
              }
            >
              <div className="chooseTextBox">
                <h5 className="miniTitleText">Movers only</h5>
                <p className="miniDescText">
                  Package includes a team of movers
                </p>
              </div>
              <img src={move4} className="chooseImage" alt="moving" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div
              onClick={() => {
                setActive(2);
                setValid(true);
                props.movingAction(data);
              }}
              className={active === 2 ? "chooseBox activeCard" : "chooseBox"}
            >
              <div className="chooseTextBox">
                <h5 className="miniTitleText">Truck and Movers</h5>
                <p className="miniDescText">
                  Package includes a team of movers
                </p>
              </div>
              <img src={move5} className="chooseImage" alt="moving" />
            </div>
          </div>
        </div>

        <div className="form__buttons d-flex flex-column align-items-center justify-content-center">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
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
              className="continue-button btn--margin"
              onClick={passLocationPage}
            >
              {" "}
              Continue{" "}
            </button>
          </div>
          <div className="col-12 back-buttons">
            <button className="back-button" onClick={() => navigate(-1)}>
              {" "}
              Back{" "}
            </button>
          </div>
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
  movingAction: (moving) => dispatch(movingAction(moving)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseContainer);
