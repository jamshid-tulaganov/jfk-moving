import React, {useState} from "react";
import "./style.css";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
//images
import LocalMoving from "../../assets/images/LocalMoving.png";
import LongMoving from "../../assets/images/LongMoving.png";
import ComMoving from "../../assets/images/ComMoving.png";
import ResMoving from "../../assets/images/ResMoving.png";
import truckWithBoxes from "../../assets/images/truck.png";

function MovingBoxes(props) {
    const [width, setWidth] = useState(window.innerWidth);
    setInterval(() => {
        setWidth(window.innerWidth);
    }, 500);

    const isMargin = {
        marginBottom : props.onlyBoxes ? '70px' : '260px'
    }

    return(
        <section>
            <div className='d-flex flex-column' style={isMargin}>
                <div className={props.onlyBoxes ? "movingBox-header" : ""}>
                     <h1 className={'movingBox-heading localMoving justify-content-center text-center'}>Moving can be stressful - We make it easy for you.</h1>
                    <p className={'movingBox-txt localMoving__description text-center'}>Through research and a thorough pre-screening process, our company ensures that you get the best deal for all of your moving needs
                                    We pride ourselves on having superior service at affordable rates that help you relocate with ease.</p>
                </div>
                <div className={props.onlyBoxes ? 'bg--change' : ''}>
                    <Row className={props.onlyBoxes ? 'box--bottom movingBoxes container mx-auto' : 'movingBoxes container mx-auto'}>
                            <Col lg={3} className={'MovingBox__block'}>
                                <img className={'movingBox__img box--img__1'} src={LocalMoving} alt="cars"/>
                                <h3 className={'movingBox__heading header--local'}>Local moving</h3>
                                <p className={'MovingBox__txt'}>The process of moving a vehicle can be stressful, but it doesn’t have to be.</p>
                                <button className={'MovingBox__btn'}>Read more</button>
                            </Col>
                            <Col lg={3} className={'MovingBox__block'}>
                                <img className={'movingBox__img commercial--res'} src={ComMoving} alt="boxes"/>
                                <h3 className={'movingBox__heading'}>Commercial moving</h3>
                                <p className={'MovingBox__txt commercial--txt'}>Having the right team helping you in a local move is crucial.</p>
                                <button className={'MovingBox__btn'}>Read more</button>
                            </Col>
                            <Col lg={3} className={'MovingBox__block'}>
                                <img className={'movingBox__img img--res'} src={ResMoving} alt="truck"/>
                                <h3 className={'movingBox__heading'}>Residention moving</h3>
                                <p className={'MovingBox__txt res--txt'}>Make your transition to a new office seamless and easy.</p>
                                <button className={'MovingBox__btn'}>Read more</button>
                            </Col>
                            <Col lg={3} className={'MovingBox__block'}>
                                <img className={'movingBox__img long--img '} src={LongMoving} alt="long truck"/>
                                <h3 className={'movingBox__heading'}>Long distance moving</h3>
                                <p className={'MovingBox__txt'}>Long-distance moves can be intimidating, but our team will help every step of the way.</p>
                                <button className={'MovingBox__btn'}>Read more</button>
                            </Col>
                        </Row>
                </div>
                
            </div>
            <div className={ props.onlyBoxes ? "d-none" : "letMoving d-flex align-items-center"}>
                <div className="container">
                    {width > 991 ? (
                        <div className="row truck-red">
                            <div className="col-lg-4  d-flex align-items-center">
                                <img src={truckWithBoxes} className="movingBox truck--image" alt={"boxes"} />
                            </div>
                            <div className="col-lg-5  d-flex align-items-center justify-content-center">
                                <h3 className="moveText">Let's get Moving!</h3>
                            </div>
                            <div className="col-lg-3  d-flex align-items-center justify-content-end">
                                <button className="book_quote">Book your Move</button>
                            </div>
                        </div>
                    ) : (
                        <div className="row d-flex justify-content-between">
                            <div className="col-lg-4 d-flex align-items-center justify-content-center">
                                <h3 className="moveText">Let's get Moving!</h3>
                            </div>
                            <div className="col-lg-4 d-flex align-items-start justify-content-center">
                                <img src={truckWithBoxes} className="movingBox" alt={"message-box"} />
                            </div>
                            <div className="col-lg-4 d-flex align-items-center justify-content-center">
                                <button className="book_quote">Get a quote</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>

    )
}

export default MovingBoxes