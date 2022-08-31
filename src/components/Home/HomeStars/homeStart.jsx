import React from "react";
import "./style.css";
import RatingStar from "../../../assets/icons/ratingStar";

function HomeStart() {
    return(
        <section className="starContainer">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 d-flex flex-column justify-content-center align-items-center likeLine">
                    <h3 className="titleText">300k</h3>
                    <p className="descText">Moves completed</p>
                  </div>
                  <div className="col-md-4 d-flex flex-column justify-content-center align-items-center likeLine">
                    <h3 className="titleText">50k</h3>
                    <p className="descText">Customer views</p>
                  </div>
                  <div className="col-md-4 d-flex flex-column justify-content-center align-items-center likeLine">
                    <h3 className="titleText">
                      4.9 <RatingStar />
                    </h3>
                    <p className="descText">Customer reviews</p>
                  </div>
                </div>
              </div>
            </section>  
    )
}

export default HomeStart