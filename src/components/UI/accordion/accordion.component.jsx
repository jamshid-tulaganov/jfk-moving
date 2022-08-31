import Accordion from 'react-bootstrap/Accordion';
import {useContext} from "react";
import {AccordionContext} from "react-bootstrap";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import "./accordation.style.css";
import RightIcon from "../../../assets/icons/RightIcon";

function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => {
            callback && callback(eventKey);
        },
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <button
            type="button"
            className={isCurrentEventKey ? 'custom--button active--accordion ' : 'custom--button'}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

function AccordionComponent({data}) {

    return (
        <Accordion defaultActiveKey="0" className='Accordion accordion-section'>
            { data.map( (element, index) =>
                <Card className='accordion--card position-relative' key={index}>
                    <Card.Header className='accordion--block'>
                        {/*child component*/}
                        <ContextAwareToggle eventKey={index}>
                            <div className='accordion-heading'>
                                <h2> {element.heading} </h2>
                                <RightIcon />
                            </div>
                        </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={index} >
                        <Card.Body className='card--body'> {element.description} </Card.Body>
                    </Accordion.Collapse>
                </Card>
            )}

        </Accordion>
    );
}

export default AccordionComponent;