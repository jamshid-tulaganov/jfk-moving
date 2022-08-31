import React from "react";
import "./style.css";
import Home from "../../assets/icons/home";
import Service from "../../assets/icons/service";
import Price from "../../assets/icons/price";
import BookBoxesComponent from "../bookBoxes/bookBoxes.component";
import ServiceCarouselComponent from "../ServiceCarousel/ServiceCarousel.component";

function Main() {
  // const [width, setWidth] = useState(window.innerWidth);

  // setInterval(() => {
  //   setWidth(window.innerWidth);
  // }, 500);

  return (
    <section className="local-content">
      <div className="container">
        <div className="row">
          <div className="col-12 local-content__header flex  flex-column align-items-center">
            <h2 className="titleText local-content__title">
              It's time to expect more from your movers.
            </h2>
            <p className="getTxt local-desc">
              Through research and a thorough pre-screening process, our company
              ensures that you get the best deal for all of your moving needs.
              We pride ourselves on having superior service at affordable rates
              that help you relocate with ease.
            </p>
          </div>
        </div>
        <div className="row local-content__row d-flex justify-content-around">
          <div className="col-lg-3 col-md-4 margin-top-20 advanced--column">
            <Home className="iconMargin" />
            <h4 className="textAverage">Easy To Book</h4>
            <p className="getTxt text-center mb-0">
              In just a few minutes online or over the phone, you can reserve
              your move without the need for an in-home estimate.
            </p>
          </div>
          <div className="col-lg-3 col-md-4 margin-top-20 advanced--column">
            <Service className="iconMargin" />
            <h4 className="textAverage">Customized service</h4>
            <p className="getTxt text-center mb-0">
              In just a few minutes online or over the phone, you can reserve
              your move without the need for an in-home estimate.
            </p>
          </div>
          <div className="col-lg-3 col-md-4 margin-top-20 advanced--column">
            <Price className="iconMargin" />
            <h4 className="textAverage">Worry-free pricing</h4>
            <p className="getTxt text-center mb-0">
              In just a few minutes online or over the phone, you can reserve
              your move without the need for an in-home estimate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
