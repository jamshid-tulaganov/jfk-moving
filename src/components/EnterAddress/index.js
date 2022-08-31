import React, { useEffect, useState } from "react";
import "./style.css";
import { connect } from "react-redux";
import movingAction from "../../redux/moving/moving.Action";
import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";
import UserIcon from "../../assets/icons/user";
import PhoneIcon from "../../assets/icons/phone";
import MessageIcon from "../../assets/icons/message";

//validation
import {
  firstNameValidation,
  lastNameValidation,
  emailValidations,
  phoneNumberValidation,
} from "../../validations/adressValidation/validation";
import InputMask from "react-input-mask";
import Validation from "../../validations/validationText/validation";

function EnterAddress(props) {
  let data = props.movingData;
  let navigate = useNavigate();

  const [email, setEmail] = useState(props.movingData.email);
  const [firstName, setFirstName] = useState(props.movingData.firstName);
  const [lastName, setLastName] = useState(props.movingData.lastName);
  const [telNumber, setTelNumber] = useState(props.movingData.phoneNumber);

  //redux data
  data.firstName = firstName;
  data.lastName = lastName;
  data.email = email;
  data.phoneNumber = telNumber;

  //validation state
  const [emailValidate, setEmailValidate] = useState(true);
  const [telValidate, setTelValidate] = useState(true);
  const [fNameValidate, setFNameValidate] = useState(true);
  const [lNameValidate, setLNameValidate] = useState(true);
  const [valid, setValid] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timer = setInterval(() => {
      setWidth(window.innerWidth);
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  //function-continue

  const checkValidationsFormInput = () => {
    if (firstName.length <= 0 || firstName === "" || firstName == null) {
      setFNameValidate(false);
    }
    if (lastName.length < 0 || lastName === "" || lastName == null) {
      setLNameValidate(false);
    }
    if (telNumber.length !== 12) {
      setTelValidate(false);
    }

    if (!emailValidations(email)) {
      setEmailValidate(false);
    }
  };

  const passDatePage = () => {
    if (
      valid ||
      (firstName.length > 0 &&
        lastName.length > 0 &&
        !telNumber.includes("_") &&
        email.includes("@"))
    ) {
      navigate("/date");
    } else {
      checkValidationsFormInput();
    }
  };

  return (
    <div className="choosecontainer">
      <div className="container">
        {width <= 767 ? (
          <div className="row">
            <div className="col-lg-12 d-flex align-items-start"></div>
          </div>
        ) : null}
        <div className="row d-flex justify-content-center">
          <div className="col-12 d-flex flex-column align-items-center">
            <p className="headTxt headTxt--form">
              Tell us a little bit about yourself.
            </p>
            <p className="descText descText--form">
              We must have a way of contacting you about your move.
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center add-input">
          <div className="col-lg-5 col-xl-4 col-md-6  justify-content-center ">
            <div className="input1">
              <p className="loc-text">First name</p>
              <div className={fNameValidate ? "locationInpCon" : "no-validate"}>
                <UserIcon />
                <input
                  value={firstName}
                  placeholder="First name"
                  onChange={(event) => {
                    setFirstName(event.target.value);
                    setFNameValidate(firstNameValidation(event.target.value));
                    if (
                      fNameValidate &&
                      lNameValidate &&
                      emailValidate &&
                      telNumber.length === 12
                    ) {
                      setValid(true);
                    }
                  }}
                  className="form-input"
                />
              </div>
              <div className={fNameValidate ? "opacity-0" : "opacity-100"}>
                <Validation>Enter the valid first name</Validation>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-xl-4 col-md-6  justify-content-center ">
            <div className="input1">
              <p className="loc-text">Last name</p>
              <div className={lNameValidate ? "locationInpCon" : "no-validate"}>
                <UserIcon />
                <input
                  value={lastName}
                  placeholder="Last name"
                  onChange={(event) => {
                    setLastName(event.target.value);
                    setLNameValidate(lastNameValidation(event.target.value));
                    if (
                      fNameValidate &&
                      lNameValidate &&
                      emailValidate &&
                      telNumber.length === 12
                    ) {
                      setValid(true);
                    }
                  }}
                  className="form-input"
                />
              </div>
              <div className={lNameValidate ? "opacity-0" : "opacity-100"}>
                <Validation>Enter the valid last name</Validation>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center add-input">
          <div className="col-lg-5 col-xl-4 col-md-6  justify-content-center">
            <div className="input2">
              <p className="loc-text">Phone number</p>
              <div className={!telValidate ? "no-validate" : "locationInpCon"}>
                <PhoneIcon />
                <InputMask
                  mask="999-999-9999"
                  placeholder="Phone number"
                  type={"tel"}
                  value={telNumber}
                  className="form-input"
                  onChange={(event) => {
                    setTelNumber(event.target.value);
                    setTelValidate(phoneNumberValidation(event.target.value));
                    if (
                      fNameValidate &&
                      lNameValidate &&
                      emailValidate &&
                      telValidate
                    ) {
                      setValid(true);
                    }
                  }}
                ></InputMask>
              </div>
              <div className={!telValidate ? "opacity-100" : "opacity-0"}>
                <Validation>Enter the valid phone number</Validation>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-xl-4 col-md-6  justify-content-center input2">
            <div className="input2">
              <p className="loc-text">Email</p>
              <div className={emailValidate ? "locationInpCon" : "no-validate"}>
                <MessageIcon />
                <input
                  value={email}
                  placeholder="Email"
                  type={"email"}
                  className="form-input"
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setEmailValidate(emailValidations(event.target.value));
                    if (
                      fNameValidate &&
                      lNameValidate &&
                      emailValidate &&
                      telNumber.length === 12
                    ) {
                      setValid(true);
                    }
                  }}
                />
              </div>
              <div className={emailValidate ? "opacity-0" : "opacity-100"}>
                <Validation>Enter the valid email</Validation>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 form-btns back-buttons">
          <button className="continue-button mt-1" onClick={passDatePage}>
            Continue
          </button>
        </div>
        <div className="col-12 back-buttons">
          <NavLink to="/location">
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

export default connect(mapStateToProps, mapDispatchToProps)(EnterAddress);
