import React, {useState} from "react";

const AccordionList = ({question, answer}) => {
    // we can use object destructuring inisted of props
    const [show, setShow] = useState(false);
    const showAns = () => {
        if(!show){
            setShow(true);
        }else{
            setShow(false);
        }
    }
    return(
        <>
            <li className={"accordion "+ (show ? "active" : "")}>
                <div className="accor_question">
                    <span onClick={showAns}>➕</span>
                    <h3>{question}</h3>
                </div>
                {/* if show is true then rander the answer */}
                <div className="accor_ans">
                {show && 
                    <p>
                        {answer}
                    </p>
                }
                </div>
            </li>
        </>
    );
}

export default AccordionList;