import React from "react";
import {Row, Col} from "react-bootstrap";
import "./storageService.style.css";
import ImageOne from "../../../assets/images/storage/offer/icon1.png";
import KeyAndHomeImage from "../../../assets/images/storage/offer/icon2.png";
import BoxAndHomeImage from  "../../../assets/images/storage/offer/icon3.png";
import CameraImage from "../../../assets/images/storage/offer/camera.png";
import PriceImage from "../../../assets/images/storage/offer/price.png";

export const StorageServiceComponent = () => (
    <section className="storageService">
      <div className="container">
         <div className="storage-service__heading">
            <h1 className="titleText">What we offer</h1>
         </div>
         <div className="storage-service__block">
            <Row className="storage-service__row">
               <Col lg={6} sm={12} className='storage-service__column d-flex align-items-center'>
                     <div className="guide-tips__img tips-content__column">
                        <span className='guide-tips__index'>01</span>
                        <img src={ImageOne} alt="checklist"/>
                     </div>
                     <h3>Free estimates</h3>
               </Col>
               <Col lg={6} sm={12} className='storage-service__column d-flex align-items-center'>
                     <div className="guide-tips__img tips-content__column">
                        <span className='guide-tips__index'>02</span>
                        <img src={KeyAndHomeImage} alt="checklist"/>
                     </div>
                     <h3>Short and Long term storage</h3>
               </Col>
               <Col lg={6} sm={12} className='storage-service__column d-flex align-items-center'>
                     <div className="guide-tips__img tips-content__column">
                        <span className='guide-tips__index'>03</span>
                        <img src={BoxAndHomeImage} alt="checklist"/>
                     </div>
                     <h3>Emergency Storage</h3>
               </Col>
               <Col lg={6} sm={12} className='storage-service__column d-flex align-items-center'>
                     <div className="guide-tips__img tips-content__column">
                        <span className='guide-tips__index'>04</span>
                        <img src={CameraImage} alt="checklist"/>
                     </div>
                     <h3>Clean and Secure Facilities</h3>
               </Col>
               <Col lg={6} sm={12} className='storage-service__column d-flex align-items-center'>
                     <div className="guide-tips__img tips-content__column">
                        <span className='guide-tips__index'>05</span>
                        <img src={PriceImage} alt="checklist"/>
                     </div>
                     <h3>Competitive Pricing</h3>
               </Col>
            </Row>
         </div>
      </div>
    </section>
)