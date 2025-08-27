import React, { useRef, useState } from 'react';

const Counter = () => {
    const [startTime, setStartTime] = useState(0);
    const [now, setNow] = useState(0);
    const [elapsed, setElapsed] = useState(0);

    const intervalRef = useRef(0);
    const startTimer = () => {
        if(intervalRef.current != 0) return;

        setStartTime(Date.now() - elapsed);

        
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }
    const stopTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = 0;

        // save elapsed time
        setElapsed(now - startTime);

    }
    const restartTimer = () => {
        setStartTime(Date.now());
        setNow(Date.now());

        // clear the interval
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    let secondsPassed = 0;
    if(startTime != 0 && now != 0){
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <>
            <br />
            <h1>Timer Component</h1>
            <h1>Timer: {secondsPassed.toFixed(3)}</h1>
            
            <button onClick={startTimer}>Start</button>
            <span> </span>
            <button onClick={stopTimer}>Stop</button>
            <span> </span>
            <button onClick={restartTimer}>Restart</button>
            <br />
            <br />
            <br />
        </>
    );
};

export default Counter;