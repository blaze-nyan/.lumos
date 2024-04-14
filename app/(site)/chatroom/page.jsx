"use client"
import { useState,useEffect} from 'react';
import { run } from "@/lib/geminiai";
import './chatroom.css';

const prompts = [
  {
    title: "About this Faculty",
    description: "Learn more about the ICT faculty."
  },
  {
    title: "Schedule",
    description: "View the available schedule for classes for this semester."
  },
  {
    title: "Subject Informations",
    description: "Get information about the subjects in the ICT program."
  },
  {
    title: "Lecturer Information",
    description: "Find out about the lecturers in the ICT department."
  },
  {
    title: "Further Oppurtunities",
    description: "Oppurtinities after graduating with ICT."
  },
  {
    title: "Request Assistance",
    description: "Need help? Request assistance from faculty members."
  }
];
const ChatRoom = () => {
  const [inputValue, setInputValue] = useState("");
  const [aimessages, setAimessages] = useState([]);
  const [showPrompts, setShowPrompts] = useState('true');
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
  useEffect(() => {
    localStorage.setItem("showPrompts", String(showPrompts));
  }, [showPrompts]);
  
  useEffect(() => {
    const prePrompts = localStorage.getItem("showPrompts") === "true";
    if (prePrompts) {
      setShowPrompts(true);
    }
  }, []);

  

  const handleInputClick = () => {
    setShowPrompts((prevShowPrompts) => !prevShowPrompts);
  };
  const handleSendButtonClick = async (v) => {
    setShowPrompts((prevShowPrompts) => !prevShowPrompts);
    if (v.trim() !== "") {
      const newMessage = { text: v, sender: "user" };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputValue("");

      var response = await run(v);
      if(response==""){
        response = "Not Available"
      }
        const aiMessage = { text: response, sender: "ai" };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
        console.log(response);      
    } 
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.target.id === 'user-input-ch') {
      handleSendButtonClick(inputValue);
    }
  };
  const handleClearButtonClick = () => {
    setMessages([]);
    localStorage.removeItem('messages');
    // setShowPrompts('true')
  };

  const messageClass = (sender) => {
    return sender === "user" ? "user" : "ai";
  };
  return (
    <div className="chatbot-container-ch">
      <header className="chatbot-header-ch">
        <h1 className="chatbot-title-ch">Lumos for <span>ICT</span></h1>
      </header>
      {showPrompts ? 
      <div className="prompt-buttons-ch">
        {prompts.map((prompt, index) => (
          <div key={index} className="prompt-ch">
            <button className="prompt-button-ch" onClick={()=> handleSendButtonClick(prompt.title)}>
              {prompt.title}
              <p className="prompt-description-ch">{prompt.description}</p>
            </button>
          </div>
        ))}
      </div> : ""}
      <div className="chatbot-content-ch">
        <div className="message-con ">
            {messages.map((message, index) => (
              <div key={index} className={`${messageClass(message?.sender)}`}>
                <div className="message-text">{message?.text}</div>
              </div>
            ))}

            {aimessages.map((message, index) => (
              <div key={index} className={`${messageClass(message?.sender)}`} >
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
          <button id="send-button-ch" onClick={() => handleSendButtonClick(inputValue)}>Send</button>
          <button id="clear-button" onClick={handleClearButtonClick}>Clear</button>
        </div>
      </div> 
    </div>
  );
};
export default ChatRoom;
