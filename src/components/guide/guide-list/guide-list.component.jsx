import React from "react";
import "./guide-list.style.css";
import {Row, Col} from "react-bootstrap";
import Image1 from "../../../assets/images/guide/guide-lists/image_1.png";
import Image2 from "../../../assets/images/guide/guide-lists/image_2.png";
import Image3 from "../../../assets/images/guide/guide-lists/image_3.png";
import Image4 from "../../../assets/images/guide/guide-lists/image_4.png";
import Image5 from "../../../assets/images/guide/guide-lists/image_5.png";

class GuideListComponent extends React.Component<{}> {
    render() {
        return (
            <>
                <div className="container">
                    <div className="guide-heading">
                        <h1 className='guide-header headTxt'>Your Moving to-do list</h1>
                    </div>
                    <Row className='guide-tips'>
                        <Col lg={6} md={6} sm={12} className='guide-tips__content'>
                            <div className="guide-tips__img tips-content__column">
                                <span className='guide-tips__index'>01</span>
                                <img src={Image1} alt="checklist"/>
                            </div>
                            <div className="guide-tips__info tips-content__column">
                                <h3 className="guide-tips__heading guide-content__header">A month before the move</h3>
                                <ul className="guide-lists">
                                    <li className="guide-list__item guide-content__text">
                                        Reserve a moving company for your move as soon as you know you are moving. If
                                        you need packing assistance, JFK Moving can also pack up your house, apartment,
                                        or condo for you.
                                    </li>
                                    <li className="guide-list__item guide-content__text">Visit your local JFK Moving to
                                        purchase moving boxes and necessary packing supplies.
                                    </li>
                                    <li className="guide-list__item guide-content__text">Start to clean out closets, the
                                        garage, and attic.
                                    </li>
                                    <li className="guide-list__item guide-content__text">Host a garage sale or donate
                                        your unwanted things to charity.
                                    </li>
                                    <li className="guide-list__item guide-content__text">Arrange to transfer school
                                        records.
                                    </li>
                                    <li className="guide-list__item guide-content__text">Get change of address cards
                                        from your local post office or change your address online.
                                    </li>
                                    <li className="guide-list__item guide-content__text">Notify magazines, charge
                                        accounts, insurance companies, clubs, and all other organizations of your change
                                        of address.
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} className='guide-tips__content'>
                            <div className="guide-tips__img tips-content__column">
                                <span className='guide-tips__index'>01</span>
                                <img src={Image2} alt="checklist"/>
                            </div>
                            <div className="guide-tips__info tips-content__column">
                                <h3 className="guide-tips__heading guide-content__header">Two weeks before the move</h3>
                                <ul className="guide-lists">
                                    <li className="guide-list__item guide-content__text">
                                        Make a "survival closet" of things you will need for the final clean-up and
                                        include snacks for the last day.
                                    </li>
                                    <li className="guide-list__item guide-content__text">
                                        If you decide to pack yourself, label all moving boxes as you pack. Write the
                                        destination room on the top and sides of each moving box to ensure it gets to
                                        the right place in your new home. If you’re pressed for time, or overwhelmed
                                        with packing, JFK Moving offers full-service packing.
                                    </li>

                                    <li className="guide-list__item guide-content__text">Schedule disconnects for utilities such as gas, electric, water and the telephone. If you have a landline, do not disconnect it until after your move. Arrange for refunds that are due, and schedule connections for your new residence.
                                    </li>
                                    <li className="guide-list__item guide-content__text">Cancel newspapers, Internet, cable TV, security, pest control, cleaning help, lawn maintenance, and any other services you receive.
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} className='guide-tips__content'>
                            <div className="guide-tips__img tips-content__column">
                                <span className='guide-tips__index'>03</span>
                                <img src={Image3} alt="checklist"/>
                            </div>
                            <div className="guide-tips__info tips-content__column">
                                <h3 className="guide-tips__heading guide-content__header">The week of the move</h3>
                                <ul className="guide-lists">
                                    <li className="guide-list__item guide-content__text">
                                        Mail in your change of address forms.
                                    </li>
                                    <li className="guide-list__item guide-content__text">Clean the stove and finish up any last minute cleaning before move day.
                                    </li>
                                    <li className="guide-list__item guide-content__text">Finish up packing and be sure all items are
                                        boxed and ready to go prior to the movers’ arrival.
                                    </li>
                                    <li className="guide-list__item guide-content__text">
                                        Think about where your kids and pets will be during the time of the move, and if necessary, plan for them to go to a relative or friend’s house during that time.
                                    </li>
                                    <li className="guide-list__item guide-content__text">
                                        Ensure you have transportation to your new home for yourself, family, and pets.
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} className='guide-tips__content'>
                            <div className="guide-tips__img tips-content__column">
                                <span className='guide-tips__index'>04</span>
                                <img src={Image4} alt="checklist"/>
                            </div>
                            <div className="guide-tips__info tips-content__column">
                                <h3 className="guide-tips__heading guide-content__header">The day before the move</h3>
                                <ul className="guide-lists">
                                    <li className="guide-list__item guide-content__text">
                                        Read through the official JFK Moving pre-move email to ensure you’re up-to-date on everything that will take place when the movers arrive.
                                    </li>
                                    <li className="guide-list__item guide-content__text">
                                        Ensure all breakables have been removed from dresser drawers and packed away properly.
                                    </li>
                                    <li className="guide-list__item guide-content__text">Gather firearms or ammunition to be moved yourself,
                                        as these items cannot be transported by JFK Moving
                                    </li>
                                    <li className="guide-list__item guide-content__text">
                                        Clean the refrigerator, then defrost and dry.
                                    </li>
                                    <li className="guide-list__item guide-content__text">
                                        Get enough cash to tide you over. Cash comes in handy if you need to order pizza during your move, or dinner in your new place!
                                    </li>
                                    <li className="guide-list__item guide-content__text">
                                        Say goodbye to your neighbors!
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} className='guide-tips__content'>
                            <div className="guide-tips__img tips-content__column">
                                <span className='guide-tips__index'>05</span>
                                <img src={Image5} alt="checklist"/>
                            </div>
                            <div className="guide-tips__info tips-content__column">
                                <h3 className="guide-tips__heading guide-content__header">Day of the move</h3>
                                <ul className="guide-lists">
                                    <li className="guide-list__item guide-content__text">
                                        Create a safe path for the movers to navigate by clearing your driveway of objects, snow, or ice.
                                    </li>
                                    <li className="guide-list__item guide-content__text">
                                        Pack your suitcase and day of the move box with all necessary essentials
                                        to get you through the next few days in case you don’t get to unpacking right away.
                                    </li>
                                    <li className="guide-list__item guide-content__text">
                                        Be sure you’re present when the movers arrive so you can walk them through the home and indicate
                                        what you need moved or anything in particular they should be aware of.
                                    </li>
                                    <li className="guide-list__item guide-content__text">
                                        Once all belongings are loaded onto the moving truck, be sure to do one more walkthrough and
                                        lock all windows and outside doors, in addition to checking all lights and your thermostat are off before heading to your new home.
                                    </li>

                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}

export default GuideListComponent;