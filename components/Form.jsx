import React, {useState} from "react";

const Form = () => {
    const [fullName, setName] = useState("");
    const [name, inputName] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    const formContainer = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4", 
    };
    
    const dispStyle = {
        color: "#333",        
        fontSize: "24px",     
        fontWeight: "bold",   
        marginBottom: "10px",
    };
    
    const inpStyle = {
        width: "250px",        
        padding: "10px",       
        fontSize: "16px",      
        border: "2px solid #666", 
        borderRadius: "5px",   
        outline: "none",
    };

    const btnStyle = {
        backgroundColor: "#4CAF50", 
        color: "white",             
        border: "none",             
        borderRadius: "5px",        
        padding: "10px 20px",       
        fontSize: "16px",           
        cursor: "pointer",          
        marginTop: "15px",          
        transition: "0.3s",         
    };
    
    const btnHover = {
        backgroundColor: "#45a049", 
    };


    // functionality
    const inputEvent = (event) => {
        inputName(event.target.value);        

    }
    const updateText = () => {
        //console.log(event.target.value);
        setName(name);
        inputName("");
    }

    return (
        <>
            <div style={formContainer}>
                <h3 style={dispStyle}>Hello {fullName}</h3>
                <input 
                    type="text"
                    placeholder="Enter your name"
                    style={inpStyle}
                    onChange={inputEvent}
                    value={name}
                />
                <button
                    style={{ ...btnStyle, ...(isHovered ? btnHover : {}) }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)} 
                    onClick={updateText}
                >
                    Save it
                </button>
            </div>

        </>
    );
}

export default Form;