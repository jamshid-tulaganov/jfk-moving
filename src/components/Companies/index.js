import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";

const Companies = (props) => {
  return (
    <div className={props.isHeaderExist ? 'companiesCon--bg' : ''}>
      <div className={props.isHeaderExist ? 'companiesCon companiesCon--bg container' : 'companiesCon container'}>

        <div className={props.isHeaderExist ? 'client-company' : 'd-none'}>
          <h1 className="client-company__header headTxt">Top Rated</h1>
          <p className="client-company__info descText">Fill out the quote form or simply call us to receive outstanding moving solutions.</p>
        </div>

        <Row className="d-flex justify-content-around" >
          <Col lg={2} xs={4} >
            <img className="companyImage" alt="yelp" src={require("../../assets/images/yelp.png")} />
          </Col>
          <Col lg={2} xs={4} >
            <img className="companyImage" alt="BBB" src={require("../../assets/images/bbb.png")} />
          </Col>
          <Col lg={2} xs={4} >
            <img className="companyImage"
                 alt="facebook"
                 src={require("../../assets/images/facebook.png")}
            />
          </Col>
          <Col lg={2} xs={4} >
            <img className="companyImage" alt="google" src={require("../../assets/images/google.png")} />
          </Col>
          <Col lg={2} xs={4} >
            <img className="companyImage"
                 alt="home advisor"
                 src={require("../../assets/images/advisor.png")}
            />
          </Col>
        </Row>
      </div>
    </div>

  );
};

export default Companies;

