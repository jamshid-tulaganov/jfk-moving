import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function HeaderMain({ headingTop, headingBottom, description }) {
  return (
    <main className="header-main">
      <div className="header_main">
        <div className="header-image">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-items-start d-flex flex-column">
                <div className="landing-header">
                  <div className="landing-header-txt txt--change__color h1">
                    {headingTop}
                  </div>
                  <div className="landing-header-txt h2"> {headingBottom}</div>
                </div>
                <p className="header_desc">{description}</p>
                <NavLink to="/choose" className="navlink_move">
                  <button className="book_button">Book a move</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeaderMain;
