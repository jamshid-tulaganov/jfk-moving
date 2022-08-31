import React from "react";
import "./license.style.css";
import {Row, Col} from "react-bootstrap";
import PdfImage from "../../assets/images/pdf.png";

function LicenseComponent() {

    return (
        <section className='license'>
            <div className="container">
                <div className="guide-heading">
                    <h1 className="license__header guide-header headTxt">Check our License and Insurance</h1>
                </div>
                <Row className='license-row'>
                    <Col lg={4} md={4} xl={4}>
                        <div className="license-content">
                            <div className="license-content__img">
                                <img src={PdfImage} alt="pdf file images"/>
                            </div>
                            <h3 className="license-content__header">DOT License</h3>
                            <button className="license-content__btn MovingBox__btn" type='button'>
                                View
                            </button>
                        </div>
                    </Col>
                    <Col lg={4} md={4} xl={4}>
                        <div className="license-content">
                            <div className="license-content__img">
                                <img src={PdfImage} alt="pdf file images"/>
                            </div>
                            <h3 className="license-content__header">DOT License</h3>
                            <button className="license-content__btn MovingBox__btn" type='button'>
                                View
                            </button>
                        </div>
                    </Col>
                    <Col lg={4} md={4} xl={4}>
                        <div className="license-content">
                            <div className="license-content__img">
                                <img src={PdfImage} alt="pdf file images"/>
                            </div>
                            <h3 className="license-content__header">DOT License</h3>
                            <button className="license-content__btn MovingBox__btn" type='button'>
                                View
                            </button>
                        </div>
                    </Col>
                    <Col lg={4} md={4} xl={4}>
                        <div className="license-content">
                            <div className="license-content__img">
                                <img src={PdfImage} alt="pdf file images"/>
                            </div>
                            <h3 className="license-content__header">DOT License</h3>
                            <button className="license-content__btn MovingBox__btn" type='button'>
                                View
                            </button>
                        </div>
                    </Col>
                    <Col lg={4} md={4} xl={4}>
                        <div className="license-content">
                            <div className="license-content__img">
                                <img src={PdfImage} alt="pdf file images"/>
                            </div>
                            <h3 className="license-content__header">DOT License</h3>
                            <button className="license-content__btn MovingBox__btn" type='button'>
                                View
                            </button>
                        </div>
                    </Col>
                    <Col lg={4} md={4} xl={4}>
                        <div className="license-content">
                            <div className="license-content__img">
                                <img src={PdfImage} alt="pdf file images"/>
                            </div>
                            <h3 className="license-content__header">DOT License</h3>
                            <button className="license-content__btn MovingBox__btn" type='button'>
                                View
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>

            
        </section>
    )
}

export default LicenseComponent