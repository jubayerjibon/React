import React, {useState} from "react";

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    
    const [c_time, setTime] = useState(time);
    const updater = () => {
        time = new Date().toLocaleTimeString();
        setTime(time);
    }
    setInterval(updater, 1000);

    return (
        <>
            <h1>{c_time}</h1>
        </>
    );
}

export default Clock;
