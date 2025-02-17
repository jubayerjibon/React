import React, {useState} from "react";

const BtnClick = () => {

    // making state
    const [bg, setColor] = useState("purple");
    const [txt, setText] = useState("Hello");


    // Style:
    const btnDiv = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: bg, // Tomato background
    };
    
    const btn = {
        background: "purple",      // Purple button
        color: "white",            // White text color
        border: "2px solid white", // White border
        borderRadius: "5px",
        margin: "10px",
        padding: "10px 20px",
        cursor: "pointer",         // Makes it look clickable
        fontSize: "16px",
    };

    // funtionality:
    
    const firstClick = () => {
        setColor("purple");
        setText("Hi");        
    }

    const secondClick = () => {
        setColor("tomato");
        setText("Hello"); 
    }




    return(
        <>
            <div style={btnDiv}>
                <button style={btn} onClick={firstClick} onDoubleClick={secondClick}>
                    {txt}
                </button>
            </div>
        </>
    );
}

export default BtnClick;