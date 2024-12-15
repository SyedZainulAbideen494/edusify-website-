import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import './AiDemoSection.css';
import Loader from "./mathLoader";
import { FaMicrophone } from "react-icons/fa";
import AiLoaderSpeaking from "./AiLoaderSpeaking";
import { useNavigate } from 'react-router-dom'; // For redirection

// Voice recognition setup (Web Speech API)
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

const AiDemoSection = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);
  const [listening, setListening] = useState(false); // State for voice recognition
  const nav = useNavigate(); // For redirecting user

  const demoCount = Number(localStorage.getItem('demoCount')) || 0; // Get the demo count from localStorage



  const handleSendMessage = async () => {
    // Prevent further use after 3 demos
    if (demoCount >= 3) {
      return nav('/get-app'); // Redirect user if they exceed demo limit
    }

    if (!message.trim()) return;
    if (!conversationStarted) setConversationStarted(true);

    const newHistory = [
      ...chatHistory,
      { role: "user", parts: [{ text: message }] },
    ];
    setChatHistory(newHistory);
    setLoading(true);

    const token = localStorage.getItem("token"); // Assuming you're storing the token in localStorage

    try {
      const response = await axios.post("https://srv594954.hstgr.cloud/api/chat/ai/demo", {
        message,
        chatHistory: newHistory,
        token,
      });

      const formattedResponse = response.data.response;
      setChatHistory([ 
        ...newHistory,
        { role: "model", parts: [{ text: formattedResponse }] },
      ]);
      setMessage("");
      
      // Update demo count in localStorage
      const newDemoCount = demoCount + 1;
      localStorage.setItem('demoCount', newDemoCount);

    } catch (error) {
      console.error("Error sending message:", error);
      setChatHistory([ 
        ...newHistory,
        {
          role: "model",
          parts: [{ text: "Oops! Something went wrong. Please try again later." }],
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const startListening = () => {
    if (recognition) {
      recognition.start();
      setListening(true);
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setListening(false);
    }
  };

  useEffect(() => {
    if (recognition) {
      recognition.onresult = (event) => {
        const voiceMessage = event.results[0][0].transcript;
        setMessage(voiceMessage);
        handleSendMessage(); // Automatically send the voice command as a message
      };

      recognition.onend = () => setListening(false);
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { // Avoid submitting on Shift + Enter for multiline input
      e.preventDefault(); // Prevent form submission (default behavior)
      handleSendMessage(); // Trigger the message send when pressing Enter
    }
  };

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  return (
    <section className="ai-demo-section">
      <div className="ai-demo-container">
        <h2>Edusify AI Demo</h2>

        <div className="chat-container">
          <div className="chat-box">
            {chatHistory.map((entry, index) => (
              <div key={index} className={entry.role === "user" ? "user-message" : "ai-message"}>
                <p>{entry.parts[0].text}</p>
                <div ref={messagesEndRef} />
              </div>
            ))}
            {loading && <div className="chat-message loader-bubble">
              <div className="chat-bubble">
                <Loader/>
              </div>
            </div>}
          </div>

          {/* Chat input */}
          <div className="messageBox__ai__loader__light">
            <div className="input-group__ai__loader__light">
              <input
                id="messageInput__ai__loader__light"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type here.."
                onKeyDown={handleKeyDown} // Trigger the handleKeyDown function
                required
              />
            </div>

            {message.trim() ? (
              <button
                className="chat-send-btn__ai__loader__light"
                onClick={handleSendMessage}
                disabled={loading}
              >
                {loading ? (
                  <div style={{ width: "24px", height: "24px" }}>
                    <AiLoaderSpeaking />
                  </div>
                ) : (
                  <svg viewBox="0 0 664 663" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                      fill="none"
                    ></path>
                    <path
                      d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                      stroke="#333333"
                      strokeWidth="33.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                )}
              </button>
            ) : (
              <button
                className="chat-send-btn__ai__loader__light"
                onClick={listening ? stopListening : startListening}
              >
                <FaMicrophone style={{ color: "white" }} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiDemoSection;
