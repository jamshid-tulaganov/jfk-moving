import React, { useState } from 'react';
import "./styles.css";
import {connect} from "react-redux";
import { NavLink } from "react-router-dom";
import GoBack from "../../assets/icons/goback";
import Hands from "../../assets/icons/Hands";
import Dispatch from "../../assets/icons/Dispatch";
import movingAction from "../../redux/moving/moving.Action";

function EmploymentCon(props) {
    const [status, setStatus] = useState(1);

    let data = props.employmentData;
    data.employmentPositionId = status;

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
                <div className='row d-flex justify-content-center'>
                    <div className='col-9 employment--block' >
                        <div className='row employ_con'>
                            <div className='col-lg-6'>
                                <button
                                    onClick={() => {
                                        setStatus(1);
                                    }}
                                    className={status == 1 ? 'employ_button_active' : 'employ_button'} >

                                    <Dispatch />
                                    <p className='employ_button_text dispatch--header' >Dispatch</p>
                                    <p className='employ_button_desc' >Lorem Ipsum is not simply random text. It has roots in a piece of classical</p>
                                </button>
                            </div>
                            <div className='col-lg-6'>
                                <button
                                    onClick={() => {
                                        setStatus(2);
                                    }}
                                    className={status == 2 ? 'employ_button_active' : 'employ_button'} >
                                    <Hands />
                                    <p className='employ_button_text' >Driver, Foreman, Helper</p>
                                    <p className='employ_button_desc' >Lorem Ipsum is not simply random text. It has roots in a piece of classical</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 back-buttons">
                    <NavLink to="/employmentform">
                        <button className="continue-button" onClick={() => props.employmentAction(data)}>Continue</button>
                    </NavLink>
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


export default connect(mapStateToProps, mapDispatchToProps)(EmploymentCon)