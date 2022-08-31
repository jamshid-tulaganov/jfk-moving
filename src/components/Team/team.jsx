import React from "react";
import "./style.css";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import memberImage from "../../assets/images/employments/member.png";
import Phone from "../../assets/icons/phone";
import ContactPhone from "../../assets/icons/ContactPhone";
import ContactEmail from "../../assets/icons/ContactEmail";
import Person from "../../assets/icons/person";

function Team() {
    return(
        <>
          <div className="container team--container">
              <div className="team-heading">
                  <h1 className="team-header headTxt">JFK Moving Team</h1>
                  <p className="team-info descText">The story begins with the dream of three best friends who worked together in the moving business for more than six years. They wanted to start a company of their own, so they established Royal moving in 2022, and through their hard work and a dedication to serving the customer, their dream became Los Angeles #1 moving company.</p>
              </div>
              <Row>
                  <Col lg={3} md={3} sm={4} xs={12} >
                      <div className="team-member">
                          <div className="member__img">
                              <img src={memberImage} alt="team member image"/>
                          </div>
                          <h3 className="member__header">Benjamin Isabella</h3>
                          <p className="member__job">UX / UI Designer</p>
                          <div className="member__info d-flex align-items-center flex-column">
                              <a href="tel:4255553333" className="member__info-phone">
                                <ContactPhone />
                                  425 555 3333
                              </a>
                              <a href="mailto:eddieking@great.com" className="member__info-email">
                                  <ContactEmail />
                                  eddieking@great.com
                              </a>
                              <div className="member__info-person">
                                  <Person />
                                  Helper
                              </div>
                          </div>
                      </div>
                  </Col>
                  <Col lg={3} md={3} sm={4} xs={12} >
                      <div className="team-member">
                          <div className="member__img">
                              <img src={memberImage} alt="team member image"/>
                          </div>
                          <h3 className="member__header">Benjamin Isabella</h3>
                          <p className="member__job">UX / UI Designer</p>
                          <div className="member__info d-flex align-items-center flex-column">
                              <a href="tel:4255553333" className="member__info-phone">
                                  <ContactPhone />
                                  425 555 3333
                              </a>
                              <a href="mailto:eddieking@great.com" className="member__info-email">
                                  <ContactEmail />
                                  eddieking@great.com
                              </a>
                              <div className="member__info-person">
                                  <Person />
                                  Helper
                              </div>
                          </div>
                      </div>
                  </Col>
                  <Col lg={3} md={3} sm={4} xs={12} >
                      <div className="team-member">
                          <div className="member__img">
                              <img src={memberImage} alt="team member image"/>
                          </div>
                          <h3 className="member__header">Benjamin Isabella</h3>
                          <p className="member__job">UX / UI Designer</p>
                          <div className="member__info d-flex align-items-center flex-column">
                              <a href="tel:4255553333" className="member__info-phone">
                                  <ContactPhone />
                                  425 555 3333
                              </a>
                              <a href="mailto:eddieking@great.com" className="member__info-email">
                                  <ContactEmail />
                                  eddieking@great.com
                              </a>
                              <div className="member__info-person">
                                  <Person />
                                  Helper
                              </div>
                          </div>
                      </div>
                  </Col>
                  <Col lg={3} md={3} sm={4} xs={12} >
                      <div className="team-member">
                          <div className="member__img">
                              <img src={memberImage} alt="team member image"/>
                          </div>
                          <h3 className="member__header">Benjamin Isabella</h3>
                          <p className="member__job">UX / UI Designer</p>
                          <div className="member__info d-flex align-items-center flex-column">
                              <a href="tel:4255553333" className="member__info-phone">
                                  <ContactPhone />
                                  425 555 3333
                              </a>
                              <a href="mailto:eddieking@great.com" className="member__info-email">
                                  <ContactEmail />
                                  eddieking@great.com
                              </a>
                              <div className="member__info-person">
                                  <Person />
                                  Helper
                              </div>
                          </div>
                      </div>
                  </Col>
                  <Col lg={3} md={3} sm={4} xs={12} >
                      <div className="team-member">
                          <div className="member__img">
                              <img src={memberImage} alt="team member image"/>
                          </div>
                          <h3 className="member__header">Benjamin Isabella</h3>
                          <p className="member__job">UX / UI Designer</p>
                          <div className="member__info d-flex align-items-center flex-column">
                              <a href="tel:4255553333" className="member__info-phone">
                                  <ContactPhone />
                                  425 555 3333
                              </a>
                              <a href="mailto:eddieking@great.com" className="member__info-email">
                                  <ContactEmail />
                                  eddieking@great.com
                              </a>
                              <div className="member__info-person">
                                  <Person />
                                  Helper
                              </div>
                          </div>
                      </div>
                  </Col>
                  <Col lg={3} md={3} sm={4} xs={12} >
                      <div className="team-member">
                          <div className="member__img">
                              <img src={memberImage} alt="team member image"/>
                          </div>
                          <h3 className="member__header">Benjamin Isabella</h3>
                          <p className="member__job">UX / UI Designer</p>
                          <div className="member__info d-flex align-items-center flex-column">
                              <a href="tel:4255553333" className="member__info-phone">
                                  <ContactPhone />
                                  425 555 3333
                              </a>
                              <a href="mailto:eddieking@great.com" className="member__info-email">
                                  <ContactEmail />
                                  eddieking@great.com
                              </a>
                              <div className="member__info-person">
                                  <Person />
                                  Helper
                              </div>
                          </div>
                      </div>
                  </Col>
                  <Col lg={3} md={3} sm={4} xs={12} >
                      <div className="team-member">
                          <div className="member__img">
                              <img src={memberImage} alt="team member image"/>
                          </div>
                          <h3 className="member__header">Benjamin Isabella</h3>
                          <p className="member__job">UX / UI Designer</p>
                          <div className="member__info d-flex align-items-center flex-column">
                              <a href="tel:4255553333" className="member__info-phone">
                                  <ContactPhone />
                                  425 555 3333
                              </a>
                              <a href="mailto:eddieking@great.com" className="member__info-email">
                                  <ContactEmail />
                                  eddieking@great.com
                              </a>
                              <div className="member__info-person">
                                  <Person />
                                  Helper
                              </div>
                          </div>
                      </div>
                  </Col>
                  <Col lg={3} md={3} sm={4} xs={12} >
                      <div className="team-member">
                          <div className="member__img">
                              <img src={memberImage} alt="team member image"/>
                          </div>
                          <h3 className="member__header">Benjamin Isabella</h3>
                          <p className="member__job">UX / UI Designer</p>
                          <div className="member__info d-flex align-items-center flex-column">
                              <a href="tel:4255553333" className="member__info-phone">
                                  <ContactPhone />
                                  425 555 3333
                              </a>
                              <a href="mailto:eddieking@great.com" className="member__info-email">
                                  <ContactEmail />
                                  eddieking@great.com
                              </a>
                              <div className="member__info-person">
                                  <Person />
                                  Helper
                              </div>
                          </div>
                      </div>
                  </Col>
              </Row>
          </div>
        </>
    )
}

export default Team