import React, { useState } from "react";
import "./Session.scss";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  const sendMessage = async () => {
    // Send user message to the server
    const response = await fetch("http://your-backend-api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();
    setMessages([
      ...messages,
      { text: userMessage, type: "user" },
      { text: data.message, type: "bot" },
    ]);
    setUserMessage("");
  };

  return (
    <section>
      <div className="session">
        <div>
          {messages.map((msg, index) => (
            <div key={index} className={msg.type}>
              {msg.text}
            </div>
          ))}
        </div>
        <textarea
          className="session__text-area"
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
      </div>
      <button className="session__button" onClick={sendMessage}>
        Send
      </button>
    </section>
  );
};

export default ChatComponent;
