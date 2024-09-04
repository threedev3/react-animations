// ChatbotComponent.js
import React, { useState, useEffect, useRef } from "react";
import Chatbot from "react-chatbot-kit";
import {
  ChatAltIcon,
  XIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import config from "./chatbotConfig.js";
import MessageParser from "./MessageParser.js";
import ActionProvider from "./ActionProvider.js";
import "react-chatbot-kit/build/main.css";

const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [inputMessage, setInputMessage] = useState("");

  const messageEndRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      setUnreadCount((prev) => prev + 1);
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setUnreadCount(0);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      // Here you would send the message to your chatbot logic
      setInputMessage("");
      setUnreadCount(0);
    }
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [unreadCount]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 relative"
        onClick={toggleChat}
      >
        {isOpen ? (
          <XIcon className="h-6 w-6" />
        ) : (
          <ChatAltIcon className="h-6 w-6" />
        )}
        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm">
            {unreadCount}
          </span>
        )}
      </button>
      {isOpen && (
        <div className="bg-white shadow-lg rounded-lg p-4 w-80 h-96 flex flex-col mt-2">
          <div className="flex-1 overflow-y-auto mb-2">
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
            <div ref={messageEndRef} />
          </div>
          <div className="flex items-center mt-2">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-l-lg p-2 focus:outline-none"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
              onClick={handleSendMessage}
            >
              <PaperAirplaneIcon className="h-5 w-5 transform rotate-90" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;
