import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PomodoroTimer.css";

const PomodoroTimer = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [sessionsUsed, setSessionsUsed] = useState(0); // Start with 0 sessions
  const [timerInterval, setTimerInterval] = useState(null); // Timer interval state
  const navigate = useNavigate();

  const sessionLimit = 3; // Limit for demo purposes
  const timerLength = 1500; // 25 minutes in seconds

  useEffect(() => {
    // Fetch and initialize session count from localStorage
    const storedSessions = localStorage.getItem("sessionsUsed");
    if (storedSessions) {
      setSessionsUsed(parseInt(storedSessions, 10)); // Use stored value if available
    } else {
      localStorage.setItem("sessionsUsed", 0); // Initialize to 0 if no previous value
      setSessionsUsed(0);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const startPauseTimer = () => {
    if (sessionsUsed >= sessionLimit) {
      navigate("/get-app"); // Redirect if limit is exceeded on the fourth attempt
      return;
    }

    if (!isActive) {
      // Increment sessionsUsed when starting a new session
      if (timeLeft === timerLength) {
        setSessionsUsed((prevSessions) => {
          const newSessions = prevSessions + 1;
          localStorage.setItem("sessionsUsed", newSessions); // Save updated count to localStorage
          return newSessions;
        });
      }

      // Start the timer
      const newTimerInterval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            clearInterval(newTimerInterval); // Stop the timer when time is up
            setTimeLeft(timerLength); // Reset timer to 25 minutes
            return timerLength;
          }
          return prevTime - 1; // Decrement time
        });
      }, 1000);

      setTimerInterval(newTimerInterval); // Store the interval ID for later
    } else {
      clearInterval(timerInterval); // Pause the timer
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
          <h2>Pomodoro Demo</h2>
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
          <div className="buttons__pomodoro_btn">
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
