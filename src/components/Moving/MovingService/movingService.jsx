import React from "react";
import "./style.css"
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import storage from "../../../assets/images/service/storage.png";
import boxesInService from "../../../assets/images/service/boxes.png";
import serviceSupply from "../../../assets/images/service/supply.png";
import pianoImg from "../../../assets/images/service/piano.png";

function MovingService() {
    return(
        <>
            <div className={'container margin--service d-flex flex-column'}>
                <Row>
                    <Col lg={12}>
                        <Row className={'movingBox-heading'}>
                            <Col lg={12}>
                                <h1 className={'movingBox-heading localMoving justify-content-center margin-top margin-top-20 text-center'}>Moving Services</h1>
                            </Col>
                            <Col lg={12}>
                                <p className={'movingBox-txt localMoving__description text-center'}>Moving is more than boxes and trucks.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={12}>
                        <Row className={'movingBoxes'}>
                            <Col lg={3} className={'MovingBox__block'}>
                                <img className={'movingBox__img storage--img'} src={storage} alt="cars"/>
                                <h3 className={'movingBox__heading'}>Storage</h3>
                                <p className={'MovingBox__txt'}>The process of moving a vehicle can be stressful, but it doesn’t have to be.</p>
                                <button className={'MovingBox__btn'}>Quick view</button>
                            </Col>
                            <Col lg={3} className={'MovingBox__block'}>
                                <img className={'movingBox__img packing--img'} src={boxesInService} alt="boxes"/>
                                <h3 className={'movingBox__heading packing--margin'}>Packing & Unpacking</h3>
                                <p className={'MovingBox__txt commercial--txt'}>Having the right team helping you in a local move is crucial.</p>
                                <button className={'MovingBox__btn'}>Quick view</button>
                            </Col>
                            <Col lg={3} className={'MovingBox__block'}>
                                <img className={'movingBox__img supply--img'} src={serviceSupply} alt="truck"/>
                                <h3 className={'movingBox__heading'}>Box and Supplies</h3>
                                <p className={'MovingBox__txt res--txt'}>Make your transition to a new office seamless and easy.</p>
                                <button className={'MovingBox__btn'}>Quick view</button>
                            </Col>
                            <Col lg={3} className={'MovingBox__block'}>
                                <img className={'movingBox__img piano--img'} src={pianoImg} alt="long truck"/>
                                <h3 className={'movingBox__heading'}>Piano & Pool Table</h3>
                                <p className={'MovingBox__txt'}>Long-distance moves can be intimidating, but our team will help every step of the way.</p>
                                <button className={'MovingBox__btn'}>Quick view</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default MovingService