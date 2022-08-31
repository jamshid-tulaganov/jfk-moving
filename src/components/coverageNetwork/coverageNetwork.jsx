import React from "react";
import "./style.css";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";

import Alone from '../../assets/images/Alone.png';
import Markets from '../../assets/images/Markets.png';
import Proweb from '../../assets/images/proweb.png';
import Buffalo from '../../assets/images/Buffalo.png';
import Financial from '../../assets/images/Financial.png';
import Insider from '../../assets/images/Insider.png';
import Kitv from '../../assets/images/Kitv.png';
import Herald from '../../assets/images/Herald.png';
import Cision from '../../assets/images/Cision.png';
import Benzing from '../../assets/images/Benzing.png';
import News69 from "../../assets/images/News69.png";
import TownHall from "../../assets/images/Townhall.png";

function CoverageNetwork(props) {
    return(
        <section>
            <div className="container">
                <div className="coverage-network">
                    <h1 className="network-heading">Coverage Network</h1>
                    <Row className="network-boxes">
                        <Col lg={2} className={'network-box'}>
                            <img src={Alone} alt="network" className="network-images"/>
                        </Col>
                        <Col lg={2} className={'network-box'}>
                            <img src={Markets} alt="network" className="network-image"/>
                        </Col>
                        <Col lg={2} className={'network-box'}>
                            <img src={Proweb} alt="network" className="network-image"/>
                        </Col>
                        <Col lg={2} className={'network-box'}>
                            <img src={Buffalo} alt="network" className="network-image"/>
                        </Col>
                        <Col lg={2} className={'network-box'}>
                            <img src={Financial} alt="network" className="network-image"/>
                        </Col>
                        <Col lg={2} className={'network-box'}>
                            <img src={Insider} alt="network" className="network-image"/>
                        </Col>
                        <Col lg={2} className={'network-box'}>
                            <img src={Kitv} alt="network" className="network-image"/>
                        </Col>
                        <Col lg={2} className={'network-box'}>
                            <img src={Herald} alt="network" className="network-image"/>
                        </Col>
                        <Col lg={2} className={'network-box'}>
                            <img src={Cision} alt="network" className="network-image"/>
                        </Col>
                        <Col lg={2} className={'network-box'}>
                            <img src={Benzing} alt="network" className="network-image"/>
                        </Col>
                        <Col lg={2} className={'network-box'}>
                            <img src={TownHall} alt="network" className="network-image"/>
                        </Col>
                        <Col lg={2} className={'network-box'}>
                            <img src={News69} alt="network" className="network-image"/>
                        </Col>
                    </Row>
                </div>
            </div>

        </section>
        )
}

export default CoverageNetwork