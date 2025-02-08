import React, {useState} from "react";
// css 
const mainDiv = {
    textAlign: "center",     // Centers text inside individual elements
};

const btn = {
    background: "pink",
    border: "none",
    borderRadius: "5px", // Fixed typo here
    margin: "10px",
    padding: "10px",
    cursor: "pointer",
};



//let cont = 1;



const IncDec = () => {
    const [cnt, setCount] = useState(0);
    // functionality
    const incFunc = () => {
        setCount(cnt+1);
    }
    const decFunc = () => {
        setCount(cnt-1);
    }
    return(
        <>
            <div style={mainDiv}>
                <h1>{cnt}</h1>
                <button onClick={incFunc} style={btn}>Increment</button>
                <button onClick={decFunc} style={btn}>Decrement</button>
            </div>
        </>
    );
}

export default IncDec;