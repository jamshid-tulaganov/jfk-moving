import React from "react";
import "./CommercialStatus.style.css";
import {Row, Col} from "react-bootstrap";
// images
import Image1 from "../../../assets/images/servicePage/commercial/status/image_1.png";
import PlanImage from "../../../assets/images/servicePage/commercial/status/plan.png";
import ScheduleImage from "../../../assets/images/servicePage/commercial/status/schedule.png"; 


function CommercialStatusComponent () {

  return ( 
    <section className="commercial-status">
      <div className="container">
         <div className="localMoving commercial__heading justify-content-center margin-top margin-top-20 text-center">
                    <h1 className="localMoving-header">Long-distance moving like no one else.</h1>
                    <p className="localMoving__description commercial--desc text-center apartment-heading">     
                    Through research and a thorough pre-screening process, our company ensures that you get the best deal for all of your moving needs.
                    </p>
         </div>

          <article className="commercial-block">
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
                                    <h3 className="guide-content__header">Request a quote</h3>
                                    <p className="guide-content__text">
                                    Tell us what you need—either online or over the phone and in fewer than 15 minutes we can match you with the most-qualified team for your move.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={12} xl={12} md={12} className='guide-content__item'>
                        <Row>
                            <Col className='guide-content__column' lg={6} md={6} sm={12} xs={12}>
                                <div className="guide-content__info">
                                    <h3 className="guide-content__header">Schedule an Estimate</h3>
                                    <p className="guide-content__text">
                                    Tell us what you need—either online or over the phone and in fewer than 15 minutes we can match you with the most-qualified team for your move.
                                    </p>
                                </div>
                            </Col>
                            <Col className='guide-content__column' lg={6} md={6} sm={12} xs={12}>
                                <div className="guide-content__img">
                                    <img src={ScheduleImage} alt="Man show the checklist for moving list"/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={12} xl={12} md={12} className='guide-content__item'>
                        <Row>
                           <Col className='guide-content__column' lg={6} md={6} sm={12} xs={12}>
                                <div className="guide-content__img">
                                    <img src={PlanImage} alt="Man show the checklist for moving list"/>
                                </div>
                            </Col>
                            <Col className='guide-content__column' lg={6} md={6} sm={12} xs={12}>
                                <div className="guide-content__info">
                                    <h3 className="guide-content__header">Plan Your Move</h3>
                                    <p className="guide-content__text">
                                    Tell us what you need—either online or over the phone and in fewer than 15 minutes we can match you with the most-qualified team for your move.
                                    </p>
                                </div>
                            </Col>
                        
                        </Row>
                    </Col>
                </Row>
          </article>
          

      </div>
    </section>
   );
}

export default CommercialStatusComponent ;