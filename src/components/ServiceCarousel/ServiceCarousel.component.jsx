import React from "react";
import { Carousel, Container } from "react-bootstrap";
import ArrowRight from "../../assets/icons/arrowRight";
import ArrowLeft from "../../assets/icons/arrowLeft";
import feedback from "../../assets/images/feedback.png";
import Star from "../../assets/icons/star";
import OpenQuot from "../../assets/icons/openQuot";
import CloseQuot from "../../assets/icons/closeQuot";

function ServiceCarouselComponent() {
  return (
    <section className="service-carousel-component">
      <div className="container">
        <div className="carousel-heading d-flex flex-column align-center">
          <h1 className="localMoving-header text-center">
            What Our Customers Say.
          </h1>
          <p className="localMoving__description mx-auto carousel-txt">
            Through research and a thorough pre-screening process, our company
            ensures that you get the best deal for all of your moving needs.
          </p>
        </div>
        <div className="carousel-container">
          <Carousel
            interval={5000}
            indicators={false}
            nextIcon={
              <div className="icon">
                <div className="iconInd icon-1"></div>
                <ArrowRight className="arrowicon right-icon" />
              </div>
            }
            prevIcon={
              <div className="icon">
                <div className="iconInd icon-2"></div>
                <ArrowLeft className="arrowicon left-icon" />
              </div>
            }
            className="carousel-1"
          >
            {[1, 2, 3].map((item, index) => (
              <Carousel.Item key={index} className="slide">
                <div className="toolpat">
                  <img
                    src={feedback}
                    style={{ marginBottom: 20 }}
                    alt={feedback}
                  />
                  <h5>Raymond Galario</h5>
                  <div className="starBox">
                    {[1, 2, 3, 4, 5].map((item, index) => (
                      <Star className="star" key={index} />
                    ))}
                  </div>
                  <div className="quotCon ">
                    <OpenQuot className="quot1 " />
                    <p className="d-inline">
                      <OpenQuot className="quot1Mini" width={20} height={20} />
                      My movers were incredible. Totally smooth process,
                      accurate estimates and fantastic communication! They
                      checked on me before, during and after my move. Really
                      exceptional service!
                      <CloseQuot
                        className="quot2Mini "
                        width={20}
                        height={20}
                      />
                    </p>
                    <CloseQuot className="quot2 " />
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default ServiceCarouselComponent;
