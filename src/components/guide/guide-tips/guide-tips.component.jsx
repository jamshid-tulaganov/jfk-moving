import React from "react";
import "./guide-tips.style.css";
import {Row, Col} from "react-bootstrap";
import Image1 from "../../../assets/images/guide/guide-tips/image_1.svg";
import Image2 from "../../../assets/images/guide/guide-tips/image_2.png";
import Image3 from "../../../assets/images/guide/guide-tips/image_3.png";
import Image4 from "../../../assets/images/guide/guide-tips/image_4.png";
import Image5 from "../../../assets/images/guide/guide-tips/image-5.png";
import Image6 from "../../../assets/images/guide/guide-tips/image_6.png";
import Image7 from "../../../assets/images/guide/guide-tips/image_7.png";
import Image8 from "../../../assets/images/guide/guide-tips/image_8.png";
import Image9 from "../../../assets/images/guide/guide-tips/image_9.png";
import Image10 from "../../../assets/images/guide/guide-tips/image_10.png"

function GuideTipsComponent() {
    return (
        <>
            <div className="container">
                <div className="guide-heading">
                    <h1 className='guide-header headTxt'>Moving Tips</h1>
                </div>
                <Row className='guide-tips'>
                    <Col lg={6} md={6} sm={12} className='guide-tips__content'>
                        <div className="guide-tips__img tips-content__column">
                            <span className='guide-tips__index'>01</span>
                            <img src={Image1} alt="checklist"/>
                        </div>
                        <div className="guide-tips__info tips-content__column">
                            <h3 className="guide-tips__heading guide-content__header">Make a list</h3>
                            <p className="guide-tips__txt guide-content__text">Go through every room of your house and decide what you’d like to keep and what you can get rid of. Think about whether any items will require special packing or extra insurance coverage.</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='guide-tips__content'>
                        <div className="guide-tips__img tips-content__column">
                            <span className='guide-tips__index'>02</span>
                            <img src={Image2} alt="checklist"/>
                        </div>
                        <div className="guide-tips__info tips-content__column">
                            <h3 className="guide-tips__headingd guide-content__header">Have plenty of supplies</h3>
                            <p className="guide-tips__txt guide-content__text">
                                We have the experience and skills necessary to tackle just about every type of job that comes our way. With www.jfkmoving.com, clients know exactly what to expect - professionalism, efficiency and exceptional results.
                            </p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='guide-tips__content'>
                        <div className="guide-tips__img tips-content__column">
                            <span className='guide-tips__index'>03</span>
                            <img src={Image3} alt="checklist"/>
                        </div>
                        <div className="guide-tips__info tips-content__column">
                            <h3 className="guide-tips__heading guide-content__header">Take measurements</h3>
                            <p className="guide-tips__txt guide-content__text">
                                Check room dimensions at your new home, if possible, and make sure larger pieces of furniture will fit through the door.
                            </p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='guide-tips__content'>
                        <div className="guide-tips__img tips-content__column">
                            <span className='guide-tips__index'>04</span>
                            <img src={Image4} alt="checklist"/>
                        </div>
                        <div className="guide-tips__info tips-content__column">
                            <h3 className="guide-tips__heading guide-content__header">Separate valuables</h3>
                            <p className="guide-tips__txt guide-content__text">
                                Add expensive items such as jewelry and important files to a safe box that you’ll personally transport to your new home. Make sure to put the mover’s estimate in this box. You’ll need it for reference on moving day.
                           </p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='guide-tips__content'>
                        <div className="guide-tips__img tips-content__column">
                            <span className='guide-tips__index'>05</span>
                            <img src={Image5} alt="checklist"/>
                        </div>
                        <div className="guide-tips__info tips-content__column">
                            <h3 className="guide-tips__heading guide-content__header">Double-check</h3>
                            <p className="guide-tips__txt guide-content__text">
                                Reconfirm the moving company’s arrival time and other specifics and make sure you have prepared exact, written directions to your new home for the staff. Include contact information, such as your cell phone number.
                           </p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='guide-tips__content'>
                        <div className="guide-tips__img tips-content__column">
                            <span className='guide-tips__index'>06</span>
                            <img src={Image6} alt="checklist"/>
                        </div>
                        <div className="guide-tips__info tips-content__column">
                            <h3 className="guide-tips__heading guide-content__header">Utilize wardrobe boxes</h3>
                            <p className="guide-tips__txt guide-content__text">
                                Order boxes and other supplies such as tape, Bubble Wrap, and permanent markers. Don’t forget to order specialty containers, such as dish barrels or wardrobe boxes.
                            </p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='guide-tips__content'>
                        <div className="guide-tips__img tips-content__column">
                            <span className='guide-tips__index'>07</span>
                            <img src={Image7} alt="checklist"/>
                        </div>
                        <div className="guide-tips__info tips-content__column">
                            <h3 className="guide-tips__heading guide-content__header">Color coordinate</h3>
                            <p className="guide-tips__txt guide-content__text">
                                Clearly label and number each box with its contents and the room it’s destined for. This will help you to keep an inventory of your belongings. Pack and label “essentials” boxes of items you’ll need right away.
                           </p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='guide-tips__content'>
                        <div className="guide-tips__img tips-content__column">
                            <span className='guide-tips__index'>08</span>
                            <img src={Image8} alt="checklist"/>
                        </div>
                        <div className="guide-tips__info tips-content__column">
                            <h3 className="guide-tips__heading guide-content__header">Take inventory</h3>
                            <p className="guide-tips__txt guide-content__text">
                                Before the Movers leave your place, please sign the bill of lading/inventory list and keep a copy.
                           </p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='guide-tips__content'>
                        <div className="guide-tips__img tips-content__column">
                            <span className='guide-tips__index'>09</span>
                            <img src={Image9} alt="checklist"/>
                        </div>
                        <div className="guide-tips__info tips-content__column">
                            <h3 className="guide-tips__heading guide-content__header">Verify</h3>
                            <p className="guide-tips__txt guide-content__text">
                                Make sure that the moving truck that shows up is from the company you hired: The US. DOT number painted on its side should match the number on the estimate you were given. Additionally, you can check if the moving truck has the company's branding, or vehicle number that was listed in your confirmation. Scams are not unheard-of.
                            </p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='guide-tips__content'>
                        <div className="guide-tips__img tips-content__column">
                            <span className='guide-tips__index'>10</span>
                            <img src={Image10} alt="checklist"/>
                        </div>
                        <div className="guide-tips__info tips-content__column">
                            <h3 className="guide-tips__heading guide-content__header">Choose your Moving company and confirm the arrangements</h3>
                            <p className="guide-tips__txt guide-content__text">
                                Select a company and get written confirmation of your moving date, costs, and other details.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export  default GuideTipsComponent;