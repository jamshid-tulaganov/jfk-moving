import React from "react";
import "./claim-mail.style.css";
import {useState} from "react";
import {Modal} from "react-bootstrap";
import {Row, Col} from "react-bootstrap";
import UserIcon from "../../../assets/icons/user";
import {
    emailValidations,
    firstNameValidation,
    phoneNumberValidation
} from "../../../validations/adressValidation/validation";
import Validation from "../../../validations/validationText/validation";
import PhoneIcon from "../../../assets/icons/phone";
import InputMask from "react-input-mask";
import MessageIcon from "../../../assets/icons/message";
import MessageOpen from "../../../assets/icons/messageopen";
import {nameValidation} from "../../../validations/paymentValidations/paymentValidation";

function ClaimMailComponent(props) {
    //state

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState( '');
    const [telNumber, setTelNumber] = useState('');
    const [message, setMessage] = useState('');

    //validations
    const [emailValidate, setEmailValidate] = useState(true);
    const [telValidate, setTelValidate] = useState(true);
    const [fNameValidate, setFNameValidate] = useState(true);
    const [valid, setValid] = useState(false);
    const [messageValid, setMessageValid] = useState(true);

    const [isOpen, setOpen] = useState(props.show);

    return (
        <>
            <div className="container">

                <Modal
                    show={isOpen}
                    onHide={() => { setOpen(false); props.changeModal(false)}}
                    dialogClassName="modal-95w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Mail Us
                        </Modal.Title>
                        <div className={'d-flex align-items-center justify-content-end'}>
                            <button className="btn-close" onClick={() => { setOpen(false); props.changeModal(false)}}>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="non   e" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.5078 0C10.1051 0 0 10.0897 0 22.4922C0 34.8949 10.1051 45 22.5078 45C34.9105 45 45 34.8949 45 22.4922C45 10.0895 34.9103 0 22.5078 0ZM22.5078 3.9779C32.7606 3.9779 41.0221 12.2389 41.0221 22.4922C41.0221 32.7449 32.7606 41.0221 22.5078 41.0221C12.2551 41.0221 3.9779 32.7455 3.9779 22.4922C3.9779 12.2389 12.2551 3.9779 22.5078 3.9779ZM14.5791 12.5824C14.0497 12.5824 13.5425 12.7938 13.169 13.169C12.3976 13.9448 12.3976 15.1978 13.169 15.9737L19.6913 22.496L13.169 29.0105C12.7939 29.384 12.583 29.8912 12.583 30.4207C12.583 30.9501 12.7939 31.4573 13.169 31.8308C13.5419 32.2048 14.0486 32.4152 14.5769 32.4152C15.1058 32.4152 15.6125 32.2048 15.9854 31.8308L22.5039 25.3085L29.0262 31.8308C29.8021 32.6022 31.0551 32.6022 31.8309 31.8308C32.2061 31.4573 32.417 30.9501 32.417 30.4207C32.417 29.8912 32.2061 29.384 31.8309 29.0105L25.3124 22.496L31.8309 15.9737C32.6023 15.1979 32.6023 13.9448 31.8309 13.169C31.4575 12.7938 30.9502 12.5824 30.4208 12.5824C29.8969 12.5868 29.3958 12.7971 29.0262 13.169L22.5039 19.6835L15.9854 13.169C15.613 12.7944 15.1069 12.5835 14.5791 12.5824H14.5791Z" fill="#447E7F"/>
                                </svg>
                            </button>
                        </div>

                    </Modal.Header>
                    <Modal.Body className='mail--modal'>
                        <Row>
                            <Col sm={12} md={6} className='mail__mr'>
                                <div className="input2" >
                                    <p className="loc-text">First name</p>
                                    <div className={ fNameValidate ? 'locationInpCon' : 'no-validate'}>
                                        <UserIcon />
                                        <input
                                            value={firstName}
                                            placeholder="First name"
                                            onChange={ event => { setFirstName(event.target.value);
                                                setFNameValidate(firstNameValidation(event.target.value));
                                                if( fNameValidate && emailValidate && telNumber.length === 12) {
                                                    setValid(true);
                                                }
                                            }}
                                            className="form-input" />
                                    </div>
                                    <div className={fNameValidate ? 'opacity-0' : 'opacity-100' }>
                                        <Validation>Enter the valid first name</Validation>
                                    </div>


                                </div>
                            </Col>
                            <Col sm={12} md={6} className='mail--width'>
                                <div className="input2" >
                                    <p className="loc-text">Email</p>
                                    <div className={ emailValidate ? 'locationInpCon' : 'no-validate'}>
                                        <MessageIcon />
                                        <input
                                            value={email}
                                            placeholder="Email"
                                            type="email"
                                            className="form-input"
                                            onChange={event => {
                                                setEmail(event.target.value);
                                                setEmailValidate(emailValidations(event.target.value))
                                                if( fNameValidate && emailValidate && telNumber.length === 12) {
                                                    setValid(true);
                                                }
                                            }}
                                        />

                                    </div>
                                    <div className={ emailValidate ? 'opacity-0' :'opacity-100'} >
                                        <Validation>Enter the valid email</Validation>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} className='mail__mr'>
                                <div className="input2" >
                                    <p className="loc-text">Phone number</p>
                                    <div className={ !telValidate  ? 'no-validate' : 'locationInpCon'}>
                                        <PhoneIcon />
                                        <InputMask
                                            mask='999-999-9999'
                                            placeholder="Phone number"
                                            type={"tel"}
                                            value={telNumber}
                                            className="form-input"
                                            onChange={ event => {
                                                setTelNumber(event.target.value)
                                                setTelValidate( phoneNumberValidation(event.target.value) );
                                                if( fNameValidate && emailValidate && telValidate) {
                                                    setValid(true);
                                                }
                                            }}>
                                        </InputMask>
                                    </div>
                                    <div className={!telValidate ? 'opacity-100' : 'opacity-0'} >
                                        <Validation>Enter the valid phone number</Validation>
                                    </div>

                                </div>
                            </Col>
                            <Col sm={12} md={6} className='mail--width'>
                                <div className="input2">
                                    <p className="loc-text"> Message </p>
                                    <div className={messageValid ? "locationInpCon" : "validation-error"}>
                                        <MessageOpen />
                                        <input
                                            placeholder="Message"
                                            type={"text"}
                                            className="form-input"
                                            onChange={e => {
                                                setMessage(e.target.value);
                                                setMessageValid(nameValidation(e.target.value));

                                            }}
                                        />
                                    </div>
                                    <div className={messageValid ? 'opacity-0 validation--contact' : 'opacity-100 validation--contact'}>
                                        <Validation> Please enter the message </Validation>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='modal-btn__row'>
                            <Col>
                                <button className='submit_button'>Submit information</button>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>

            }
            </div>
        </>
    )
}

export default ClaimMailComponent