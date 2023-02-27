import React, { useState } from "react";
import "./App.css";
import Buttons from "./Components/Buttons";
import DisplayTime from "./Components/DisplayTime";

const App = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [stop, setStop] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setStop(setInterval(run, 10));
  };
  let updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const pause = () => {
    clearInterval(stop);
    setStatus(2);
  };
  const reset = () => {
    clearInterval(stop);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };
  const resume = () => start();

  return (
    <>
      <div className="container">
       <img src="https://th.bing.com/th?id=OIP.IgzcS1qW2KkZBN3H7dwXeQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" alt="time"/>
        <DisplayTime time={time} className="display"/>
        <Buttons
          status={status}
          resume={resume}
          reset={reset}
          stop={pause}
          start={start}
        />
      </div>
    </>
  );
};

export default App;



