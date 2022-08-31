import React, {useState} from "react";
import boxes from "../../assets/images/boxes.png";


function BookBoxesComponent() {

    const [width, setWidth] = useState(window.innerWidth);
    setInterval(() => {
        setWidth(window.innerWidth);
    }, 500);

    return (
        <>
            <div name="moving">
                    <div className="letMoving d-flex align-items-center">
                        <div className="container">
                            {width > 991 ? (
                                <div className="row desktop-moving__boxes">
                                    <div className="col-lg-4  d-flex align-items-center">
                                        <img src={boxes} className="movingBox" alt={"boxes"} />
                                    </div>
                                    <div className="col-lg-4  d-flex align-items-center justify-content-center">
                                        <h3 className="moveText">Let's get Moving!</h3>
                                    </div>
                                    <div className="col-lg-4  d-flex align-items-center justify-content-center">
                                        <button className="book_quote">Get a quote</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="row d-flex justify-content-between">
                                    <div className="col-lg-4 d-flex align-items-center justify-content-center">
                                        <h3 className="moveText">Let's get Moving!</h3>
                                    </div>
                                    <div className="col-lg-4 d-flex align-items-start justify-content-center">
                                        <img src={boxes} className="movingBox" alt={"message-box"} />
                                    </div>
                                    <div className="col-lg-4 d-flex align-items-center justify-content-center">
                                        <button className="book_quote">Get a quote</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
        </>
    )
}

export default BookBoxesComponent