import React, { useState, useRef } from 'react';


function StartStop() {

    const [counter, setCounter] = useState(0);
    const [resume, setResume] = useState(false);
    const counterTime = useRef();

    const startButton = () => {
        counterTime.current = setInterval(() => {
            setCounter((prev) => prev + 1);
        }, 10);

        setResume(false);
    }

    const stopButton = () => {
        clearInterval(counterTime.current);
        setResume(true);
    };



    const countms = Math.floor((counter % 100));
    const countsec = Math.floor(counter / (100) % 60);
    const countmin = Math.floor(counter / (100 * 60) % 60);
    const counthr = Math.floor(counter / (100 * 60 * 60));




    return (
        <div className='container' >
            <h1>Stopwatch</h1>
            <div className='stopWatch'>

                <div>{(counthr >= 10) ? counthr : "0" + counthr} <sub>hr</sub>  : </div>
                <div>{(countmin >= 10) ? countmin : "0" + countmin} <sub>min</sub>  :</div>
                <div>{(countsec >= 10) ? countsec : "0" + countsec} <sub>sec</sub>  :</div>
                <div>{(countms >= 10) ? countms : "0" + countms} <sub>ms</sub> </div>

            </div>
            <div className='buttonFunction'>
                <button className='startButton' onClick={startButton} >{resume ? "Resume" : "Start"}</button>
                <button className='stopButton' onClick={stopButton}>Stop</button>
                <button className='resetButton' onClick={resetButton}>Reset</button>
            </div>
        </div >
    )
}

export default StartStop;