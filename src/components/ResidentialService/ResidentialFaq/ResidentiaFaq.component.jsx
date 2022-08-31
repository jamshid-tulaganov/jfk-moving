import React from "react";
import "./ResidentialFaq.style.css";
import AccordionComponent from "../../UI/accordion/accordion.component";

function ResidentialFaqComponent() {

    const residentialFaqData = [
        {
            heading: "Is it cheaper to hire movers or rent a truck?",
            description: "lorem10"
        },
        {
            heading: "What else will truck rental companies charge for?",
            description: "lorem10"
        },
        {
            heading: "How long should a move take?",
            description: "lorem10"
        },
        {
            heading: "How do I protect my floors during a move?",
            description: "lorem10"
        }
    ]

    return (
        <>
          <div className="container residential-faq">
              <div className="d-flex justify-content-center">
                  <h1 className='headTxt'>Questions our customers ask.</h1>
              </div>
             <div className="residential-faq__container">
                 <AccordionComponent data={residentialFaqData}  />
             </div>
          </div>
        </>
    )
}

export default ResidentialFaqComponent