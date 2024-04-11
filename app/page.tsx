"use client";
import Image from "next/image";
import { useState } from "react";
import Arrow from "../components/arrow/Arrow";

export default function Home() {
  const [isSet1Visible, setIsSet1Visible] = useState(true);

  const toggleChatPrompts = () => {
    setIsSet1Visible((prev) => !prev);
  };

  return (
    <>
      <header className="chatbot-header">
        <h1 className="chatbot-title">Welcome to <span>Rangsit International College</span> Assistant</h1>
      </header>
      <div className="chatbot-content">
        {/* First set of chat prompts */}
        <div className="chat-prompts" id="set1" style={{ display: isSet1Visible ? "block" : "none" }}>
          <button className="prompt-button">Information and Communication Technology</button>
          <button className="prompt-button">International Business</button>
          <button className="prompt-button">Fashion Design</button>
          <button className="prompt-button">Biomedical Science</button>
          <button className="prompt-button">Computer Science</button>
          <button className="prompt-button">Hospitality and Tourism</button>
        </div>
        {/* Second set of chat prompts (initially hidden) */}
        <div className="chat-prompts" id="set2" style={{ display: isSet1Visible ? "none" : "block" }}>
          <button className="prompt-button">Digital Innovation</button>
          <button className="prompt-button">Communication Arts</button>
          <button className="prompt-button">International Relations and Development</button>
          <button className="prompt-button">Biomedical Engineering</button>
          <button className="prompt-button">Civil Engineering</button>
          <button className="prompt-button">Interior Design</button>
        </div>
        <Arrow onClick={toggleChatPrompts} isSet1Visible={isSet1Visible} />
      </div>
    </>
  );
}
