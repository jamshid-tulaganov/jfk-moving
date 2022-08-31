import React, { useState } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { useAlert } from "react-alert";
//mask
import InputMask from "react-input-mask";
import PaymentService from "../../services/paymentService";

import Visa from "../../assets/icons/Visa";
import Paypal from "../../assets/icons/Paypal";
import VisaDisabled from "../../assets/icons/VisaDisabled";
import PaypalDisabled from "../../assets/icons/PaypalDisabled";
import VisaLogo from "../../assets/icons/VisaLogo";
import PaypalLogo from "../../assets/icons/PaypalLogo";
import Eye from "../../assets/icons/Eye";
import NonePrice from "../../assets/icons/NonePrice";
import Validation from "../../validations/validationText/validation";
import { useNavigate } from "react-router-dom";
import {
  cardNumberValidation,
  nameValidation,
  dateValidation,
  passwordValidation,
} from "../../validations/paymentValidations/paymentValidation";

function PaymentCon(props) {
  const [pay, setPay] = useState(2);
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  //validation
  const [cardNumberValid, setCardNumberValid] = useState(true);
  const [dateValid, setDateValid] = useState(true);
  const [passValid, setPassValid] = useState(true);
  const [nameValid, setNameValid] = useState(true);
  const [validAll, setValidAll] = useState(false);
  const [cardErrorMessage, setErrorMessage] = useState("");

  let day = "";
  let hour = "";
  let navigate = useNavigate();
  let alert = useAlert();

  const getTimeValue = () => {
    const arr = [
      "8:00 - 9:00",
      "9:00 - 10:00",
      "10:00 - 11:00",
      "11:00 - 12:00",
      "12:00 - 1:00",
      "1:00 - 3:00",
      "2:00 - 5:00",
      "3:00 - 6:00",
    ];
    arr.forEach((el, index) => {
      if (index + 1 == props.moving.time) {
        hour =
          index + 1 > 4
            ? arr[index + 1].split(" ")[0] + " PM"
            : arr[index + 1] + " AM";
      }
    });
  };
  getTimeValue();

  const formatDate = (val) => {
    if (val != null) {
      const mainData = val.split("T")[0].split("-");
      let time = "";
      const mS = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];
      let month = mainData[1];
      mS.forEach((e, index) => {
        if (index + 1 == month) {
          let dayTime = Number(mainData[2]) + 1;
          time = `${dayTime} ${e}`;
        }
      });
      day = time;
    } else {
      day = "no day selected";
    }
  };

  formatDate(JSON.stringify(props.moving.dateOfMove));

  async function sendPayData() {
    const service = new PaymentService();
    //pay data
    let month = date.split("/")[0];
    let year = date.split("/")[1];
    const data = {
      cardNumber: cardNumber,
      expirationYear: Number(year),
      expirationMonth: Number(month),
      cvc: password,
      value: 50,
    };
    try {
      const response = await service.post(data);
      if (response.data.isSuccessfull) {
        navigate("/congrats");
      } else {
        alert.error("Please enter the valid card number");
      }
    } catch (e) {
      alert.error(e.response.data.message);
      setCardNumberValid(false);
    }
  }

  //next page

  const checkValidAllInputs = () => {
    if (cardNumber.length <= 0) {
      setCardNumberValid(false);
    }
    if (name.length <= 0) {
      setNameValid(false);
    }
    if (date.length <= 0) {
      setDateValid(false);
    }
    if (password.length <= 0) {
      setPassValid(false);
    }
  };

  //link
  let link = `https://jfkmoving.techcells.one/PaypalV2Demo/Index?price=50`;

  async function passCongratulationsPage() {
    try {
      if (validAll) {
        const res = await sendPayData();
        console.log(res.message, res);
        setErrorMessage(res.message);
        navigate("/congrats");
      } else {
        checkValidAllInputs();
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="paymentcontainer">
      <div className="container">
        {/*<div className="row back-arrow">*/}
        {/*    <div className="col-lg-12 d-flex align-items-start">*/}
        {/*        <NavLink to="/calculate">*/}
        {/*            <GoBack className="gobackicon" />*/}
        {/*        </NavLink>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <div className="row d-flex justify-content-center">
          <div className="col-12 d-flex flex-column align-items-center">
            <p className="headTxt">Enter payment information</p>
          </div>
        </div>
        <div className={"row d-flex"}>
          <div className="payment-column col-lg-6 d-flex justify-content-center">
            <div className="form_column payment-form">
              <div className="payment_logos_con">
                {pay === 2 && <Visa onClick={() => {}} />}
                {pay === 1 && (
                  <VisaDisabled
                    className="visa"
                    onClick={() => {
                      setPay(2);
                    }}
                  />
                )}
                {pay === 1 && <Paypal className="paypal" onClick={() => {}} />}
                {pay === 2 && (
                  <a href={link} target={"_blank"}>
                    <PaypalDisabled
                      className="paypal"
                      onClick={() => {
                        setPay(1);
                      }}
                    />
                  </a>
                )}
              </div>
              {/* form element*/}
              <div className={pay === 1 ? "d-none" : "d-block"}>
                <div className="para">
                  <p className="credit_title">Credit card</p>
                  <div
                    className={
                      cardNumberValid
                        ? "pay_input_con "
                        : "pay_input_con pay__validate--error "
                    }
                  >
                    <InputMask
                      value={cardNumber}
                      mask={"9999 9999 9999 9999"}
                      className={"pay_form_input"}
                      type={"text"}
                      placeholder="1234 5678 9876 5432"
                      onChange={(e) => {
                        setCardNumber(e.target.value);
                        setCardNumberValid(
                          cardNumberValidation(e.target.value)
                        );
                        if (
                          !cardNumber.includes("_") &&
                          name.length > 0 &&
                          !date.includes("_") &&
                          !password.includes("_")
                        ) {
                          setValidAll(true);
                        }
                      }}
                    ></InputMask>

                    {pay === 2 && <VisaLogo />}
                    {pay === 1 && <PaypalLogo />}
                  </div>

                  <div
                    className={cardNumberValid ? "opacity-0 " : "opacity-100 "}
                  >
                    <Validation>
                      {" "}
                      {cardErrorMessage !== ""
                        ? cardErrorMessage
                        : "Please enter valid the card number"}
                    </Validation>
                  </div>
                </div>
                <div className="para">
                  <p className="credit_title">Name</p>
                  <div
                    className={
                      nameValid
                        ? "pay_input_con "
                        : "pay_input_con pay__validate--error "
                    }
                  >
                    <input
                      placeholder="Abrorbek Ibrokhimov"
                      className="pay_form_input"
                      onChange={(e) => {
                        setName(e.target.value);
                        setNameValid(nameValidation(e.target.value));
                        if (
                          !cardNumber.includes("_") &&
                          name.length > 0 &&
                          !date.includes("_") &&
                          !password.includes("_")
                        ) {
                          setValidAll(true);
                        }
                      }}
                    />
                  </div>

                  <div className={nameValid ? "opacity-0 " : "opacity-100 "}>
                    <Validation> Please enter the name </Validation>
                  </div>
                </div>
                <div className="expiration">
                  <div className="para_expiration">
                    <p className="credit_title">Expiration date</p>
                    <div
                      className={
                        dateValid
                          ? "pay_input_con "
                          : "pay_input_con pay__validate--error "
                      }
                    >
                      <InputMask
                        mask={"99/99"}
                        value={date}
                        placeholder="MM/YY"
                        onChange={(e) => {
                          setDate(e.target.value);
                          setDateValid(dateValidation(e.target.value));
                          if (
                            !cardNumber.includes("_") &&
                            name.length > 0 &&
                            !date.includes("_") &&
                            !password.includes("_")
                          ) {
                            setValidAll(true);
                          }
                        }}
                        className="pay_form_input"
                      ></InputMask>
                    </div>

                    <div className={dateValid ? "opacity-0 " : "opacity-100 "}>
                      <Validation> Enter the valid date </Validation>
                    </div>
                  </div>
                  <div className="para_expiration">
                    <p className="credit_title">CVV</p>
                    <div
                      className={
                        passValid
                          ? "pay_input_con "
                          : "pay_input_con pay__validate--error"
                      }
                    >
                      <InputMask
                        value={password}
                        mask={"999"}
                        placeholder="123"
                        type={"text"}
                        className="pay_form_input"
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setPassValid(passwordValidation(e.target.value));
                          if (
                            !cardNumber.includes("_") &&
                            name.length > 0 &&
                            !date.includes("_") &&
                            !password.includes("_")
                          ) {
                            setValidAll(true);
                          }
                        }}
                      ></InputMask>
                      <Eye className="eye_payment" />
                    </div>
                    <div className={passValid ? "opacity-0 " : "opacity-100 "}>
                      <Validation> Enter the valid cvv number </Validation>
                    </div>
                  </div>
                </div>
                <div className="row expirationd_check d-flex">
                  <div className="col-12 col-sm-6 checkbox_con">
                    <label className={"d-flex align-items-center"}>
                      <input type={"checkbox"} className="input_check" />
                      <p className="save_card_text">Save Card</p>
                    </label>
                  </div>
                  <button
                    className="col-12 col-sm-6 payment_button ms-auto"
                    onClick={passCongratulationsPage}
                  >
                    {" "}
                    Pay{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="payment-column col-lg-6 d-flex justify-content-center">
            <div className="price_column">
              <div className="total_con">
                <div className="none_price_con">
                  <NonePrice className="none_price" />
                </div>
                <div className="price_col">
                  <p className="total_price">Total price</p>
                  <h4 className="total_price_value total_price--weight">
                    ${props.moving.price.split("/")[0]}.00
                  </h4>
                </div>
              </div>
              <div className="price_line">
                <p className="price_pre">Moving date:</p>
                <p className="price_post">on {day}</p>
              </div>
              <div className="price_line">
                <p className="price_pre">Moving time:</p>
                <p className="price_post text-lowercase">at {hour}</p>
              </div>
              <div className="price_line">
                <p className="price_pre">During:</p>
                <p className="price_post"> {props.moving.hours} hours</p>
              </div>
              <div className="price_line">
                <p className="price_pre">Workers:</p>
                <p className="price_post">{props.moving.movers} movers</p>
              </div>
              <div className="hr_line"> </div>
              <div className="price_line">
                <p className="price_pre">Estimated price:</p>
                <p className="price_post">
                  {props.moving.price.split("/")[1]}$ an hour
                </p>
              </div>
              <div className="hr_line"> </div>
              <div className="price_line">
                <p className="price_pre">Total price:</p>
                <p className="price_post_main">
                  $ {props.moving.price.split("/")[0]}.00
                </p>
              </div>
              <div className="price_line">
                <p className="price_pre">Due now:</p>
                <p className="price_post_main">$ 50.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    moving: state.moving,
  };
}

export default connect(mapStateToProps)(PaymentCon);
