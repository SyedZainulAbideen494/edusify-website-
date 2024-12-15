import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PomodoroTimer.css";

const PomodoroTimer = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [sessionsUsed, setSessionsUsed] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null); // Timer interval state
  const navigate = useNavigate();

  const sessionLimit = 3; // Limit for demo purposes

  const timerLength = 1500; // 25 minutes in seconds for the study session
  const breakLength = 300; // 5 minutes in seconds for break

  useEffect(() => {
    // Check if the user has exceeded the usage limit from localStorage
    const storedSessions = localStorage.getItem("sessionsUsed");
    if (storedSessions && parseInt(storedSessions) >= sessionLimit) {
      navigate("/get-app"); // Redirect if limit is exceeded
    } else {
      setSessionsUsed(storedSessions ? parseInt(storedSessions) : 0);
    }
  }, [navigate]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const startPauseTimer = () => {
    if (isActive) {
      clearInterval(timerInterval); // Stop the timer
    } else {
      const newTimerInterval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            clearInterval(newTimerInterval); // Stop the timer when time is up
            setSessionsUsed((prevSessions) => {
              const newSessions = prevSessions + 1;
              localStorage.setItem("sessionsUsed", newSessions);
              return newSessions;
            });
            setTimeLeft(timerLength); // Reset timer to 25 minutes
            return timerLength;
          }
          return prevTime - 1; // Decrement time
        });
      }, 1000);

      setTimerInterval(newTimerInterval); // Store the interval ID for later
    }
    setIsActive(!isActive); // Toggle timer state (active/inactive)
  };

  const stopTimer = () => {
    clearInterval(timerInterval); // Stop the timer
    setTimeLeft(timerLength); // Reset timer to 25 minutes
    setIsActive(false); // Set timer to inactive
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  // Calculate the stroke dasharray value for the SVG circular progress
  const strokeDasharray = (timeLeft / timerLength) * 565;

  return (
    <div className="pmodoro-main-div">
      <div className={`pomodoro-container ${isDarkMode ? "dark-theme" : "light-theme"}`}>
        <div className="timer">
          <h1>Pomodoro Timer</h1>
          <div className="timer__pomodoro__new">
            <div className="circular-timer__Pomodoro__new">
              <svg className="circle__Pomodoro__new" width="200" height="200">
                <circle className="circle-bg__Pomodoro__new" cx="100" cy="100" r="90" strokeWidth="10" />
                <circle
                  className="circle-progress__Pomodoro__new"
                  cx="100"
                  cy="100"
                  r="90"
                  strokeWidth="10"
                  style={{
                    strokeDasharray: `${strokeDasharray}px 565px`, // Set progress based on time left
                    transition: 'stroke-dasharray 1s ease-out', // Smooth transition
                  }}
                />
              </svg>
              <p className="timer-number__Pomodoro__new">{formatTime(timeLeft)}</p>
            </div>
          </div>
          <div className="buttons">
            <button onClick={startPauseTimer}>
              {isActive ? "Pause" : "Start"}
            </button>
            <button onClick={stopTimer}>Stop</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;

