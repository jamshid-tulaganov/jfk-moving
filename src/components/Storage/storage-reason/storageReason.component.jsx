import React from "react";
import "./storageReason.style.css";
import {Row, Col} from "react-bootstrap";
import CorrectImage from "../../../assets/images/storage/correct.svg";

export const StorageReasonComponent = () => (
    <section className="storage-reason">
        <div className="container">
            <div className="storage-reason__heading">
                <h1 className="headTxt text-center">Reason to Store</h1>
                <p className="getText text-center">There are many other reasons why you might need both long- and short-term storage space.</p>
            </div>

            <div className="storage-reason__block">
                <Row className="storage-reason__row">
                    <Col sm={12} lg={6} md={6}>
                        <div className="correct-box">
                            <div className="correct-box__image">
                                <img src={CorrectImage} alt="correct icon" title="correct icon" />
                            </div>
                            <h3 className="">Your are selling your home</h3>
                        </div>
                    </Col>
                    <Col sm={12} lg={6} md={6}>
                        <div className="correct-box">
                            <div className="correct-box__image">
                                <img src={CorrectImage} alt="correct icon" title="correct icon" />
                            </div>
                            <h3 className="">You need to reduce clutter</h3>
                        </div>
                    </Col>
                    <Col sm={12} lg={6} md={6}>
                        <div className="correct-box">
                            <div className="correct-box__image">
                                <img src={CorrectImage} alt="correct icon" title="correct icon" />
                            </div>
                            <h3 className="">You need to archive important paperwork</h3>
                        </div>
                    </Col>
                    <Col sm={12} lg={6} md={6}>
                        <div className="correct-box">
                            <div className="correct-box__image">
                                <img src={CorrectImage} alt="correct icon" title="correct icon" />
                            </div>
                            <h3 className="">You need to store a loved-one’s belongings </h3>
                        </div>
                    </Col>
                    <Col sm={12} lg={6} md={6}>
                        <div className="correct-box">
                            <div className="correct-box__image">
                                <img src={CorrectImage} alt="correct icon" title="correct icon" />
                            </div>
                            <h3 className="">Clean and Secure Facilities</h3>
                        </div>
                    </Col>
                    <Col sm={12} lg={6} md={6}>
                        <div className="correct-box">
                            <div className="correct-box__image">
                                <img src={CorrectImage} alt="correct icon" title="correct icon" />
                            </div>
                            <h3 className="">You have seasonal items and furniture</h3>
                        </div>
                    </Col>
                    <Col sm={12} lg={6} md={6}>
                        <div className="correct-box">
                            <div className="correct-box__image">
                                <img src={CorrectImage} alt="correct icon" title="correct icon" />
                            </div>
                            <h3 className="">You are renovating your home</h3>
                        </div>
                    </Col>
                    <Col sm={12} lg={6} md={6}>
                        <div className="correct-box">
                            <div className="correct-box__image">
                                <img src={CorrectImage} alt="correct icon" title="correct icon" />
                            </div>
                            <h3 className="">You are a collector</h3>
                        </div>
                    </Col>
                    <Col sm={12} lg={6} md={6}>
                        <div className="correct-box">
                            <div className="correct-box__image">
                                <img src={CorrectImage} alt="correct icon" title="correct icon" />
                            </div>
                            <h3 className="">You need to make an emergency move</h3>
                        </div>
                    </Col>
                    <Col sm={12} lg={6} md={6}>
                        <div className="correct-box">
                            <div className="correct-box__image">
                                <img src={CorrectImage} alt="correct icon" title="correct icon" />
                            </div>
                            <h3 className="">You have inherited family heirlooms</h3>
                        </div>
                    </Col>
                    <Col sm={12} lg={6} md={6}>
                        <div className="correct-box">
                            <div className="correct-box__image">
                                <img src={CorrectImage} alt="correct icon" title="correct icon" />
                            </div>
                            <h3 className="">You are moving temporarily</h3>
                        </div>
                    </Col>
                    <Col sm={12} lg={6} md={6}>
                        <div className="correct-box">
                            <div className="correct-box__image">
                                <img src={CorrectImage} alt="correct icon" title="correct icon" />
                            </div>
                            <h3 className="">You are going to or returning from college</h3>
                        </div>
                    </Col>
                </Row>
            </div>


        </div>
    </section>
)