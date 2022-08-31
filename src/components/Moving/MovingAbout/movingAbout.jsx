import React from "react";
import "./style.css";
import {Col, Row} from "react-bootstrap";
import firstImg from "../../../assets/images/howItWork/imageOne.png";
import secondImg from "../../../assets/images/howItWork/imageTwo.png";
import thirdImg from "../../../assets/images/howItWork/imageThree.png";

function MovingAbout() {
    return(
        <>
           <section className="movingAbout">
           <div className='container'>
                <Row className="movingAbout__header">
                      <Col lg={12}>
                          <h1 className={'movingAbout__heading localMoving-header text-center'} >Here's how it works.</h1>
                      </Col>
                      <Col lg={12}>
                           <p className={'movingAbout__info localMoving__description text-center'}>Through research and a thorough pre-screening process, our company ensures that you get the best deal for all of your moving needs.</p>
                      </Col>
                 </Row>
           </div>

         <div className="movingHeader__main">
            <Row className={'bg-img'}>
            
             <Col lg={12}>
                 <Row className='movingAbout-images'>
                     <Col className='movingAbout-img--first'>
                        <div className="movingAbout-column">
                            <img src={firstImg} alt="person and box" />
                        </div>
                     </Col>
                     <Col>
                          <div className="movingAbout-fact movingAbout--first">
                              <h3 className="fact__heading">Get a customized plan</h3>
                              <p className="fact__desc">Tell us what you need—either online or over the phone—and in fewer than 15 minutes we can match you with the most-qualified team for your move.</p>
                          </div>
                     </Col>
                 </Row>
             </Col>
             <Col lg={12}>
                 <Row className='movingAbout-images'>
                     <Col className='movingAbout-fact__second'>
                         <div className="movingAbout-fact movingAbout--second">
                             <h3 className="fact__heading">Enjoy the simplicity</h3>
                             <p className="fact__desc">Your lead JFK Moving pro will get in touch on the day of your service to let you know your team is on the way. Once they arrive, they’ll conduct a brief walk-through, take note of any special instructions, and then get to work.</p>
                         </div>
                     </Col>
                     <Col className='movingAbout-img--second'>
                        <div className="movingAbout-column">
                             <img src={secondImg} className='movingAbout-second__img' alt="a man is dropping a box" />
                        </div>
                     </Col>
                 </Row>
             </Col>
             <Col lg={12}>
                 <Row className='movingAbout-images'>
                     <Col className='movingAbout-img'>
                        <div className="movingAbout-column">
                            <img src={thirdImg} alt="mini truck and man" />
                        </div>
                     </Col>
                     <Col className='movingAbout-fact__third'>
                         <div className="movingAbout-fact">
                             <h3 className="fact__heading">Book your move</h3>
                             <p className="fact__desc">From the moment you make your reservation, you'll get practical tips and updates, including an introduction with pictures of your team so that you’re greeted by familiar faces on the day of your service.</p>
                         </div>
                     </Col>
                 </Row>
             </Col>
         </Row>
         </div>
         
           </section>
        </>
    )
}
export  default MovingAbout;