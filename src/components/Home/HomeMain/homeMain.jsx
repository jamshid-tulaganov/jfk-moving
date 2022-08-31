import React from "react";
import "./style.css";
import landing from "../../../assets/images/landing_mobile.png";
import {NavLink} from "react-router-dom";

function HomeMain() {
    return (
        <main className='home-main'>
            <div className="home-main__bg">
                <div className="container home-main--container">
                <div className="row">
                    <div className="col-md-6 align-items-start d-flex flex-column">
                        <div className="h1 home-main--header"> You pick the location, we
                            <div className="h2"> will take care of the rest. </div>
                        </div>
                        <p className="header_desc">
                            From state to state, JFK Moving Co will fully support you every step of the way.
                        </p>
                        <NavLink to="/choose" className="navlink_move">
                            <button
                                className="book_button"
                            >
                                Free estimate
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
            </div>
            
        </main>
            )
}

export default HomeMain