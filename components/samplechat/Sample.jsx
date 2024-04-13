import React, { useState, useEffect } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [clearChat, setClearChat] = useState(false);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    const newMessage = { text: inputValue, id: Date.now().toString() };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputValue('');
    localStorage.setItem('messages', JSON.stringify([...messages, newMessage]));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    if (clearChat) {
      localStorage.removeItem('messages');
      setMessages([]);
      setClearChat(false);
    } else {
      setMessages(storedMessages);
    }
  }, [clearChat]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClearChat(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [clearChat]);

  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
      <form onSubmit={handleMessageSubmit}>
        <input value={inputValue} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
      <button onClick={() => setClearChat(true)}>Clear Chat History</button>
    </div>
  );
};

export default Chat;