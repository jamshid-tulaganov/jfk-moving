import React, { useState } from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import GoBack from "../../assets/icons/goback";

function AboutCon() {
  return (
    <>
      <div className="about-page">
        <div className="container">
          <div className="row back-arrow">
            <div className="col-lg-12 d-flex align-items-start">
              <NavLink to="/calculate">
                <GoBack className="gobackicon" />
              </NavLink>
            </div>
          </div>

          <div className="about-component row d-flex justify-content-center">
            <div className="col-12 d-flex flex-column align-items-center">
              <p className="headTxt">About Us</p>
              <p className="descTextAbout">
                It all started when a limo driver was tried of driving and
                having high blood pressure in his blood. Doctors told him that
                he needed to do physical job to save his body.With a hand-drawn
                logo, advertisement in a local Craiglist, and advertising fund
                stashed in a ceramic dish, the endeavor was never expected to be
                more than a local moving company.
              </p>
              <p className="descTextAbout">
                Since opening our doors, we’ve been committed to providing
                service of the highest quality, paying particular attention to
                working efficiently while keeping the lines of communication
                with our clients clear and concise.
              </p>
              <p className="descTextAbout">
                Our mission at www.jfkmoving.com is simple: to provide
                high-quality services in a timely manner. Our team caters to
                each project’s specific needs to ensure excellence. We hope
                you’ll find what you’re looking for. For more information or
                general inquiries, feel free to get in touch today.
              </p>
              <p className="descTextAbout">
                No matter what type of move you're planning, or where you need
                to go, trust JFK Moving, LLC to make your relocation easier and
                more stress-free than you thought possible. Our highly-trained
                and experienced team has the excellent service and skills to
                handle virtually any move with ease. We've helped customers with
                their relocation needs and we look forward to making yours our
                next success story!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutCon;
