import React, {useEffect, useState} from "react";
import "./styles.css";
import {Link} from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Facebook from "../../assets/icons/facebook";
import Twitter from "../../assets/icons/twitter";
import Instagram from "../../assets/icons/instagram";
import Pinterest from "../../assets/icons/pinterest";
import LinkedIn from "../../assets/icons/linkedin";
import logo from "../../assets/images/footer-logo.svg";
import RightIcon from "../../assets/icons/RightIcon";

const Footer = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [serviceRotate, setServiceRotate] = useState(false);
  const [isService, setService] = useState(false);
  const [isCompany, setCompany] = useState(false);
  const [companyRotate, setCompanyRotate] = useState(false);
  const [questions, setQuestions] = useState(false);
  const [questionRotate, setQuestionsRotate] = useState(false);
  const [links, setLinks] = useState(false);
  const [linkRotate, setLinkRotate] = useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      setWidth(window.innerWidth);
    }, 500);
    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <div className="footer">
      <Container className='pe-0'>
        <Row className="row me-0 footer__menu" >
          <Col lg={3} sm={6} className="logo d-flex justify-content-start">
            <img src={logo} alt="footer-logo" className='logo__footer' />
          </Col>
          {width >= 992
              ? <Col lg={9} className="d-flex footer_bottom_left">
                <Row className="right_row" >
                  <Col sm={6} md={3} xs={6} className="links links--company">
                    <div className="linksColumn" >
                      <p className="headerText">Company</p>
                      <Link to='/about' className="a-link">About</Link>
                      <Link to='/careers' className="a-link">Careers</Link>
                      <Link to='/directory' className="a-link">Directory</Link>
                      <Link to='/blog' className="a-link">Blog</Link>
                      <Link to='/contact' className="a-link">Contact Us</Link>
                    </div>

                  </Col>
                  <Col sm={6} md={3} xs={6} className="links " >
                    <div className="linksColumn" >
                      <Link to='#' name="services" ><p className="headerText">Services</p></Link>
                      <Link to='#' className="a-link">Local Move</Link>
                      <Link to='#' className="a-link">Long Distance Move</Link>
                      <Link to='#' className="a-link">Commercial</Link>
                      <Link to='#' className="a-link">Residental</Link>
                      <Link to='#' className="a-link">Other Services</Link>
                    </div>
                  </Col>
                  <Col sm={6} md={3} xs={6} className="links " >
                    <div className="linksColumn" >
                      <p className="headerText">Questions</p>
                      <Link to='/why' className="a-link">Why Us</Link>
                      <Link to='/clients' className="a-link">Clients</Link>
                      <Link to='/cities' className="a-link">Cities</Link>
                      <Link to='/faq' className="a-link">FAQs</Link>
                    </div>
                  </Col>
                  <Col sm={6} md={3} xs={6} className="links " >
                    <div className="linksColumn" >
                      <Link to='#' name="usefulLinks" >
                        <p className="headerText">Useful Links</p>
                      </Link>
                      <Link to='/checklists' className="a-link">Checklists</Link>
                      <Link to='/how' className="a-link">How-tos</Link>
                    </div>

                  </Col>
                </Row>
              </Col>
              : <Col sm={6} md={6} className='px-0'>
                <ul className="footer-mobile__menu">
                  <li className="footer-mobile__item"
                   onClick={() => {
                    setServiceRotate(pre => !pre);
                    setService(pre => !pre);
                   }
                   }
                  >
                    <a href="#/" className='footer-mobile__link'>
                      <p className="footer-mobile__heading">Company</p>
                      <RightIcon className={!serviceRotate  ? "right_icon_rotate rotate--color" : "right_icon--full rotate--color" } />
                    </a>
                    {isService && <ul className='footer-submenu'>
                      <li>
                        <Link to='/about' className="a-link">About</Link>
                      </li>
                      <li>
                        <Link to='/careers' className="a-link">Careers</Link>
                      </li>
                      <li>
                        <Link to='/directory' className="a-link">Directory</Link>
                      </li>
                      <li>
                        <Link to='/blog' className="a-link">Blog</Link>
                      </li>
                      <li>
                        <Link to='/contact' className="a-link">Contact Us</Link>
                      </li>
                    </ul> }
                  </li>
                  <li className="footer-mobile__item" onClick={() => {
                    setCompany(pre => !pre);
                    setCompanyRotate(pre => !pre);
                  }
                  }>
                    <a href="#/" className='footer-mobile__link'>
                      <p className="footer-mobile__heading">Services</p>
                      <RightIcon className={!companyRotate  ? "right_icon_rotate rotate--color" : "right_icon--full rotate--color" } />
                    </a>
                    {isCompany && <ul className='footer-submenu'>
                      <li>
                        <Link to='#' className="a-link">Local Move</Link>
                      </li>
                      <li>
                        <Link to='#' className="a-link">Long Distance Move</Link>
                      </li>
                      <li>
                        <Link to='#' className="a-link">Commercial</Link>
                      </li>
                      <li>
                        <Link to='#' className="a-link">Residental</Link>
                      </li>
                      <li>
                        <Link to='#' className="a-link">Residental</Link>
                      </li>
                    </ul>}
                  </li>
                  <li className="footer-mobile__item" onClick={() => {
                   setQuestions(pre => !pre);
                   setQuestionsRotate(pre => !pre);
                  }
                  }>
                    <a href="#/" className='footer-mobile__link'>
                      <p className="footer-mobile__heading">Questions</p>
                      <RightIcon className={!questionRotate  ? "right_icon_rotate rotate--color" : "right_icon--full rotate--color" } />
                    </a>
                    {questions && <ul className='footer-submenu'>
                      <li>
                        <Link to='/why' className="a-link">Why Us</Link>
                      </li>
                      <li>
                        <Link to='/clients' className="a-link">Clients</Link>
                      </li>
                      <li>
                        <Link to='/cities' className="a-link">Cities</Link>
                      </li>
                      <li>
                        <Link to='/faq' className="a-link">FAQs</Link>
                      </li>
                    </ul> }
                  </li>
                  <li className="footer-mobile__item" onClick={()=> {
                   setLinks(pre => !pre);
                   setLinkRotate(pre => !pre);
                  }
                  }>
                    <a href="#/" className='footer-mobile__link'>
                      <p className="footer-mobile__heading">Useful Links</p>
                      <RightIcon className={!linkRotate  ? "right_icon_rotate rotate--color" : "right_icon--full rotate--color" } />
                    </a>
                    {links && <ul className='footer-submenu'>
                      <li>
                        <Link to='/checklists' className="a-link">Checklists</Link>
                      </li>
                      <li>
                        <Link to='/how' className="a-link">How-tos</Link>
                      </li>
                    </ul> }
                  </li>
                </ul>
              </Col>
          }
        </Row>
        <Row className='footer-social me-0'>
          <Col sm={6} md={6} lg={3} className='footer-social__img ps-0'>
            <Row>
              <div className="col-6 d-flex footer_bottom_con" >
                <a href="#" className="appLink">
                  <img
                      className="appImg"
                      src={require("../../assets/images/google-play.png")}
                  />
                </a>
              </div>
              <div className="col-6 d-flex footer_bottom_con" >
                <a href="#" className="appLink">
                  <img
                      className="appImg"
                      src={require("../../assets/images/app-store.png")}
                  />
                </a>
              </div>
            </Row>
          </Col>
          <Col sm={6} md={6} lg={9} className='footer-social__icons d-flex justify-content-end align-items-end px-0'>
            <div className="icons">
              <a href="#" className="link">
                <Facebook />
              </a>
              <a href="#" className="link">
                <Twitter />
              </a>

              <a href="#" className="link">
                <Instagram />
              </a>

              <a href="#" className="link">
                <Pinterest />
              </a>

              <a href="#" className="link">
                <LinkedIn />
              </a>
            </div>
          </Col>
        </Row>

        <div className="footerItems">
          <div className="iconsCon">
            <p className="privacyText">&copy; 2022 JFK Moving co, LLC. All Rights Reserved.</p>
            <p className="privacyText">MTR: 0191935 / US DOT: 3079794 / CA: 520902</p>
          </div>
          <div className="imgCon row">
            <div className="d-flex flex-column footer_bottom_con justify-content-end" >
              <p className="privacyText text-end" >Developed and maintained by TechCells</p>
              <p className='privacyText text-end'>Terms & Conditions / Privacy Policy / License</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
