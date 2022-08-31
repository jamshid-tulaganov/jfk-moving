import React, {useState} from 'react';
import "./styles.css";
import {connect} from "react-redux";
import { NavLink } from "react-router-dom";
import UserIcon from "../../assets/icons/user";
import PhoneIcon from "../../assets/icons/phone";
import GoBack from '../../assets/icons/goback';
import InputMask from "react-input-mask";
import movingAction from "../../redux/moving/moving.Action";
import Validation from "../../validations/validationText/validation";
import { phoneNumberValidation } from "../../validations/adressValidation/validation";
import {nameValidation} from "../../validations/paymentValidations/paymentValidation";
import {useNavigate} from "react-router-dom";

function EmploymentFormCon(props) {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState(props.employmentData.firstName);
    const [lastName, setLastName] = useState(props.employmentData.lastName);
    const [phoneOne, setPhoneOne]  = useState(props.employmentData.personalNumberFirst);
    const [phoneTwo, setPhoneTwo] = useState(props.employmentData.personalNumberSecond);
    const [errorPhoneValidationMsg, setErrMsg] = useState('Enter the valid second phone number');

    let data = props.employmentData;
    data.firstName = firstName;
    data.lastName = lastName;
    data.personalNumberFirst = phoneOne;
    data.personalNumberSecond = phoneTwo;
    //validation state
    const [telOnelValidate, setTelOneValidate] = useState(true);
    const [telValidate, setTelValidate] = useState(true);
    const [fNameValidate, setFNameValidate] = useState(true);
    const [lNameValidate, setLNameValidate] = useState(true);
    const [valid, setValid] = useState(false);


    const checkValidation = () => {
        if(firstName.length <= 0 || firstName === "" || firstName == null) {
            setFNameValidate(false);
        }
        if( lastName.length < 0 || lastName === "" || lastName == null)  {
            setLNameValidate(false);
        }
        if(phoneOne.length !== 12 ) {
            setTelOneValidate(false);
        }

        if(phoneTwo.length !== 12 ) {
            setTelValidate(false);
        }
    }
    const checkPhoneNumber = () => {
        if(phoneOne === phoneTwo) {
            setErrMsg('Your second number is similar phone number');
            setValid(false);
            setTelValidate(false);
        }
    }
    const checkAllValidationInput = () => {
        if( firstName.length > 0 && lastName.length > 0 && phoneTwo.length === 12 && phoneOne.length === 12 && phoneTwo !== phoneOne) {
            setValid(true);
        }
    }

    const nextComponentPass = () => {

        if(valid) {
            if(phoneTwo !== phoneOne) {
                props.employmentAction(data)
                navigate('/employmentfile')
            }else {
                return checkPhoneNumber();
            }
        }
            return checkValidation();
    }
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
                        <p className="headTxt">Employment Opportunites</p>
                        <p className="descText">
                            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from
                        </p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center add-input">
                    <div className="col-lg-5 col-xl-4 col-md-6  justify-content-center ">
                        <div className="input1" >
                            <p className="loc-text">First name</p>
                            <div className={fNameValidate ? "formInpCon" : "no-validate"}>
                                <UserIcon />
                                <input
                                    placeholder="First name"
                                    className="form-input"
                                    onChange={event => {
                                        setFirstName(event.target.value);
                                        setFNameValidate(nameValidation(event.target.value));
                                        checkAllValidationInput();
                                    }}
                                />
                            </div>
                            <div className={fNameValidate ? 'opacity-0' : 'opacity-100'}>
                                <Validation>Enter the valid firstname</Validation>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-xl-4 col-md-6  justify-content-center ">
                        <div className="input1" >
                            <p className="loc-text">Last name</p>
                            <div className={lNameValidate ? "formInpCon" : "no-validate"}>
                                <UserIcon />
                                <input placeholder="Last name"
                                       className="form-input"
                                       onChange={event => {
                                           setLastName(event.target.value);
                                           setLNameValidate(nameValidation(event.target.value));
                                           checkAllValidationInput();
                                       }}
                                />
                            </div>
                            <div className={lNameValidate ? 'opacity-0' : 'opacity-100'}>
                                <Validation>Enter valid the lastname</Validation>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center add-input">
                    <div className="col-lg-5 col-xl-4 col-md-6  justify-content-center">
                        <div className="input2" >
                            <p className="loc-text">Phone number</p>
                            <div className={telOnelValidate ? "formInpCon" : "no-validate"}>
                                <PhoneIcon />
                                <InputMask
                                    mask={'999-999-9999'}
                                    placeholder="Phone number"
                                    type={"Your number"}
                                    className="form-input"
                                    onChange={e => {
                                        setPhoneOne(e.target.value);
                                        setTelOneValidate(phoneNumberValidation(e.target.value));
                                        checkAllValidationInput();
                                    }}
                                >
                                </InputMask>
                            </div>
                            <div className={telOnelValidate ? 'opacity-0' : 'opacity-100'}>
                                <Validation>Enter the valid first phone number</Validation>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-xl-4 col-md-6  justify-content-center input2">
                        <div className="input2" >
                            <p className="loc-text">Second number</p>
                            <div className={telValidate ? "formInpCon" : "no-validate"}>
                                <PhoneIcon />
                                <InputMask
                                    mask={'999-999-9999'}
                                    placeholder="Phone number"
                                    type={"Your number"}
                                    className="form-input"
                                    onChange={e => {
                                        setPhoneTwo(e.target.value);
                                        setTelValidate(phoneNumberValidation(e.target.value));
                                        checkAllValidationInput();
                                    }}
                                >
                                </InputMask>
                            </div>
                            <div className={telValidate ? 'opacity-0' : 'opacity-100'}>
                                <Validation> {errorPhoneValidationMsg}</Validation>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 back-buttons employment--btn">
                    <button className="continue-button" onClick={nextComponentPass}>Continue</button>
                </div>
            </div>
        </div >
    )
}

function mapStateToProps(state) {
    return {
        employmentData: state.employment
    }
}

const mapDispatchToProps = dispatch => ({
    employmentAction: employmentData => dispatch(movingAction(employmentData))
})

export default connect(mapStateToProps, mapDispatchToProps)(EmploymentFormCon);