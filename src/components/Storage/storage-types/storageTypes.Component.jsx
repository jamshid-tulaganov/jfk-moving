import React from "react";
import "./storageTypes.style.css";
import {Row, Col} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import PeopleAndBoxesImage from "../../../assets/images/storage/types/peopleAndBoxes.png";
import PersonAndTruckImage from "../../../assets/images/storage/types/personAndTruck.png";
import ConstructorAndTruckImage from "../../../assets/images/storage/types/constructorAndPerson.png";
import HomeAndTruckImage from "../../../assets/images/storage/types/truckAndStorage.png"; 


export const StorageTypesComponent = () => (
    <section className="storage-types">
      <div className="container">
           <div className="storage-types__heading">
               <h1 className="headTxt text-center">Types of Storage</h1>
               <p className="getText text-center">We offer secure, private storage solutions to meet any scale of residential or commercial need.</p>    
            </div> 

            <div className="storage-types__block">
                <div className='storage-types__row'>
                    <Row className='guide-content'>
                    <Col lg={12} xl={12} md={12} className='guide-content__item'>
                        <Row>
                            <Col className='guide-content__column' lg={6} md={6} sm={12} xs={12}>
                                <div className="guide-content__img storage-types__content d-flex justify-content-start">
                                    <img src={PeopleAndBoxesImage} alt="Two people are dropping bag"/>
                                </div>
                            </Col>
                            <Col className='guide-content__column' lg={6} md={6} sm={12} xs={12}>
                                <div className="guide-content__info">
                                    <h3 className="guide-content__header">Personal Storage</h3>
                                    <p className="guide-content__text">
                                       During the moving process, our customers oftentimes need the ability to store their items. We offer many flexible storage options to cater directly to these needs. Our specialized storage services provide a safe and easy solution to meet your storage needs.
                                    </p>
                                    <NavLink to='#'>
                                        <button className="guide-content__btn continue-button" type="button">
                                            Free Estimate
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
                                    <h3 className="guide-content__header">Business Storage</h3>
                                    <p className="guide-content__text">
                                        Enjoy short and long term storage at affordable monthly rates. Your items remain fully wrapped and packed, securely protected in our storage facility. Storage-in-transit is available for your belongings for up to 60 days and then transferred to permanent storage.
                                    </p>
                                    <NavLink to='#'>
                                        <button className="guide-content__btn continue-button" type="button">
                                            Free Estimate
                                        </button>
                                    </NavLink>
                                </div>
                            </Col>
                            <Col className='guide-content__column d-flex justify-content-center' lg={6} md={6} sm={12} xs={12}>
                                <div className="guide-content__img storage-types__content storage-person__images">
                                    <img src={PersonAndTruckImage} alt="Man show the checklist for moving list"/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={12} xl={12} md={12} className='guide-content__item'>
                        <Row>
                            <Col className='guide-content__column' lg={6} md={6} sm={12} xs={12}>
                                <div className="guide-content__img storage-short__content d-flex justify-content-start">
                                    <img src={ConstructorAndTruckImage} alt="Two people are dropping bag"/>
                                </div>
                            </Col>
                            <Col className='guide-content__column' lg={6} md={6} sm={12} xs={12}>
                                <div className="guide-content__info">
                                    <h3 className="guide-content__header">Short-term Storage</h3>
                                    <p className="guide-content__text">
                                       Since moving house gives you the best chance to decide what your new home will look like, our short-term full-service solution is available to help you choose what you need in your life and what you don’t. All you need to do is make the decision, we’ll deal with everything else—from pick-up and delivery to on-demand retrieval.
                                    </p>
                                    <NavLink to='#'>
                                        <button className="guide-content__btn continue-button" type="button">
                                            Free Estimate
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
                                    <h3 className="guide-content__header">Long-term Storage</h3>
                                    <p className="guide-content__text">
                                        Long-term storage is available from 6 months to as many years as you require, meaning you can safely and securely store that grand piano, 18th century credenza, or collection of rare comics with complete peace of mind.
                                    </p>
                                    <NavLink to='#'>
                                        <button className="guide-content__btn continue-button" type="button">
                                            Free Estimate
                                        </button>
                                    </NavLink>
                                </div>
                            </Col>
                            <Col className='guide-content__column d-flex justify-content-center' lg={6} md={6} sm={12} xs={12}>
                                <div className="guide-content__img storage-truck__content storage-person__images">
                                    <img src={HomeAndTruckImage} alt="Man show the checklist for moving list"/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </div>    
            </div>
      </div>
    </section>
)