import React from "react";
import AccordionComponent from "../../UI/accordion/accordion.component";

function LongDistanceFaqComponent() {
  const longDistanceFaqData = [
    {
      heading: "Don’t settle for a stressful moving experience",
      description: "lorem10"
  },
  {
      heading: "Get the most qualified team",
      description: "lorem10"
  },
  {
      heading: "Best-in-class customer service",
      description: "lorem10"
  },
  {
      heading: "Get your moving quote today",
      description: "lorem10"
  },
  {
    heading: "Local moving notionwide",
    description: "lorem10"
},
]

  return (
    <>
      <div className="container residential-faq">
              <div className="d-flex justify-content-center">
                  <h1 className='headTxt'>Long-distance moving experts.</h1>
              </div>
             <div className="residential-faq__container">
                 <AccordionComponent data={longDistanceFaqData}  />
             </div>
          </div>
    </>
  )
}

export default LongDistanceFaqComponent;