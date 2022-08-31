import React from "react";
import "./carousel.style.css";
import ArrowRight from "../../../assets/icons/arrowRight";
import ArrowLeft from "../../../assets/icons/arrowLeft";
import feedback from "../../../assets/images/feedback.png";
import Star from "../../../assets/icons/star";
import OpenQuot from "../../../assets/icons/openQuot";
import CloseQuot from "../../../assets/icons/closeQuot";
import {Container} from "react-bootstrap";
import {Carousel} from "react-bootstrap";
function CarouselComponent({heading, description}) {
    return(
        <>
            <div className="container">
                <div className="row carousel-header">
                    <div className="col-12 flex-column align-items-center">
                        <h3 className="titleText mt-0">{heading}</h3>
                        <p className="descText descText--width">{description}</p>
                    </div>
                </div>
            </div>
            <Container>
                <div className="carousel-container">
                    <Carousel
                        interval={5000}
                        indicators={false}
                        nextIcon={
                            <div className="icon">
                                <div className="iconInd icon-1">
                                </div>
                                <ArrowRight className="arrowicon right-icon" />
                            </div>
                        }
                        prevIcon={
                            <div className="icon">
                                <div className="iconInd icon-2">

                                </div>
                                <ArrowLeft className="arrowicon left-icon" />
                            </div>
                        }
                        className="carousel-1"
                    >
                        {[1, 2, 3].map((item, index) => (
                            <Carousel.Item key={index} className="slide">
                                <div className="toolpat">
                                    <img src={feedback} style={{ marginBottom: 20 }} alt={feedback} />
                                    <h5>Raymond Galario</h5>
                                    <div className="starBox">
                                        {[1, 2, 3, 4, 5].map((item, index) => (
                                            <Star className="star" key={index} />
                                        ))}
                                    </div>
                                    <div className="quotCon">
                                        <OpenQuot className="quot1 " />
                                        <p className="d-inline px-2" >
                                            <OpenQuot className="quot1Mini" width={20} height={20} />
                                            What a great experience! We moved from Forney to Greenville last week, and it was a two-day move from one two-story home to another. Einstein Moving Company was very upfront about pricing, had great communication, and I can’t say enough good things about the guys they sent out.
                                            <CloseQuot className="quot2Mini " width={20} height={20} />
                                        </p>
                                        <CloseQuot className="quot2 " />
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </Container>
        </>
    )
}
export default CarouselComponent