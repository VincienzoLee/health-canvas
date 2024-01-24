import React, { useState, useEffect } from "react";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        // Calculate total seconds
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;

        // Update time every second
        if (totalSeconds > 0) {
          setHours(Math.floor(totalSeconds / 3600));
          setMinutes(Math.floor((totalSeconds % 3600) / 60));
          setSeconds(totalSeconds % 60);
        } else {
          // Stop the timer when it reaches 0
          stopTimer();
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, hours, minutes, seconds]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    stopTimer();
  };

  return (
    <div>
      <div>
        <label>Hours:</label>
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(parseInt(e.target.value, 10))}
        />
      </div>
      <div>
        <label>Minutes:</label>
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(parseInt(e.target.value, 10))}
        />
      </div>
      <div>
        <label>Seconds:</label>
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(parseInt(e.target.value, 10))}
        />
      </div>
      <h1>
        Timer: {String(hours).padStart(2, "0")}:
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
