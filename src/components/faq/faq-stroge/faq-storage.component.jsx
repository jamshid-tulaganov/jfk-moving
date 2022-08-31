import React from "react";
import AccordionComponent from "../../UI/accordion/accordion.component";

function FaqStorageComponent() {
    //data for storage accordion
    const storageAccordionData = [
        {
            heading: 'Can I keep my items with JFK Moving while I look for a place out of state?',
            description: 'Sure! If you’re in the Los Angeles area or the San Francisco Bay area, we have storage facilities there. We can store your belongings for a monthly fee. We promise to tuck them in a night and maybe even read them a bedtime story. For more information about storage, check out our Storage page.'
        },
        {
            heading: 'Is it self-storage?',
            description: 'Sure! If you’re in the Los Angeles area or the San Francisco Bay area, we have storage facilities there. We can store your belongings for a monthly fee. We promise to tuck them in a night and maybe even read them a bedtime story. For more information about storage, check out our Storage page.'
        },
        {
            heading: 'How do you store my things?',
            description: 'Sure! If you’re in the Los Angeles area or the San Francisco Bay area, we have storage facilities there. We can store your belongings for a monthly fee. We promise to tuck them in a night and maybe even read them a bedtime story. For more information about storage, check out our Storage page.'
        },
        {
            heading: 'Do you offer commercial storage?',
            description: 'Sure! If you’re in the Los Angeles area or the San Francisco Bay area, we have storage facilities there. We can store your belongings for a monthly fee. We promise to tuck them in a night and maybe even read them a bedtime story. For more information about storage, check out our Storage page.'
        }

    ]

    return (
        <section className='accordion-general'>
          <AccordionComponent data={storageAccordionData} />
        </section>
    )
}

export default FaqStorageComponent