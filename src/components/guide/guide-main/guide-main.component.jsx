import React from "react";
import {NavLink} from "react-router-dom";
import "./guide.style.css";
import {Col, Row} from "react-bootstrap";
import Image1 from "../../../assets/images/guide/main-image_first.svg";
import Image2 from "../../../assets/images/guide/main-image_second.svg";

function GuideMainComponent() {
    return(
        <>
            <div className="container">
                <div className="guide-heading">
                    <h1 className='guide-header headTxt'>Moving Guide</h1>
                </div>
                <Row className='guide-content'>
                    <Col lg={12} xl={12} md={12} className='guide-content__item'>
                        <Row>
                            <Col className='guide-content__column' lg={6} md={6} sm={12} xs={12}>
                                <div className="guide-content__img">
                                    <img src={Image1} alt="Two people are dropping bag"/>
                                </div>
                            </Col>
                            <Col className='guide-content__column' lg={6} md={6} sm={12} xs={12}>
                                <div className="guide-content__info">
                                    <h3 className="guide-content__header">Moving Tips</h3>
                                    <p className="guide-content__text">
                                        Relocation can be a chaotic experience, especially if you haven’t planned in advance. This applies to all relocations, domestic and commercial. Taking the time to do things in advance will help you in many ways in the long term. To help you get organized and to stay in control, here is a moving checklist. You can print this page and use it to tick off tasks you have completed as you complete them, helping you stay on top of it all.
                                    </p>
                                    <NavLink to='/guide/tips'>
                                        <button className="guide-content__btn continue-button" type="button">
                                            Learn more
                                        </button>
                                    </NavLink>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={12} xl={12} md={12} className='guide-content__item'>
                        <Row>
                            <Col className='guide-content__column' lg={6} md={6} sm={12} xs={12}>
                                <div className="guide-content__info">
                                    <h3 className="guide-content__header">Moving Checklists</h3>
                                    <p className="guide-content__text">
                                        Get prepared for your next move with our handy moving checklist! Using a simple timeline, this moving to-do list will help you focus on specific areas of your moving and packing tasks to keep you on track and ensure you’re ready come move day. Best of all, it’s broken down into easy-to-follow sections so you can tackle the pre-move process piece by piece as you work your way through the entire checklist.
                                    </p>
                                    <NavLink to='/guide/list'>
                                        <button className="guide-content__btn continue-button" type="button">
                                            Learn more
                                        </button>
                                    </NavLink>
                                </div>
                            </Col>
                            <Col className='guide-content__column' lg={6} md={6} sm={12} xs={12}>
                                <div className="guide-content__img">
                                    <img src={Image2} alt="Man show the checklist for moving list"/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default GuideMainComponent;