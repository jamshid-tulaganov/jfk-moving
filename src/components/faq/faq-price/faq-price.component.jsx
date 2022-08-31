import React from "react";
import AccordionComponent from "../../UI/accordion/accordion.component";

function FaqPriceComponent() {
    //faq price component
    const priceAccordionData = [
        {
            heading: "Do you offer free on-site estimates?",
            description: "For local moves, we accept Visa, MasterCard, Discover Card or cash.\n" +
                "For long distance moves we accept Visa, MasterCard, Discover Card, cash or cashier’s check. Please note that there will be a 3% surcharge for using a credit card to pay for a long distance move.\n" +
                "No personal or business checks will be accepted for any type of move."
        },
        {
            heading: "How do you charge for local moves versus long distance moves?",
            description: "For local moves, we accept Visa, MasterCard, Discover Card or cash.\n" +
                "For long distance moves we accept Visa, MasterCard, Discover Card, cash or cashier’s check. Please note that there will be a 3% surcharge for using a credit card to pay for a long distance move.\n" +
                "No personal or business checks will be accepted for any type of move."
        },
        {
            heading: "Can I get a flat rate price?",
            description: "For local moves, we accept Visa, MasterCard, Discover Card or cash.\n" +
                "For long distance moves we accept Visa, MasterCard, Discover Card, cash or cashier’s check. Please note that there will be a 3% surcharge for using a credit card to pay for a long distance move.\n" +
                "No personal or business checks will be accepted for any type of move."
        },
        {
            heading: "What does “not-to-exceed price” mean?",
            description: "For local moves, we accept Visa, MasterCard, Discover Card or cash.\n" +
                "For long distance moves we accept Visa, MasterCard, Discover Card, cash or cashier’s check. Please note that there will be a 3% surcharge for using a credit card to pay for a long distance move.\n" +
                "No personal or business checks will be accepted for any type of move."
        },
        {
            heading: "Do you charge extra for stairs/elevators?",
            description: "For local moves, we accept Visa, MasterCard, Discover Card or cash.\n" +
                "For long distance moves we accept Visa, MasterCard, Discover Card, cash or cashier’s check. Please note that there will be a 3% surcharge for using a credit card to pay for a long distance move.\n" +
                "No personal or business checks will be accepted for any type of move."
        },
        {
            heading: "Am I getting charged for movers taking their breaks?",
            description: "For local moves, we accept Visa, MasterCard, Discover Card or cash.\n" +
                "For long distance moves we accept Visa, MasterCard, Discover Card, cash or cashier’s check. Please note that there will be a 3% surcharge for using a credit card to pay for a long distance move.\n" +
                "No personal or business checks will be accepted for any type of move."
        },
        {
            heading: "Is gratuity included?",
            description: "For local moves, we accept Visa, MasterCard, Discover Card or cash.\n" +
                "For long distance moves we accept Visa, MasterCard, Discover Card, cash or cashier’s check. Please note that there will be a 3% surcharge for using a credit card to pay for a long distance move.\n" +
                "No personal or business checks will be accepted for any type of move."
        },
        {
            heading: "What forms of payment do you accept?",
            description: "For local moves, we accept Visa, MasterCard, Discover Card or cash.\n" +
                "For long distance moves we accept Visa, MasterCard, Discover Card, cash or cashier’s check. Please note that there will be a 3% surcharge for using a credit card to pay for a long distance move.\n" +
                "No personal or business checks will be accepted for any type of move."
        },

    ]

    return (
        <section className='accordion-general'>
            <AccordionComponent data={priceAccordionData} />
        </section>
    )
}

export default FaqPriceComponent