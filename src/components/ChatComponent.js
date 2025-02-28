import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import axios from "axios";
import "../styles/ChatComponent.css";

const socket = io("http://localhost:5000");

const ChatComponent = ({ user, room }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!room) return;
    socket.emit("joinRoom", { room });
    axios
      .get(`/api/v1/chat/${room}`)
      .then((res) => setMessages(res.data))
      .catch((err) => console.error("Error fetching chat:", err));
    socket.on("receiveMessage", (newMessage) =>
      setMessages((prev) => [...prev, newMessage])
    );
    return () => socket.off("receiveMessage");
  }, [room]);

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("sendMessage", { message, sender: user._id, room });
      setMessage("");
    }
  };

  return (
    <div className="chat-container">
      <h3>Chat Room: {room}</h3>
      <div className="messages-container">
        {messages.map((msg, index) => (
          <p
            key={index}
            className={
              msg.sender?._id === user._id ? "my-message" : "other-message"
            }
          >
            <strong>{msg.sender?.name || "DRP member"}:</strong> {msg.message}
          </p>
        ))}
        {/* Scroll to the bottom */}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
