import React from "react";
import "./Commercial.style.css";
import {NavLink} from "react-router-dom";

function CommercialMainComponent() {

    return (
        <section className="home-main commercial">
            <main className='commercial-main'>
                <div className="container home-main--container">
                    <div className="row">
                        <div className="col-md-6 align-items-start d-flex residential-block flex-column">
                            <div className="h1 home-main--header"> Commercial Moving
                                <div className="h2">Made Easy.</div>
                            </div>
                            <p className="header_desc">Save your time and energy by choosing JFK Moving to relocate your business to a new location and without disruption.</p>
                            <NavLink to="/choose" className="navlink_move">
                                <button
                                    className="book_button"
                                >
                                    Book a move
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default CommercialMainComponent