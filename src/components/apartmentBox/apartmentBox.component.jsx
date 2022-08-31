import React from "react";
import "./apartmentBox.style.css";
import {Row, Col} from "react-bootstrap";
import CalenderImage from "../../assets/images/servicePage/boxes/calendar.png";
import LocationImage from "../../assets/images/servicePage/boxes/location.png";
import BookImage from "../../assets/images/servicePage/boxes/book.png";

function ApartmentBoxComponent({header, description}) {
    return (
        <section className="apartment-main">
            <div className="container">
                <div className="localMoving justify-content-center align-items-center flex-column text-center">
                    <h1 className="localMoving-header">{ header }</h1>
                    <p className="localMoving__description text-center apartment-heading">{ description }</p>
                </div>
                <Row>
                    <Col sm={12} xl={4} lg={4} md={4} className='apartment-block'>
                        <div className="apartment-box">
                            <img src={CalenderImage} alt="box calendar"/>
                        </div>
                        <h4 className='apartment-header'>Within minutes</h4>
                        <p className='apartment-desc'>Don't worry about sharing your truck space or move-day with anyone else</p>
                    </Col>
                    <Col sm={12} xl={4} lg={4} md={4} className='apartment-block'>
                        <div className="apartment-box">
                            <img src={LocationImage} alt="box location"/>
                        </div>
                        <h4 className='apartment-header'>Within minutes</h4>
                        <p className='apartment-desc'>Don't worry about sharing your truck space or move-day with anyone else</p>
                    </Col>
                    <Col sm={12} xl={4} lg={4} md={4} className='apartment-block'>
                        <div className="apartment-box">
                            <img src={BookImage} alt="box book"/>
                        </div>
                        <h4 className='apartment-header'>Within minutes</h4>
                        <p className='apartment-desc'>Don't worry about sharing your truck space or move-day with anyone else</p>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default ApartmentBoxComponent