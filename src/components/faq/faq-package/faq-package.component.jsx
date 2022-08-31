import React from "react";
import AccordionComponent from "../../UI/accordion/accordion.component";

function FaqPackageComponent() {
    const data = [
        {
            heading:"What is the best size box for moving?",
            description:"To reschedule or cancel your appointment, please call (323) 772-7972. " +
                 "A $50 fee applies to all jobs canceled or rescheduled less than 48 hours from the appointment start time." +
                    " Canceling your first pickup with less than 48-hour notice will forfeit the $50 deposit."
        },

        {
            heading:"What is the best size box for moving?",
            description:"Determine the square footage of your house. Based on the square footage, you can estimate how many boxes you’ll need.\n" +
                "Less than 500 sq ft: 3 – 12 large boxes, 8 – 15 medium boxes, 12 – 18 small boxes, 2 – 5 dish barrels, and 3 – 5 wardrobe boxes.\n" +
                "Between 500 – 999 sq ft: 5 – 15 large boxes, 10 – 20 medium boxes, 15 – 25 small boxes, 3 – 6 dish barrels, 3 – 6 wardrobe boxes.\n" +
                "Between 1,000 – 1,499 sq ft: 10 - 20 large boxes, 15 - 25 medium boxes, 20 - 30 small boxes, 4 – 6 dish barrels, 5 – 7 wardrobe boxes.\n" +
                "Between 1,500 – 1,999 sq ft: 15 – 25 large boxes, 20 - 30 medium boxes, 30 - 40 small boxes, 5 – 97 dish barrels, 5 – 10 wardrobe boxes.\n" +
                "More than 2,000 sq ft: 20 – 30 large boxes, 25 - 35 medium boxes, 40 - 50 small boxes, 6 – 9 dish barrels, 8 – 12 wardrobe boxes.\n" +
                "\n" +
                "Our box guide can also help determine the number of boxes you need to correctly pack for your next move."
        }
   ]

    return (
        <>
            <section className='accordion-general'>
                <AccordionComponent data={data} />
            </section>
        </>
    )
}

export default FaqPackageComponent