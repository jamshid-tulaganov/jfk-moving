import React from "react";
import {Row, Col} from "react-bootstrap";

import Image1 from "../../assets/images/servicePage/longDistance/box_1.png";
import Image2 from "../../assets/images/servicePage/longDistance/box_2.png";
import Image3 from "../../assets/images/servicePage/longDistance/box_3.png";


function LongDistanceBoxComponent() {
  return (
    <>
      <div className="container">
                <Row className="localMoving justify-content-center margin-top margin-top-20 text-center">
                    <p className="localMoving-header">Expect more from your long distance movers.</p>
                    <p className="localMoving__description text-center apartment-heading">
                    Through research and a thorough pre-screening process, our company ensures that you get the best deal for all of your moving needs. We pride ourselves on having superior service at affordable rates that help you relocate with ease.
                    </p>
                </Row>
                <Row>
                    <Col sm={12} xl={4} lg={4} md={4} className='apartment-block'>
                        <div className="apartment-box">
                            <img src={Image1} alt="box calendar"/>
                        </div>
                        <h4 className='apartment-header'>Clean Trucks</h4>
                        <p className='apartment-desc'>Well maintained and wide selections of truck sizes.</p>
                    </Col>
                    <Col sm={12} xl={4} lg={4} md={4} className='apartment-block'>
                        <div className="apartment-box">
                            <img src={Image2} alt="box location"/>
                        </div>
                        <h4 className='apartment-header'>Guaranteed moving</h4>
                        <p className='apartment-desc'>Don't worry about sharing your truck space or move-day with anyone else</p>
                    </Col>
                    <Col sm={12} xl={4} lg={4} md={4} className='apartment-block'>
                        <div className="apartment-box">
                            <img src={Image3} alt="box book"/>
                        </div>
                        <h4 className='apartment-header'>Pickup and delivery</h4>
                        <p className='apartment-desc'>Don't worry about sharing your truck space or move-day with anyone else</p>
                    </Col>
                </Row>
            </div>
    </>
  )
}

export default LongDistanceBoxComponent