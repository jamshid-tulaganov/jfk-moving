import React from "react";
import "./HomeService.style.css";
import move1 from "../../../assets/images/move1.png";
import move2 from "../../../assets/images/move2.png";
import move3 from "../../../assets/images/move3.png";

const HomeServiceComponent = () => (
  <section className="home-service__section">
    <div className="container">
      <div className="home-service__header">
        <h1 className="titleText text-center">Hassle-Free Local Moving</h1>
        <p className="getTxt hereHowItWorks text-center mx-auto my-0">
          JFK Office Moving is the easiest way to organize your local move; get
          everything done on time, to budget and keep your office move project
          on track..
        </p>
      </div>
      <article className="home-service__block">
        <div className="row d-flex justify-content-around">
          <div className="col-sm-6 col-lg-6 home-img__first">
            <img src={move1} className="placeImages" alt="move-1" />
          </div>
          <div className="col-sm-6 col-lg-6  placeTextBox home-service__fact ms-auto">
            <h5> A move fit for you </h5>
            <p>
              Tell us what you need—either online or over the phone and in fewer
              than 15 minutes we can match you with the most-qualified team for
              your move.
            </p>
          </div>
        </div>
        <div className="row d-flex flex-rev align-items-end justify-content-around">
          <div className="col-sm-6 col-lg-6  placeTextBox">
            <h5>Movers from your community</h5>
            <p>
              Our moving experts often live in the communities where they work,
              so knowledge of the area plays to our advantage as we get you
              moved. From home moves to apartments, condos, townhouses, and
              high-rises – we have the experience in nearly every moving
              situation.
            </p>
          </div>
          <div className="col-sm-6 col-lg-6 home-img__second">
            <img src={move2} className="placeImages" alt={"images-3"} />
          </div>
        </div>
        <div className="row home-server__third">
          <div className="col-sm-6 col-lg-6 home-img__third ">
            <img src={move3} className="placeImages" alt="images" />
          </div>
          <div className="col-sm-6 col-lg-6  placeTextBox ms-auto">
            <h5>Down the street or across town</h5>
            <p>
              Tell us what you need—either online or over the phone and in fewer
              than 15 minutes we can match you with the most-qualified team for
              your move.
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
);

export default HomeServiceComponent;
