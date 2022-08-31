import React, { useEffect, useState } from "react";
import "./styles.css";
import Close from "../../../assets/icons/close";
import { NavLink , Link} from "react-router-dom";
import Landingmenu from "../../../assets/icons/landingmenu";
import Button from "../../UI/Button";

import logo from '../../../assets/images/logo.svg';
import logoMobile from '../../../assets/images/logo-mobile.svg';
import hamburgerMenu from "../../../assets/icons/hamburgerMenu";

import RightIcon from '../../../assets/icons/RightIcon';
import ContactPhone from "../../../assets/icons/ContactPhone";
import CallBackPhone from "../../../assets/icons/callBackPhone";
import Status from "../../../assets/icons/status";
import HeaderNavBottom from "../HeaderNavBottom/headerNavBottom";


function HeaderNav({scroll = false, auth, isLanding = true}) {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceMenu, setServiceMenu] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [isCompanyMenu, setCompanyMenu] = useState(false);
  const [isCompanyMenuRotate, setCompanyMenuRotate] = useState(false);
  const [isMovingRotate, movingRotate] = useState(false);
  const [isMoving, setMoving] = useState(false);
  const [isScroll, setScroll] = useState(scroll);


  const menuStyle = {
    display: "flex",
    transition: "0.5s",
    width: "100%",
    height: isOpen ? "100%" : '0',
    background: "rgba(0,0,0,0)",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "0",
    position: "fixed",
    top: "0",
    right: "0",
    zIndex: "1",
    overflow: 'hidden',
  };


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let timer = setInterval(() => {
      setWidth(window.innerWidth);
    }, 500);
    return () => {
      clearInterval(timer);
    }
  }, []);

  window.addEventListener('scroll',()=> {
    if(window.scrollY >= 300 ) {
      setScroll(true);
    }else {
      setScroll(false);
    }
  })
  
  return (
    <header className={(isScroll && isLanding) ? 'anime__nav' : 'header'}>
      <div className={isLanding ? "" : 'w-100 active--header'}>
        <div className="container">
          {width >= 992 ? (
              <div >
                <div className="row header_row">
                  <div className={isScroll || !isLanding ? "col-md-2 align-items-center" : "col-md-3 align-items-center"}>
                    <Link to="/" className="logo_link">
                      <img src={logo} className="logo_image" alt={'logo'} />
                    </Link>
                  </div>
                  <div className={isScroll || !isLanding ? "col-md-6 d-flex align-items-center justify-content-between pe-5" : "col-md-7 align-items-center justify-content-end"}>
                    <ul className="ul_nav me-0">
                      <li id={'company-nav'}>
                        <button  onClick={() => {
                          setCompanyMenu(pre => !pre);
                          setCompanyMenuRotate(pre => !pre);
                          setRotate(false);
                          setMoving(false);
                        }} className="ul_link ul_link_button">
                          Company
                          <RightIcon className={isCompanyMenu ? "right_icon_rotate" : "right_icon"} />
                        </button>

                        {  isCompanyMenu
                            &&
                            <ul className="service_menu menu--company" >
                              <li className="service_item" onClick={() => {
                                setCompanyMenu(pre => !pre);
                                setCompanyMenuRotate(pre => !pre);
                              }} >
                                <Link to={'/about'} className="service_item_link" >About Us</Link>
                              </li>
                              <li className="service_item" onClick={() => {
                                setCompanyMenu(pre => !pre);
                                setCompanyMenuRotate(pre => !pre);
                              }} >
                                <Link to='/blog' className="service_item_link" >Blog</Link>
                              </li>
                              <li className="service_item" onClick={() => {
                                setCompanyMenu(pre => !pre);
                                setCompanyMenuRotate(pre => !pre);
                              }} >
                                <Link to={'/claim'} className="service_item_link" >Claims and Complaints</Link>
                              </li>
                              <li className="service_item" onClick={() => {
                                setCompanyMenu(pre => !pre);
                                setCompanyMenuRotate(pre => !pre);
                              }} >
                                <Link to={'/careers'} className="service_item_link" >Careers</Link>
                              </li>
                              <li className="service_item" onClick={() => {
                                setCompanyMenu(pre => !pre);
                                setCompanyMenuRotate(pre => !pre);
                              }} >
                                <Link to={'/license'} className="service_item_link" >License</Link>
                              </li>
                            </ul>
                        }

                      </li>
                      <li>
                        <button  onClick={() => {
                          setMoving(pre => !pre);
                          movingRotate(pre => !pre);
                          setRotate(false);
                          setCompanyMenu(false);
                        }} className="ul_link ul_link_button">
                          Moving
                          <RightIcon className={isMoving ? "right_icon_rotate" : "right_icon"} />
                        </button>

                        {isMoving &&
                            <ul className="service_menu moving--menu">
                              <li className="service_item" onClick={() => {
                                setServiceMenu(pre => !pre);
                                setRotate(pre => !pre);
                              }} >
                                <Link to='/residential' className="service_item_link" >Residential Moving</Link>
                              </li>
                              <li className="service_item" onClick={() => {
                                setServiceMenu(pre => !pre);
                                setRotate(pre => !pre);
                              }} >
                                <Link to='/commercial' className="service_item_link" >Commercial Moving</Link>
                              </li>
                              <li className="service_item" onClick={() => {
                                setServiceMenu(pre => !pre);
                                setRotate(pre => !pre);
                              }} >
                                <Link to='/moving' className="service_item_link" >Local Moving</Link>
                              </li>
                              <li className="service_item" onClick={() => {
                                setServiceMenu(pre => !pre);
                                setRotate(pre => !pre);
                              }}>
                                <Link to='/long' className="service_item_link" >Long Distance Moving</Link>
                              </li>
                            </ul>
                        }
                      </li>
                      <li>
                        <button href="/services" onClick={() => {
                          setServiceMenu(pre => !pre);
                          setRotate(pre => !pre);
                          setMoving(false);
                          setCompanyMenu(false);
                        }} className="ul_link_button">
                          Services
                          <RightIcon className={rotate ? "right_icon_rotate" : "right_icon"} />
                        </button>
                        {rotate &&
                            <ul className="service_menu menu--service">
                              <li className="service_item" onClick={() => {
                                setServiceMenu(pre => !pre);
                                setRotate(pre => !pre);
                              }} >
                                <Link to='/loading' className="service_item_link" >Loading and Unloading</Link>
                              </li>
                              <li className="service_item" onClick={() => {
                                setServiceMenu(pre => !pre);
                                setRotate(pre => !pre);
                              }} >
                                <Link to='/packing' className="service_item_link" >Packing and Unpacking</Link>
                              </li>
                              <li className="service_item" onClick={() => {
                                setServiceMenu(pre => !pre);
                                setRotate(pre => !pre);
                              }} >
                                <Link to='/junk' className="service_item_link" >Junk Removal</Link>
                              </li>
                              <li className="service_item" onClick={() => {
                                setServiceMenu(pre => !pre);
                                setRotate(pre => !pre);
                              }}>
                                <Link to='/piano' className="service_item_link" >Piano and Pool Table Moving</Link>
                              </li>
                              <li className="service_item" onClick={() => {
                                setServiceMenu(pre => !pre);
                                setRotate(pre => !pre);
                              }} >
                                <Link to='/box' className="service_item_link" >Box and Supplies</Link>
                              </li>
                              <li className="service_item" onClick={() => {
                                setServiceMenu(pre => !pre);
                                setRotate(pre => !pre);
                              }} >
                                <Link to='/storage' className="service_item_link" >Storage</Link>
                              </li>
                            </ul>}
                      </li>
                      <li>
                        <Link to='/cities' className='ul_link'>
                          Cities
                        </Link>
                      </li>
                      <li>
                        <Link to='/guide' className="ul_link" >
                          Guide
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={isScroll || !isLanding ? 'col-md-4 d-flex align-items-center justify-content-end' : 'd-none navbar-action d-flex align-items-center'}>
                    <div className="action-icons d-flex align-items-center">
                      <a href='tel:8881235665' className="block__icon block__icon--phone">
                        <ContactPhone fill='white' width={12} heigth={12}/>
                      </a>
                      <a href='tel:8881235665' className="block__icon">
                        <CallBackPhone />
                      </a>
                      <div className="block__icon">
                        <Status />
                      </div>
                    </div>
                    <div className="action-btn">
                      <NavLink to="/choose">
                        <button className="header_button">Book Now</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
                {
                  isLanding && !isScroll ? <HeaderNavBottom /> : null
                }
              </div>
          ) : (
              <div className="row header_row">
                <div className="col-5 align-items-center">
                  <Link to="/" className="logo_link">
                    <img src={logo} className="logo_image" alt="logo JFK movie" />
                  </Link>
                </div>
                <div className="col-7 justify-content-end">
                  {/*<Landingmenu className="menu_button" onClick={toggleMenu} />*/}
                  {/*<hamburgerMenu className="menu_button" onClick={toggleMenu}  />*/}
                  <div className="menu_button" onClick={toggleMenu}>
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="20" height="2" rx="1" fill="#A8324A"/>
                      <rect y="8" width="20" height="2" rx="1" fill="#A8324A"/>
                      <rect y="16" width="20" height="2" rx="1" fill="#A8324A"/>
                    </svg>
                  </div>
                </div>
              </div>
          )}
        </div>
        {/*mobile menu*/}
        <div style={menuStyle} onClick={toggleMenu}>
          <ul className="menu_ul_open">
            <div className="menu_top">
              <img src={logo} className="logo_image" alt={"logo in JFK mover"} />
              <Close className="close_icon" stroke={'#a8324a'}  onClick={toggleMenu} />{" "}
            </div>
            <li>
              <Link to={'#compnay'} className={'menuTopText'}>
                Company
                <button className={'ul_link_button'}>
                  <RightIcon className={rotate ? "right_icon_rotate" : "right_icon"} />
                </button>
              </Link>
            </li>
            <li>
              <Link to="/moving" className="menuTopText" onClick={toggleMenu}>
                Moving
                <button className={'ul_link_button'}>
                  <RightIcon className={rotate ? "right_icon_rotate" : "right_icon"} />
                </button>
              </Link>
            </li>
            <li>
              <Link to="/#services" className="menuTopText" onClick={toggleMenu}>
                Services
                <button href="/services" onClick={() => {
                  setServiceMenu(pre => !pre);
                  setRotate(pre => !pre);
                }} className='ul_link_button'>
                  <RightIcon />
                </button>
              </Link>
            </li>
            <li>
              <Link to="/#guide" className="menuTopText" onClick={toggleMenu}>
                Moving Guide
              </Link>
            </li>
            <li>
              <Link to="/contact" className="menuTopText" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <Button
                className="align-self-center book_toggle"
                title="Book Now"
                type="continue"
            />
          </ul>
        </div>
      </div>
    </header>
  );
}

export default HeaderNav;