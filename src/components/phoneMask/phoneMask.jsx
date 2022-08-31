import React from 'react';
import InputMask from 'react-input-mask';
import {connect} from "react-redux";
import movingAction from "../../redux/moving/moving.Action";
import {useState} from "react";
import {phoneNumberValidation} from "../../validations/adressValidation/validation";
import "../EnterAddress/style.css"

// Will work fine
function PhoneInput(props) {
   const [telNumber, setTelNumber] = useState(props.movingData.phoneNumber);

    return (
        <InputMask
            mask='999-999-9999'
            placeholder="Phone number"
            type={"tel"}
            value={telNumber}
            className="form-input"
            onChange={ event => {
                setTelNumber(event.target.value)
                props.validation(phoneNumberValidation(event.target.value));
                props.getData(telNumber)
            }}>
        </InputMask>
    );
}
function mapStateToProps(state) {
    return {
        movingData:state.moving
    }
}

const mapDispatchToProps = dispatch => ({
    movingAction: movingData => dispatch(movingAction(movingData))
})

export default  connect(mapStateToProps, mapDispatchToProps)(PhoneInput)