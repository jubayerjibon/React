import React, {useState} from "react";
import './accordion.css';
import {questions} from './questionApi';
import AccordionList from "./AccordionList";
const Accordion = () => {
    const [data, setData] = useState(questions);
    return (
        <>
            <div className="accor_main">
                <h2>Python Interview Questions</h2>
                <div className="accor_container">
                    <ul>
                        {data.map((content) => {
                            const {id} = content;
                            return(
                                <AccordionList
                                    key={id}
                                    {...content}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Accordion;
