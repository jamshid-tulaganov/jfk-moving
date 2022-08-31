import React from "react";
import ContactPhone from "../../../assets/icons/ContactPhone";
import CallBackPhone from "../../../assets/icons/callBackPhone";
import Status from "../../../assets/icons/status";
import {NavLink} from "react-router-dom";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
//style
import "./style.css";

function HeaderNavBottom() {
    return(
      <section className="header-bottom__section">
           <div className='container'>
            {/*hr */}
            <Row className='header-bottom'>
                <Col className="header-bottom__column">
                    <div className="header_row__block">
                        <div className="block__icon block__icon--phone">
                            <ContactPhone fill='white' width={12} heigth={12}/>
                        </div>
                        <div className="block__txt">
                            <a href="tel:8881235665"> (888) 123 5665 </a>
                        </div>
                    </div>
                    <div className="header_row__block">
                        <div className="block__icon">
                            <CallBackPhone />
                        </div>
                        <div className="block__txt">
                            <a href="tel:8881235665"> Request call back</a>
                        </div>
                    </div>
                    <div className="header_row__block">
                        <div className="block__icon">
                            <Status />
                        </div>
                        <div className="block__txt">
                            My status
                        </div>
                    </div>
                </Col>
                <Col className="header_bottom__column ms-auto pe-0 d-flex justify-content-end">
                    <NavLink to="/choose">
                        <button className="header_button">Book Now</button>
                    </NavLink>
                </Col>
            </Row>
        </div>  
      </section>  
       
    )
}

export default HeaderNavBottom