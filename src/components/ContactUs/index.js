import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "./styles.css";

const ContactUs = () => {
  return (
   <section className="contactUs">
      <div className="container">
     
      <div className="contactUs-heading">
          <h1 className="titleText form--titleText text-center">Contact Us now</h1>    
          <p className="getText">Fill out the quote form or simply call us to receive outstanding
          moving solutions.</p>
      </div> 
      <div className="row d-flex justify-content-center">
        <div className="col-md-4 col-lg-3 contacts-btn ">
          <NavLink to={'/choose'}>
              <button className="book">Book a move</button>
          </NavLink>

        </div>
        <div className="col-md-4 col-lg-3 contacts-btn">
          <button className="number">
             <a href={'tel:18876713535'} className={'number__link'}> 1-(877) 671-3535 </a>
          </button>
        </div>
      </div>
    </div>
   </section>   
    
  );
};

export default ContactUs;
