import React from "react";
import "./style.css";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import Image1 from "../../assets/images/why-us/image_1.svg";
import Image2 from "../../assets/images/why-us/image_2.svg";
import Image3 from "../../assets/images/why-us/imge_3.svg";
import Image4 from "../../assets/images/why-us/image_4.svg";
import Image5 from "../../assets/images/why-us/image_5.svg";

function WhyComponent() {
    return(
        <>
         <main className='why'>
             <div className="container">
                 <div className="why-heading">
                     <h1 className='headTxt'>Why our customers love us!</h1>
                 </div>
                  <Row>
                      <Col lg={12} md={12}>
                         <Row className='why__row'>
                             <Col lg={6} md={6} sm={12} xs={12}>
                                 <div className="why__image">
                                     <img src={Image1} alt="Image"/>
                                 </div>
                             </Col>
                             <Col lg={6} md={6} sm={12} xs={12}>
                                 <div className="why__info">
                                     <h2 className="why__header">Experienced Crew</h2>
                                     <p className="why__text">
                                         Our trained professionals know what it takes to get the job done safely and efficiently. We do take care our professionals, in return they take care of you. We are the one whom you can choose to have your house moved
                                     </p>
                                 </div>
                             </Col>
                         </Row>
                     </Col>
                      <Col lg={12} md={12}>
                          <Row className='why__row'>
                              <Col lg={6} md={6} sm={12} xs={12}>
                                  <div className="why__info">
                                      <h2 className="why__header">Fully Licensed and Insured</h2>
                                      <p className="why__text">
                                          Our trained professionals know what it takes to get the job done safely and efficiently. We do take care our professionals, in return they take care of you. We are the one whom you can choose to have your house moved
                                      </p>
                                  </div>
                              </Col>
                              <Col lg={6} md={6} sm={12} xs={12}>
                                  <div className="why__image image--justify">
                                      <img src={Image2} alt="Image"/>
                                  </div>
                              </Col>
                          </Row>
                      </Col>
                      <Col lg={12} md={12}>
                          <Row className='why__row'>
                              <Col lg={6} md={6} sm={12} xs={12}>
                                  <div className="why__image">
                                      <img src={Image3} alt="Image"/>
                                  </div>
                              </Col>
                              <Col lg={6} md={6} sm={12} xs={12}>
                                  <div className="why__info">
                                      <h2 className="why__header">All Type of Services</h2>
                                      <p className="why__text">
                                          Our trained professionals know what it takes to get the job done safely and efficiently. We do take care our professionals, in return they take care of you. We are the one whom you can choose to have your house moved
                                      </p>
                                  </div>
                              </Col>
                          </Row>
                      </Col>
                      <Col lg={12} md={12}>
                          <Row className='why__row'>
                              <Col lg={6} md={6} sm={12} xs={12}>
                                  <div className="why__info">
                                      <h2 className="why__header">No Hidden Cost</h2>
                                      <p className="why__text">
                                          Our trained professionals know what it takes to get the job done safely and efficiently. We do take care our professionals, in return they take care of you. We are the one whom you can choose to have your house moved
                                      </p>
                                  </div>
                              </Col>
                              <Col lg={6} md={6} sm={12} xs={12}>
                                  <div className="why__image image--justify">
                                      <img src={Image4} alt="Image"/>
                                  </div>
                              </Col>
                          </Row>
                      </Col>
                      <Col lg={12} md={12}>
                          <Row className='why__row why__last--margin'>
                              <Col lg={6} md={6} sm={12} xs={12}>
                                  <div className="why__image">
                                      <img src={Image5} alt="Image"/>
                                  </div>
                              </Col>
                              <Col lg={6} md={6} sm={12} xs={12}>
                                  <div className="why__info">
                                      <h2 className="why__header">Outstanding Customer Service</h2>
                                      <p className="why__text">
                                          Our trained professionals know what it takes to get the job done safely and efficiently. We do take care our professionals, in return they take care of you. We are the one whom you can choose to have your house moved
                                      </p>
                                  </div>
                              </Col>
                          </Row>
                      </Col>
                  </Row>
             </div>
         </main>

        </>
    )
}

export default WhyComponent