import React from "react";
import AccordionComponent from "../../UI/accordion/accordion.component";

function FaqGeneralComponent() {

    const faqData = [
        {
            heading:"Does JFK Moving Co. provide a Certificate of Insurance?",
            description:"To reschedule or cancel your appointment, please call (323) 772-7972. " +
                "A $50 fee applies to all jobs canceled or rescheduled less than 48 hours from the appointment start time." +
                " Canceling your first pickup with less than 48-hour notice will forfeit the $50 deposit."
        },
        {
            heading:"What is your CANCELLATION POLICY?",
            description:"To reschedule or cancel your appointment, please call (323) 772-7972. A $50 fee applies to all jobs canceled or rescheduled less than 48 hours from the appointment start time. Canceling your first pickup with less than 48-hour notice will forfeit the $50 deposit."
        },
        {
            heading:"How do lunch breaks work? Do you charge partial hours?",
            description:"To reschedule or cancel your appointment, please call (323) 772-7972. A $50 fee applies to all jobs canceled or rescheduled less than 48 hours from the appointment start time. Canceling your first pickup with less than 48-hour notice will forfeit the $50 deposit."
        },
        {
            heading:"What is Double Driving time?",
            description:"To reschedule or cancel your appointment, please call (323) 772-7972. A $50 fee applies to all jobs canceled or rescheduled less than 48 hours from the appointment start time. Canceling your first pickup with less than 48-hour notice will forfeit the $50 deposit."
        },
        {
            heading:"Any benefits to paying cash vs credit?",
            description:"To reschedule or cancel your appointment, please call (323) 772-7972. A $50 fee applies to all jobs canceled or rescheduled less than 48 hours from the appointment start time. Canceling your first pickup with less than 48-hour notice will forfeit the $50 deposit."
        },
        {
            heading:"Any benefits to paying cash vs credit?",
            description:"To reschedule or cancel your appointment, please call (323) 772-7972. A $50 fee applies to all jobs canceled or rescheduled less than 48 hours from the appointment start time. Canceling your first pickup with less than 48-hour notice will forfeit the $50 deposit."
        },
    ]

    return (
        <>
            <section className='accordion-general'>
                <AccordionComponent data={faqData} />
            </section>
        </>
    )
}

export default FaqGeneralComponent