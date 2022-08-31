import React, { useState } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Message from "../../assets/icons/message";
import GoBack from "../../assets/icons/goback";
import YourCity from "../../assets/icons/YourCity";
import ZipCode from "../../assets/icons/ZipCode";
import YourState from "../../assets/icons/YourState";
import Address from "../../assets/icons/Address";
import movingAction from "../../redux/moving/moving.Action";
import { useNavigate } from "react-router-dom";
import { emailValidations } from "../../validations/adressValidation/validation";
import Validation from "../../validations/validationText/validation";
import { nameValidation } from "../../validations/paymentValidations/paymentValidation";
import InputMask from "react-input-mask";
import { zipCodeValidation } from "../../validations/zipCodeValidation";

function EmploymentFileCon(props) {
  const [emailValid, setEmailValid] = useState(true);
  const [stateValid, setStateValid] = useState(true);
  const [zipValid, setZipValid] = useState(true);
  const [addressValid, setAddressValid] = useState(true);
  const [cityValid, setCityValid] = useState(true);
  const [valid, setValid] = useState(false);

  const navigate = useNavigate();

  const checkValid = () => {
    if (!props.employmentData.email.includes("@")) {
      setEmailValid(false);
    }
    if (
      props.employmentData.zipCode.includes("_") ||
      props.employmentData.zipCode.length === 0
    ) {
      setZipValid(false);
    }
    if (props.employmentData.address.length === 0) {
      setAddressValid(false);
    }
    if (props.employmentData.city.length === 0) {
      setCityValid(false);
    }
    if (props.employmentData.state.length === 0) {
      setStateValid(false);
    }
  };

  const validAllFunc = () => {
    console.log(props.employmentData.address.length);
    if (
      props.employmentData.email.includes("@") &&
      !props.employmentData.zipCode.includes("_") &&
      props.employmentData.address.length > 0 &&
      props.employmentData.city.length > 0 &&
      props.employmentData.state.length > 0
    ) {
      setValid(true);
    }
  };

  const nextComponent = () => {
    if (valid) {
      navigate("/employmentdoc");
    }
    return checkValid();
  };
  //jsx
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

        <div className="row d-flex justify-content-center">
          <div className="col-12 d-flex flex-column align-items-center">
            <p className="headTxt">Employment Opportunities</p>
            <p className="descText">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classical Latin literature from
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-between add-input-file">
          <div className="col-lg-6 justify-content-center column--inp ">
            <div className="input1">
              <p className="loc-text">Email</p>
              <div className={emailValid ? "positionInpCon" : "no-validate"}>
                <Message />
                <input
                  placeholder="Your email"
                  className="form-input"
                  onChange={(e) => {
                    setEmailValid(emailValidations(e.target.value));
                    props.employmentAction(
                      (props.employmentData.email = e.target.value)
                    );
                    validAllFunc();
                  }}
                />
              </div>
              <div className={emailValid ? "opacity-0" : "opacity-100"}>
                <Validation>Enter the valid email</Validation>
              </div>
            </div>
          </div>
          <div className="col-lg-6 justify-content-center ">
            <div className="input1">
              <p className="loc-text">Address</p>
              <div className={addressValid ? "positionInpCon" : "no-validate"}>
                <Address />
                <input
                  placeholder="Your address"
                  className="form-input"
                  onChange={(e) => {
                    setAddressValid(nameValidation(e.target.value));
                    props.employmentAction(
                      (props.employmentData.address = e.target.value)
                    );
                    validAllFunc();
                  }}
                />
              </div>
              <div className={addressValid ? "opacity-0" : "opacity-100"}>
                <Validation>Enter the valid address </Validation>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between add-input-file">
          <div className="col-xl-4 col-md-6  justify-content-center input2">
            <div className="input2">
              <p className="loc-text">State</p>
              <div className={stateValid ? "positionInpCon" : "no-validate"}>
                <YourState />
                <input
                  placeholder="Your state"
                  type={"text"}
                  className="form-input inp--width"
                  onChange={(e) => {
                    setStateValid(nameValidation(e.target.value));
                    props.employmentAction(
                      (props.employmentData.state = e.target.value)
                    );
                    validAllFunc();
                  }}
                />
              </div>
              <div className={stateValid ? "opacity-0" : "opacity-100"}>
                <Validation>Enter the valid state </Validation>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6  justify-content-center">
            <div className="input2">
              <p className="loc-text">Zip code</p>
              <div className={zipValid ? "positionInpCon" : "no-validate"}>
                <ZipCode />
                <InputMask
                  mask={"99999"}
                  placeholder="Zip code"
                  type={"tel"}
                  className="form-input inp--width"
                  onChange={(e) => {
                    setZipValid(zipCodeValidation(e.target.value));
                    props.employmentAction(
                      (props.employmentData.zipCode = e.target.value)
                    );
                    validAllFunc();
                  }}
                ></InputMask>
              </div>
              <div className={zipValid ? "opacity-0" : "opacity-100"}>
                <Validation>Enter the valid zip code </Validation>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6  justify-content-center">
            <div className="input2">
              <p className="loc-text">City</p>
              <div className={cityValid ? "positionInpCon" : "no-validate"}>
                <YourCity />
                <input
                  placeholder="City"
                  type={"tel"}
                  className="form-input inp--width"
                  onChange={(e) => {
                    setCityValid(nameValidation(e.target.value));
                    props.employmentAction(
                      (props.employmentData.city = e.target.value)
                    );
                    validAllFunc();
                  }}
                />
              </div>
              <div className={cityValid ? "opacity-0" : "opacity-100"}>
                <Validation>Enter the valid city </Validation>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 back-buttons employment--btn">
          <button className="continue-button" onClick={nextComponent}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    employmentData: state.employment,
  };
}

const mapDispatchToProps = (dispatch) => ({
  employmentAction: (employmentData) => dispatch(movingAction(employmentData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmploymentFileCon);
