import React from "react";
import {Row, Col} from "react-bootstrap";

import Image1 from "../../../assets/images/servicePage/commercial/image1.png";
import Image2 from "../../../assets/images/servicePage/commercial/image2.png";
import Image3 from "../../../assets/images/servicePage/commercial/image3.png";


function CommercialBoxesComponent() {
    return (
        <>
                <div className="container">
                      <Row className='commercial-boxes residential-boxes'>
                          <Col lg={12} md={12} sm={12} className='residential-box flex-column'>
                              <h2 className='residential-box__heading'>We move your office.</h2>
                              <p className="residential-box__txt">Don’t you just dream of having a simple residential relocation that will be filled with joy and pleasant memories? If you do, then you are only one phone call away from providing yourself with residential movers Los Angeles loves and respects. </p>
                              <img src={Image1} alt="person and box and cars"/>
                          </Col>
                          <Col lg={12} md={12} sm={12} className='residential-box flex-column'>
                              <h2 className='residential-box__heading'>Office furniture</h2>
                              <p className="residential-box__txt">
                              JFK Office Moving is the easiest way to organize your physical office move; get everything done on time, to budget and keep your office move project on track.
                              </p>
                              <img src={Image2} alt="person and box and cars"/>
                          </Col>
                          <Col lg={12} md={12} sm={12} className='residential-box flex-column'>
                              <h2 className='residential-box__heading'>Your workplace</h2>
                              <p className="residential-box__txt">
                              Los Angeles local movers isn’t a good one – it’s an excellent one. We didn’t want to leave anything up to chance, which is why we have hired high-quality movers only. 
                              </p>
                              <img src={Image3} alt="person and box and cars"/>
                          </Col>
                      </Row>
                  </div>
         </>
    )
}

export default CommercialBoxesComponent