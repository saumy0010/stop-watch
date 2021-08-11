import React, { useEffect, useState } from 'react';
import Anmi from './anmi.js';
import './App.css'


const Stopwatch = () => {
    
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [msec, setMsec] = useState(0);
    const [stop, setStop] = useState(true);


// start 
const onStart = () => {
    setStop(false);
    setMsec(msec + 1);
}

// stop
const onStop = () => {
    setStop(true)
}

// reset
const onReset = () => {
    

    setHour(0);
    setMin(0);
    setSec(0);
    setMsec(0);
}

// to run the timer element
useEffect(() => {
    let interval = null;
    if(!stop){
        interval = setInterval(() => {
            if (min > 59) {
                setHour(hour + 1);
                setMin(0);
                clearInterval(interval);
            }
            if (sec > 59) {
                setMin(min + 1);
                setSec(0);
                clearInterval(interval);
            }
            if (msec > 99) {
                setSec(sec + 1);
                setMsec(0);
                clearInterval(interval);
            }
            if (msec <= 99){
                setMsec(msec + 1)
            } 
        } ,10)
    } else {
        clearInterval(interval);
    }

    return () => {
        clearInterval(interval);
    }
   
})
    return (
        
        <div>
            <div className="anmi-1">
                <Anmi/>
            </div>
            <br /><br />
            <div className="time">
                <div className="watch">
                    <span>{hour} :</span>
                    <span>{min} :</span>
                    <span>{sec}:</span>
                    <span style={{fontSize: 20}}>{msec}</span>
                </div>
                
                
                <div className="btn">
                    <button className="btn-start" type="button" onClick={onStart}>Start</button>
                    <button className="btn-stop" type="button" onClick={onStop}>Stop</button>
                    <button className="btn-reset" type="button" onClick={onReset}>Reset</button>
                </div>
                <br /> <br />
            </div>
        </div>
    );
}

export default Stopwatch;