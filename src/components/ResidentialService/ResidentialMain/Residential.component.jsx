import React from "react";
import "./Residential.style.css";
import {NavLink} from "react-router-dom";

function ResidentialComponent() {
    return (
        <section className="residential">
            <div className='home-main residential-main'>
                <div className="container home-main--container">
                    <div className="row">
                        <div className="col-md-6 align-items-start d-flex residential-block flex-column">
                            <div className="h1 home-main--header"> Residential Movers
                                <div className="h2">  You Can Count On. </div>
                            </div>
                            <p className="header_desc">
                                Let our Los Angeles residential movers show you a simpler way to move an entire household, no matter the size.
                            </p>
                            <NavLink to="/choose" className="navlink_move">
                                <button className="book_button"> Book a move</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResidentialComponent;