import React, {useState} from "react";
import {connect} from "react-redux";
import "./claim-form.style.css";
import {Col, Modal, Row} from "react-bootstrap";
import UserIcon from "../../../assets/icons/user";
import {
    emailValidations,
    firstNameValidation,
    phoneNumberValidation
} from "../../../validations/adressValidation/validation";
import Validation from "../../../validations/validationText/validation";
import MessageIcon from "../../../assets/icons/message";
import PhoneIcon from "../../../assets/icons/phone";
import InputMask from "react-input-mask";
import CalendarIcon from "../../../assets/icons/calendar";
import Calendar from "react-calendar";
import {zipCodeValidation} from "../../../validations/zipCodeValidation";
import DropOff from "../../../assets/icons/drop-off";
import RadioPassive from "../../../assets/icons/RadioPassive";
import RadioActive from "../../../assets/icons/RadioActive";
import Edit from "../../../assets/icons/edit";
import UploadImage from "../../../assets/icons/uploadImage";
import movingAction from "../../../redux/moving/moving.Action";
import claimsFormAction from "../../../redux/claimForm/claimForm.Action";

function ClaimFormComponent( props ) {


    const [label, setLabel] = useState(false);
    const [isDamage, setDamage] = useState(0);

    const [showCal, setShowCal] = useState(false);
    const [showDateTwo, setShowDate] = useState(false);

    //valid
    const [zipCodeFromValid, setZipCodeFromValid] = useState(true);
    const [zipCodeToValid,setZipCodeToValid] = useState(true);

    //validation
    const [fNameValidate, setFNameValidate] = useState(true);
    const [lNameValidate, setLNameValidate] = useState(true);
    const [emailValidate, setEmailValidate] = useState(true);
    const [telValidate, setTelValidate] = useState(true);

    const [isOpen, setOpen] = useState(props.show);

    console.log(props);



    return (
        <>
                <Modal
                    show={isOpen}
                    onHide={() => { setOpen(false); props.changeModal(false)}}
                    dialogClassName="modal-95w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Claims Form
                        </Modal.Title>
                        <div className={'d-flex align-items-center justify-content-end'}>
                            <button className="btn-close" onClick={() => { setOpen(false); props.changeModal(false)}}>
                                <svg width="35" height="35" viewBox="0 0 45 45" fill="non   e" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.5078 0C10.1051 0 0 10.0897 0 22.4922C0 34.8949 10.1051 45 22.5078 45C34.9105 45 45 34.8949 45 22.4922C45 10.0895 34.9103 0 22.5078 0ZM22.5078 3.9779C32.7606 3.9779 41.0221 12.2389 41.0221 22.4922C41.0221 32.7449 32.7606 41.0221 22.5078 41.0221C12.2551 41.0221 3.9779 32.7455 3.9779 22.4922C3.9779 12.2389 12.2551 3.9779 22.5078 3.9779ZM14.5791 12.5824C14.0497 12.5824 13.5425 12.7938 13.169 13.169C12.3976 13.9448 12.3976 15.1978 13.169 15.9737L19.6913 22.496L13.169 29.0105C12.7939 29.384 12.583 29.8912 12.583 30.4207C12.583 30.9501 12.7939 31.4573 13.169 31.8308C13.5419 32.2048 14.0486 32.4152 14.5769 32.4152C15.1058 32.4152 15.6125 32.2048 15.9854 31.8308L22.5039 25.3085L29.0262 31.8308C29.8021 32.6022 31.0551 32.6022 31.8309 31.8308C32.2061 31.4573 32.417 30.9501 32.417 30.4207C32.417 29.8912 32.2061 29.384 31.8309 29.0105L25.3124 22.496L31.8309 15.9737C32.6023 15.1979 32.6023 13.9448 31.8309 13.169C31.4575 12.7938 30.9502 12.5824 30.4208 12.5824C29.8969 12.5868 29.3958 12.7971 29.0262 13.169L22.5039 19.6835L15.9854 13.169C15.613 12.7944 15.1069 12.5835 14.5791 12.5824H14.5791Z" fill="#447E7F"/>
                                </svg>
                            </button>
                        </div>

                    </Modal.Header>
                    <Modal.Body className='modal-form__body'>
                        <div className="modal-container">
                            <Row className='claims-form mb-2 '>
                                <Col lg={6} md={6} sm={12} xs={12} className='mail__mr'>
                                    <div className="input2" >
                                        <p className="loc-text">First name</p>
                                        {/*<div className={ fNameValidate ? 'locationInpCon' : 'no-validate'}>*/}
                                         <div className="locationInpCon">
                                            <UserIcon />
                                            <input
                                                onChange={event => {
                                                  props.claimsAction(props.claimsData.firstName = event.target.value)
                                                  setFNameValidate(firstNameValidation(event.target.value))
                                                }}
                                                placeholder="First name"
                                                className="form-input" />
                                        </div>
                                        <div className={fNameValidate ? 'opacity-0' : 'opacity-100' }>
                                            <Validation>Enter the valid first name</Validation>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="input2" >
                                        <p className="loc-text">Last name</p>
                                        <div className={ lNameValidate ? 'locationInpCon' : 'no-validate'}>
                                            <UserIcon />
                                            <input
                                                placeholder="Last name"
                                                className="form-input"
                                                onChange={event => {
                                                    props.claimsAction(props.claimsData.lastName = event.target.value)
                                                    setLNameValidate(firstNameValidation(event.target.value));
                                                }}
                                            />
                                        </div>
                                        <div className={fNameValidate ? 'opacity-0' : 'opacity-100' }>
                                            <Validation>Enter the valid last name</Validation>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12} className='mail__mr'>
                                    <div className="input2" >
                                        <p className="loc-text">Email</p>
                                        <div className={ emailValidate ? 'locationInpCon' : 'no-validate'}>
                                            <MessageIcon />
                                            <input
                                                placeholder="Email"
                                                type="email"
                                                className="form-input"
                                                onChange={event => {
                                                    props.claimsAction(props.claimsData.email = event.target.value)
                                                    setEmailValidate(emailValidations(event.target.value))
                                                }}
                                            />
                                        </div>
                                        <div className={ emailValidate ? 'opacity-0' :'opacity-100'} >
                                            <Validation>Enter the valid email</Validation>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="input2" >
                                        <p className="loc-text">Phone number</p>
                                        <div className={ !telValidate  ? 'no-validate' : 'locationInpCon'}>
                                            <PhoneIcon />
                                            <InputMask
                                                mask='999-999-9999'
                                                placeholder="Phone number"
                                                type={"tel"}
                                                className="form-input"
                                                onChange={ event => {
                                                    props.claimsAction(props.claimsData.phoneNumber = event.target.value)
                                                    setTelValidate( phoneNumberValidation(event.target.value) );
                                                }}>
                                            </InputMask>
                                        </div>
                                        <div className={!telValidate ? 'opacity-100' : 'opacity-0'} >
                                            <Validation>Enter the valid phone number</Validation>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12} className='mail__mr'>
                                    <div className="input2">
                                        <p className="loc-text">Date Loaded</p>
                                        <div className="date-input locationInpCon">
                                            <div
                                                onClick={() => {
                                                    setShowCal((pre) => !pre);
                                                }}
                                                className="input formComponent--input "
                                            >
                                                <p className="cal-text">{props.claimsData.dataLoaded.toLocaleDateString()}</p>
                                                <CalendarIcon />
                                            </div>
                                            {showCal && (
                                                <div className="calendar px-5">
                                                    <Calendar
                                                        onChange={(value) => {
                                                            setShowCal(false);
                                                            props.claimsAction(props.claimsData.dataLoaded = value)
                                                        }}
                                                        minDate={new Date()}
                                                        locale="en"
                                                        value={props.claimsData.dataLoaded}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        {/*<Validation>Enter the valid date</Validation>*/}
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12} >
                                    <div className="input2">
                                        <p className="loc-text">Date Unloaded</p>
                                        <div className="date-input locationInpCon">
                                            <div
                                                onClick={() => {
                                                    setShowDate((pr) => !pr);
                                                }}
                                                className="input formComponent--input"
                                            >
                                                <p className="cal-text">{props.claimsData.dataUnLoaded.toLocaleDateString()}</p>
                                                <CalendarIcon />
                                            </div>
                                            {showDateTwo && (
                                                <div className="calendar px-5">
                                                    <Calendar
                                                        onChange={(value) => {
                                                            setShowDate(false);
                                                            props.claimsAction(props.claimsData.dataUnLoaded = value)
                                                        }}
                                                        minDate={props.claimsData.dataLoaded}
                                                        locale="en"
                                                        value={props.claimsData.dataUnLoaded}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        {/*<Validation>Enter the valid date</Validation>*/}
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12} className='mail__mr'>
                                    <div className="loc-input" >
                                        <p className="loc-text">Pick-up Address</p>
                                        <div  className={ zipCodeFromValid ? 'locationInp' :  'validation-error'}>
                                            <DropOff />
                                            <div className={'w-100'}>
                                                <InputMask
                                                    mask={'99999'}
                                                    type={'text'}
                                                    onChange={(e) => {
                                                        props.claimsAction(props.claimsData.zipCodeFrom = e.target.value)
                                                        setZipCodeFromValid(zipCodeValidation(e.target.value));
                                                    }}
                                                    placeholder="Zip code"
                                                    className={"locationInput"}
                                                >
                                                </InputMask>
                                            </div>
                                        </div>

                                        <div className={zipCodeFromValid ? "opacity-0" : "opacity-100"} >
                                            <Validation> Enter a valid zip code </Validation>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="loc-input" >
                                        <p className="loc-text">Drop-off Address</p>
                                        <div className={ zipCodeToValid ? 'locationInp' :  'validation-error'}>
                                            <DropOff />
                                            <div className={"w-100"}>
                                                <InputMask
                                                    mask={'99999'}
                                                    type={'text'}
                                                    onChange={(e) => {
                                                        props.claimsAction(props.claimsData.zipCodeTo = e.target.value)
                                                        setZipCodeToValid( zipCodeValidation(e.target.value) );
                                                    }}
                                                    placeholder="Zip code"
                                                    className="locationInput" >
                                                </InputMask>

                                            </div>
                                        </div>
                                        <div className={zipCodeToValid ? "opacity-0" : "opacity-100"} >
                                            <Validation> Enter a valid zip code </Validation>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='claims-form claims-form__radio'>
                                <Col className='modal-container'>
                                    <h3 className='radio__header'>What Was Your Moving Valuation?</h3>
                                    <div className="d-flex align-items-center form--radio  form--position">
                                        <div className='input_radio radio--valuation'>
                                            <label onClick={() => {
                                                setLabel(pre => !pre)
                                            }} htmlFor='card' className='label_radio'>
                                                {label ? <RadioPassive/> : <RadioActive/>}
                                            </label>
                                            <input type={'radio'} name='cdl' id='cdl'/>
                                            <p className='cdl_text'>Basic Valuation</p>
                                        </div>
                                        <div className='input_radio'>
                                            <label onClick={() => {
                                                setLabel(pre => !pre)
                                            }} htmlFor='cash' className='label_radio'>
                                                {!label ? <RadioPassive/> : <RadioActive/>}
                                            </label>
                                            <input type={'radio'} name='cdl' id='cdl'/>
                                            <p className='cdl_text'>I purchased an extra Insurance</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='claims-form claims-form__radio2'>
                                <Col className='modal-container'>
                                    <h3 className='radio__header'>How many Items were Lost, Stolen or Damaged?</h3>
                                    <div className="d-flex align-items-center form--radio radio_div form--position">
                                        <section className='d-flex align-items-center justify-content-between'>
                                            <div className='input_radio form--radio__btn'>
                                                <p className='cdl_text'>01</p>
                                                <label onClick={() =>
                                                    isDamage !== 1 ? setDamage(1) : null
                                                } htmlFor='card' className='label_radio'>
                                                    {isDamage === 1 ?  <RadioActive/> : <RadioPassive/> }
                                                </label>
                                                <input type={'radio'} name='damage' id='damage'/>

                                            </div>

                                            <div className='input_radio form--radio__btn'>
                                                <p className='cdl_text'>02</p>
                                                <label onClick={() =>
                                                    isDamage !== 2 ? setDamage(2) : null
                                                } htmlFor='card' className='label_radio'>
                                                    {isDamage === 2 ?  <RadioActive/> : <RadioPassive/> }
                                                </label>
                                                <input type={'radio'} name='damage' id='damage'/>

                                            </div>

                                            <div className='input_radio form--radio__btn'>
                                                <p className='cdl_text'>03</p>
                                                <label onClick={() =>
                                                    isDamage !== 3 ? setDamage(3) : null
                                                } htmlFor='card' className='label_radio'>
                                                    {isDamage === 3 ?  <RadioActive/> : <RadioPassive/> }
                                                </label>
                                                <input type={'radio'} name='damage' id='damage'/>
                                            </div>
                                            <div className='input_radio form--radio__btn'>
                                                <p className='cdl_text'>04</p>
                                                <label onClick={() =>
                                                    isDamage !== 4 ? setDamage(4) : null
                                                } htmlFor='card' className='label_radio'>
                                                    {isDamage === 4 ?  <RadioActive/> : <RadioPassive/> }
                                                </label>
                                                <input type={'radio'} name='damage' id='damage'/>
                                            </div>
                                            <div className='input_radio form--radio__btn'>
                                                <p className='cdl_text'>05</p>
                                                <label onClick={() =>
                                                    isDamage !== 5 ? setDamage(5) : null
                                                } htmlFor='card' className='label_radio'>
                                                    {isDamage === 5 ?  <RadioActive/> : <RadioPassive/> }
                                                </label>
                                                <input type={'radio'} name='damage' id='damage'/>
                                            </div>
                                            <div className='input_radio form--radio__btn'>
                                                <p className='cdl_text'>06</p>
                                                <label onClick={() =>
                                                    isDamage !== 6 ? setDamage(6) : null
                                                } htmlFor='card' className='label_radio'>
                                                    {isDamage === 6 ?  <RadioActive/> : <RadioPassive/> }
                                                </label>
                                                <input type={'radio'} name='damage' id='damage'/>
                                            </div>
                                            <div className='input_radio form--radio__btn'>
                                                <p className='cdl_text'>07</p>
                                                <label onClick={() =>
                                                    isDamage !== 7 ? setDamage(7) : null
                                                } htmlFor='card' className='label_radio'>
                                                    {isDamage === 7 ?  <RadioActive/> : <RadioPassive/> }
                                                </label>
                                                <input type={'radio'} name='damage' id='damage'/>
                                            </div>
                                            <div className='input_radio form--radio__btn'>
                                                <p className='cdl_text'>08</p>
                                                <label onClick={() =>
                                                    isDamage !== 8 ? setDamage(8) : null
                                                } htmlFor='card' className='label_radio'>
                                                    {isDamage === 8 ?  <RadioActive/> : <RadioPassive/> }
                                                </label>
                                                <input type={'radio'} name='damage' id='damage'/>
                                            </div>
                                            <div className='input_radio form--radio__btn'>
                                                <p className='cdl_text'>09</p>
                                                <label onClick={() =>
                                                    isDamage !== 9 ? setDamage(9) : null
                                                } htmlFor='card' className='label_radio'>
                                                    {isDamage === 9 ?  <RadioActive/> : <RadioPassive/> }
                                                </label>
                                                <input type={'radio'} name='damage' id='damage'/>
                                            </div>
                                            <div className='input_radio form--radio__btn'>
                                                <p className='cdl_text'>10</p>
                                                <label onClick={() =>
                                                    isDamage !== 10 ? setDamage(10) : null
                                                } htmlFor='card' className='label_radio'>
                                                    {isDamage === 10 ?  <RadioActive/> : <RadioPassive/> }
                                                </label>
                                                <input type={'radio'} name='damage' id='damage'/>
                                            </div>
                                        </section>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='claims-form claims-form--row claims-form__article'>
                                <Col lg={6} md={6} sm={12} xs={12} className='mail__mr'>
                                    <div className="input2" >
                                        <p className="loc-text">Article name</p>
                                        <div className={ props.claimsData.articleName !== null  ? 'locationInpCon' : 'no-validate'}>
                                            <Edit />
                                            <input
                                                placeholder="Mirror"
                                                onChange={event => {
                                                    props.claimsAction(props.claimsData.articleName = event.target.value)
                                                }}
                                                className="form-input" />
                                        </div>
                                        <div className={props.claimsData.articleName !== null ? 'opacity-0' : 'opacity-100' }>
                                            <Validation>Enter the valid article name</Validation>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12} className='mail__mr'>
                                    <div className="input2" >
                                        <p className="loc-text">Article weight</p>
                                        <div className={ props.claimsData.articleWeight !== null ? 'locationInpCon' : 'no-validate'}>
                                            <Edit />
                                            <input
                                                placeholder="16inch"
                                                onChange={event => {
                                                    props.claimsAction(props.claimsData.articleWeight = event.target.value)
                                                }}
                                                className="form-input" />
                                        </div>
                                        <div className={props.claimsData.articleWeight !== null ? 'opacity-0' : 'opacity-100' }>
                                            <Validation>Enter the valid article weight</Validation>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} sm={12} lg={12} className='modal-container modal--textarea'>
                                    <p className="loc-text">Article description</p>
                                    <textarea className='form-textarea' placeholder='Write your story here'> </textarea>
                                </Col>
                            </Row>
                            <div className='claims-form__btn'>
                                <div className="modal-container">
                                    {/*image show */}
                                    <div className="claims__show-file">
                                        {/*    */}
                                    </div>

                                    <label htmlFor="claimFile">
                                        <div className="claims-btn--block">
                                            <UploadImage />
                                            <p>Upload Pictures</p>
                                        </div>
                                        <input type="file" className='d-none' id='claimFile' required/>
                                    </label>
                                </div>
                            </div>
                            <div className="claims-form__checkbox">
                                <div className="modal-container">
                                    <label className="d-flex align-items-center">
                                        <input
                                            type={'checkbox'}
                                            className='input_check'
                                        />
                                        <p className='save_card_text' >Read carefully before submitting claim</p>
                                    </label>

                                    <div className="form-checkbox__txt">
                                        I am the owner of the item described. I did not cause or contribute to the damage set forth herein. I the
                                        undersigned, do affirm the truthfulness and accuracy of the information above and that attached here to in
                                        support of this claim against the JFK Moving LLC for the item/s damaged. I understand that I have an obligation to inform the JFK Moving LLC of any insurance payments made to me or to any vendor/s on my behalf for this incident. Any items in respect of which a cash settlement is made as compensation for loss or irreparable damage shall be the property of JFK Moving LLC.
                                        <br/> <br/>
                                        I, the undersigned make this solemn declaration conscientiously believing it to be true and knowing it of the same force and effect as if made under oath and by virtue of "California Evidence Code". The terms and conditions governing this move require this written claim be received by the carrier within 15 days from date of delivery.
                                        <span> THE ABOVE CONSTITUTES MY COMPLETE AND ENTIRE CLAIM </span>
                                    </div>
                                </div>
                            </div>
                            <Row className='modal-btn__row'>
                                <Col>
                                    <button className='submit_button'> Submit</button>
                                </Col>
                            </Row>
                        </div>
                    </Modal.Body>
                </Modal>
        </>
    )
}

function mapStateToProps(state) {
    return {
        claimsData: state.claimsForm
    }
}

const mapDispatchToProps = dispatch => ({
    claimsAction: claimsData => dispatch(claimsFormAction(claimsData))
})


export default connect(mapStateToProps, mapDispatchToProps)(ClaimFormComponent)