import React, {useState} from "react";
import "./faq-main.style.css";
import {Row, Col} from "react-bootstrap";
import FaqGeneralComponent from "../faq-general/faq-general.component";
import FaqPriceComponent from "../faq-price/faq-price.component";
import FaqPackageComponent from "../faq-package/faq-package.component";
import FaqStorageComponent from "../faq-stroge/faq-storage.component";

function FaqMainComponent() {
    const [chooseComponent, setComponent] = useState(1);
    return (
        <>
           <div className="container faq--container">
               <div className="guide-heading">
                   <h1 className='guide-header headTxt'>Frequently Asked Questions</h1>
               </div>

               <Row className="faq-buttons">
                   <Col className="faq-button" xs={12} sm={12} md={3} lg={3}>
                       <button
                           type="button"
                           className={chooseComponent === 1 ? 'active--accordion__btn continue-button accordion-menu__btn' : 'continue-button accordion-menu__btn'}
                               onClick={() => setComponent(1)}
                       >
                           General Questions
                       </button>
                   </Col>
                   <Col className="faq-button" xs={12} sm={12} md={3} lg={3}>
                       <button
                           type="button"
                           className={chooseComponent === 2 ? 'active--accordion__btn continue-button' : 'continue-button accordion-menu__btn'}
                           onClick={() => setComponent(2)}
                       >
                           Pricing Questions
                       </button>
                   </Col>
                   <Col className="faq-button" xs={12} sm={12} md={3} lg={3}>
                       <button
                           type="button"
                           className={chooseComponent === 3 ? 'active--accordion__btn continue-button' : 'continue-button accordion-menu__btn'}
                           onClick={() => setComponent(3)}
                       >
                           Packing Questions
                       </button>
                   </Col>
                   <Col className="faq-button" xs={12} sm={12} md={3} lg={3}>
                       <button
                           type="button"
                           className={chooseComponent === 4 ? 'active--accordion__btn continue-button' : 'continue-button accordion-menu__btn'}
                           onClick={() => setComponent(4)}
                       >
                           Storage Questions
                       </button>
                   </Col>
               </Row>

               { chooseComponent === 1 ?  <FaqGeneralComponent  /> : null }
               { chooseComponent === 2 ? <FaqPriceComponent /> : null }
               { chooseComponent === 3 ? <FaqPackageComponent  /> : null }
               { chooseComponent === 4 ? <FaqStorageComponent  /> : null }

           </div>
        </>
    )
}

export default FaqMainComponent;