"use client";
import { useState, useEffect } from "react";
import { run } from "@/lib/geminiai";

import Link from "next/link";
import "./chatroom.css";
import Layout from "@/components/layout";

const prompts = [
  {
    title: "About this Faculty",
    description: "Learn more about the ICT faculty.",
  },
  {
    title: "Schedule",
    description: "View the available schedule for classes for this semester.",
  },
  {
    title: "Subject Informations",
    description: "Get information about the subjects in the ICT program.",
  },
  {
    title: "Lecturer Information",
    description: "Find out about the lecturers in the ICT department.",
  },
  {
    title: "Further Oppurtunities",
    description: "Oppurtinities after graduating with ICT.",
  },
  {
    title: "Request Assistance",
    description: "Need help? Request assistance from faculty members.",
  },
];
const ChatRoom = () => {
  const [inputValue, setInputValue] = useState("");
  const [aimessages, setAimessages] = useState([]);
  const [showPrompts, setShowPrompts] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = localStorage.getItem("messages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  // useEffect(()=> {
  //   const prePrompts = Boolean(localStorage.getItem("showPrompts"));
  //   if (prePrompts) {
  //     setShowPrompts(prePrompts)
  //   }
  // })
  // useEffect(() => {
  //   localStorage.setItem("showPrompts", showPrompts);
  // }, [showPrompts]);

  // useEffect(() => {
  //   localStorage.setItem("showPrompts", String(showPrompts));
  // }, [showPrompts]);

  // useEffect(() => {
  //   const prePrompts = localStorage.getItem("showPrompts");
  //   if (prePrompts) {
  //     setShowPrompts(prePrompts);
  //   }
  // }, []);

  useEffect(() => {
    const prePrompts = window.localStorage.getItem("showPrompts");

    if (prePrompts) {
      setShowPrompts(JSON.parse(prePrompts));
    }
  }, []);

  const handleInputClick = () => {
    setShowPrompts(false);
    window.localStorage.setItem("showPrompts", JSON.stringify(showPrompts));
  };
  const handleSendButtonClick = async (v) => {
    if (v.trim() !== "") {
      const newMessage = { text: v, sender: "user" };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setShowPrompts(false);
      window.localStorage.setItem("showPrompts", JSON.stringify(showPrompts));
      setInputValue("");

      var response = await run(v);
      if (response == "") {
        response = "Not Available";
      }
      const aiMessage = { text: response, sender: "ai" };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
      console.log(response);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.id === "user-input-ch") {
      handleSendButtonClick(inputValue);
      setShowPrompts(false);
      window.localStorage.setItem("showPrompts", JSON.stringify(showPrompts));
    }
  };
  const handleClearButtonClick = () => {
    setMessages([]);
    localStorage.removeItem("messages");
    setShowPrompts(true);
    window.localStorage.setItem("showPrompts", JSON.stringify(showPrompts));
  };

  const messageClass = (sender) => {
    return sender === "user" ? "user" : "ai";
  };

  return (
    <div className="chatbot-container-ch">
      <Link href="/" className="goback">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </Link>
      <header className="chatbot-header-ch">
        <h1 className="chatbot-title-ch">
          Lumos for <span>ICT</span>
        </h1>
      </header>
      {showPrompts ? (
        <div className="prompt-buttons-ch">
          {prompts.map((prompt, index) => (
            <div key={index} className="prompt-ch">
              <button
                className="prompt-button-ch"
                onClick={() => handleSendButtonClick(prompt.title)}
              >
                {prompt.title}
                <p className="prompt-description-ch">{prompt.description}</p>
              </button>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      <div className="chatbot-content-ch">
        <div className="message-con">
          {messages.map((message, index) => (
            <div key={index} className={`${messageClass(message?.sender)}`}>
              <div className="message-text">{message?.text}</div>
            </div>
          ))}

          {aimessages.map((message, index) => (
            <div key={index} className={`${messageClass(message?.sender)}`}>
              <div className="message-text">{message?.text}</div>
            </div>
          ))}
        </div>

        <div id="user-input-container-ch">
          <input
            type="text"
            id="user-input-ch"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onClick={handleInputClick}
            onKeyDown={handleKeyDown}
          />
          <button
            id="send-button-ch"
            onClick={() => handleSendButtonClick(inputValue)}
          >
            Send
          </button>
          <button id="clear-button" onClick={handleClearButtonClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="trash w-6 h-6 hover:stroke-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatRoom;
