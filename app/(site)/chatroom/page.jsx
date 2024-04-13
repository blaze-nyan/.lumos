


"use client"
import { useState } from 'react';
import { run } from "@/lib/geminiai";
import { useRouter } from 'next/router';

import './chatroom.css';

const ChatRoom = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [aimessages, setAimessages] = useState([]);
  const [showPrompts, setShowPrompts] = useState(true);
  // const router = useRouter();
  const handleInputClick = () => {
    setShowPrompts(false);
  };
  // const handleInputClick = () => {
  //   router.push('/chatroom', undefined, { shallow: true });
  // };

  // const handleSendButtonClick = async () => {
  //   if (inputValue.trim() !== "") {
  //     const newMessage = { text: inputValue, sender: "user" };
  //     setMessages((prevMessages) => [...prevMessages, newMessage]);

  //     const response = await run(inputValue);
  //     const newAiMessage = { text: response, sender: "ai" };
  //     console.log(response)
  //     console.log(newAiMessage)
  //     setAimessages((prevMessages) => [...prevMessages, newAiMessage]);
  //     setInputValue("");
  //   }
  // }
  const handleSendButtonClick = async () => {
    if (inputValue.trim() !== "") {
      const newMessage = { text: inputValue, sender: "user" };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
  
      var response = await run(inputValue);
      if(response==""){
        response = "Not Available"
      }
        const aiMessage = { text: response, sender: "ai" };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
        console.log(response)
        setInputValue("");
      
      
    }
  }

  const handleClearButtonClick = () => {
    setMessages([]);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendButtonClick();
    }
  };
  const messageClass = (sender) => {
    return sender === "user" ? "user" : "ai";
  };

  return (
    <div className="chatbot-container-ch">
      <header className="chatbot-header-ch">
        <h1 className="chatbot-title-ch">Chatbot for <span>ICT</span></h1>
      </header>
      <div className="chatbot-content-ch">
        <div className="message-con ">
          
            {messages.map((message, index) => (
              <div key={index} className={`${messageClass(message.sender)}`}>
                <div className="message-text">{message.text}</div>
              </div>
            ))}
          
          
            {aimessages.map((message, index) => (
              <div key={index} className={`${messageClass(message.sender)}`} >
                <div className="message-text">{message.text}</div>
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
          <button id="send-button-ch" onClick={handleSendButtonClick}>Send</button>
          {/* <button id="clear-button" onClick={handleClearButtonClick}>Clear</button> */}
        </div>
      </div>
      {/* <div className="prompt-buttons-ch">
        <div className="prompt-ch">
          <button className="prompt-button-ch">
            About this Faculty
            <p className="prompt-description-ch">Learn more about the ICT faculty.</p>
          </button>
        </div>
        <div className="prompt-ch">
          <button className="prompt-button-ch">
            Schedule
            <p className="prompt-description-ch">View the available schedule for classes for this semester.</p>
          </button>
        </div>
        <div className="prompt-ch">
          <button className="prompt-button-ch">
            Subject Informations
            <p className="prompt-description-ch">Get information about the subjects in the ICT program.</p>
          </button>
        </div>
        <div className="prompt-ch">
          <button className="prompt-button-ch">
            Lecturer Information
            <p className="prompt-description-ch">Find out about the lecturers in the ICT department.</p>
          </button>
        </div>
        <div className="prompt-ch">
          <button className="prompt-button-ch">
            Further Oppurtunities
            <p className="prompt-description-ch">Oppurtinities after graduating with ICT.</p>
          </button>
        </div>
        <div className="prompt-ch">
          <button className="prompt-button-ch">
            Request Assistance
            <p className="prompt-description-ch">Need help? Request assistance from faculty members.</p>
          </button>
        </div>
      </div> */}
    </div>
  );
};
export default ChatRoom;
