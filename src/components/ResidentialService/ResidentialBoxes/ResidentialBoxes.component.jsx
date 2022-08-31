import React from "react";
import "./Residential.style.css";
import {Col, Row} from "react-bootstrap";

import Image1 from "../../../assets/images/servicePage/service/image-1.png";
import Image2 from "../../../assets/images/servicePage/service/image-2.png";
import Image3 from "../../../assets/images/servicePage/service/image-3.png";

function ResidentialBoxesComponent() {

    return (
        <section>
            <div className="container">
                <Row className='residential-boxes'>
                    <Col lg={12} md={12} sm={12} className='residential-box flex-column'>
                        <h2 className='residential-box__heading'>We move it all.</h2>
                        <p className="residential-box__txt">Don’t you just dream of having a simple residential relocation that will be filled with joy and pleasant memories? If you do, then you are only one phone call away from providing yourself with residential movers Los Angeles loves and respects. </p>
                        <img src={Image1} alt="person and box and cars"/>
                    </Col>
                    <Col lg={12} md={12} sm={12} className='residential-box flex-column'>
                        <h2 className='residential-box__heading'>Your Sofa.</h2>
                        <p className="residential-box__txt">
                            We are conditioned to think that every relocation (whether local or long-distance one) is inherently a stressful and complicated process. We here at Simple Moving believe that that kind of thinking is unfounded.
                        </p>
                        <img src={Image2} alt="person and box and cars"/>
                    </Col>
                    <Col lg={12} md={12} sm={12} className='residential-box flex-column'>
                        <h2 className='residential-box__heading'>Your living room</h2>
                        <p className="residential-box__txt">
                            When on the cusp of a household relocation in Los Angeles, we have no doubt that you will find yourself in need of good residential movers. Our team of Los Angeles residential movers isn’t a good one – it’s an excellent one. We didn’t want to leave anything up to chance, which is why we have hired high-quality movers only.
                        </p>
                        <img src={Image3} alt="person and box and cars"/>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default ResidentialBoxesComponent