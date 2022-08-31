import React, {useState} from "react";
import "./claims-main.style.css";
import {Row, Col} from "react-bootstrap";
import PdfImage from "../../../assets/images/pdf.png";
import FaqGeneralComponent from "../../faq/faq-general/faq-general.component";
import ClaimMailComponent from "../claim-mail/claim-mail.component";
import {useNavigate} from "react-router-dom";
import ClaimFormComponent from "../claim-form/claim-form.component";

function ClaimsMainComponent() {

    const [isShowModalMail, setShowModalMail] = useState(false);
    const [isShowModalForm, setShowModalForm] = useState(false);
    // const navigate = useNavigate();

    const changeShowMail = (val) => {
        setShowModalMail(val);
    }

    const changeShowForm = (val) => {
        setShowModalForm(val);
    }

    return (
        <>
            <div className="container">
                <div className="guide-heading">
                    <h1 className="claims__header guide-header headTxt">Claims and Complaints Page</h1>
                </div>
                <ul className="claims-list">
                    <li className="claims-item">
                        <h3 className='claims-item__header guide-content__header'>Lowest Claim Rate in the Moving Industry</h3>
                        <p className='claims-item__txt guide-content__text'>
                            With one of the lowest claims rates in the industry, JFK Moving is your safest bet when it comes to choosing a mover. We go above and beyond to make sure that all of your valuables are safe and secured!
                             <br/> <br/>
                            JFK team of professionals consults with you prior to your move to avoid risks, discuss our terms and conditions, and clarify our insurance coverage. When an unexpected mishap occurs, we are open and honest about procedures and offer you possible alternatives for resolution.
                            <br/> <br/>
                            Even when accidents happen, we remain professional, and work promptly and courteously to resolve our clients' claims. We have a dedicated team of field specialists who can help you with any issues that emerge throughout your relocation. If you have complaints regarding your move, contact us as soon as possible, and we will assist you in finding a solution!
                        </p>
                    </li>
                    <li className="claims-item">
                        <h3 className='claims-item__header guide-content__header'>When should I file a formal complaint against a moving company?</h3>
                        <p className='claims-item__txt guide-content__text'>
                            We urge you to file a complaint against a moving company when the company breaks the terms of your contract.  No one likes to be on the receiving end of deceptive business practices. Here are several valid reasons to make a complaint:
                           <br/> <br/>
                            <b>Late pickup or delivery.</b>Your moving company misses the contracted date to pick up or deliver your belongings. <br/>
                            <b>Stolen items.</b> Your items are missing at delivery. <br/>
                            <b>Moving scams.</b> Your mover takes your money but never performs the work. <br />
                            <b>Unlawful possession of belongings.</b>Your moving company holds your belongings hostage until you agree to pay a higher fee. <br />
                            <b>Slow service.</b> Your mover deliberately moves at a slow pace to increase hourly charges. <br />
                            <b>Unexpected charges.</b>Your final bill includes charges not specified in your contract. <br/> <br/>
                            Let’s say you paid a hefty deposit, and no one showed up on move day. Or maybe you were asked to pay thousands of dollars before the driver would release your belongings for delivery.
                            Remember: you can leave customer reviews for problems such as poor customer service, misleading websites, or extensive damage to your property, but for more significant issues like missing items and random charges not mentioned in your contract, it’s more effective to file a formal complaint.
                        </p>
                    </li>
                    <li className="claims-item">
                        <div className="claims-item__heading">
                            <h1 className='guide-content__header'>
                                How to make a claim to JFK Moving?
                            </h1>
                        </div>

                        <Row className='d-flex'>
                            <Col lg={6} md={5} xs={12} sm={12} className='justify-content-end'>
                                <div className="license-content claims-item__license">
                                    <div className="license-content__img">
                                        <img src={PdfImage} alt="pdf file images"/>
                                    </div>
                                    <p className='claims-item--dec'>
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </p>

                                    <button className="license-content__btn MovingBox__btn" type='button' onClick={() => setShowModalForm(true)}>
                                        Fill the form
                                    </button>
                                </div>
                            </Col>
                            <Col lg={6} md={5} xs={12} sm={12}>
                                <div className="license-content">
                                    <div className="license-content__img">
                                        <img src={PdfImage} alt="pdf file images"/>
                                    </div>
                                    <p className='claims-item--dec'>
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </p>
                                    <button className="license-content__btn MovingBox__btn" type='button' onClick={() => setShowModalMail(true)}>
                                        Mail Us
                                    </button>
                                </div>
                            </Col>
                            {
                                isShowModalMail
                                    ? <ClaimMailComponent show={true} changeModal={changeShowMail}/>
                                    : null
                            }

                            {
                                isShowModalForm
                                ? <ClaimFormComponent show={true} changeModal={changeShowForm} />
                                : null
                            }


                        </Row>
                    </li>
                    <li className='claims-item'>
                        <div className="claims-item__faq">
                            <h1 className='headTxt'> Frequently Asked Questions </h1>
                            <div className='claims-accordion'>
                                <FaqGeneralComponent />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ClaimsMainComponent