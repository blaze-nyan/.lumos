"use client";
import Image from "next/image";
import { useState } from "react";
import Arrow from "../components/arrow/Arrow";
import ChatRoom from "./(site)/chatroom/page";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout";

const subjectsSet1 = [
  { name: "ICT", path: "/chatroom" },
  { name: "International Business" },
  { name: "Fashion Design" },
  { name: "Biomedical Science" },
  { name: "Computer Science" },
  { name: "Hospitality and Tourism" },
];

const subjectsSet2 = [
  { name: "Digital Innovation" },
  { name: "Communication Arts" },
  { name: "IRD" },
  { name: "Biomedical Engineering" },
  { name: "Civil Engineering" },
  { name: "Interior Design" },
];

export default function Home() {
  const [isSet1Visible, setIsSet1Visible] = useState(true);
  const router = useRouter();

  const toggleChatPrompts = () => {
    setIsSet1Visible((prev) => !prev);
  };
  const handleIctClick = () => {
    router.push("/chatroom");
  };

  return (
    <div className="chatbot-container">
      <header className="chatbot-header">
        <img src="/lumos.png" alt="logo" className="lumos-logo" />
        <h1 className="chatbot-title">On Your Way!</h1>
      </header>
      <div className="chatbot-content">
        {/* First set of chat prompts */}
        <div
          className="chat-prompts"
          id="set1"
          style={{ display: isSet1Visible ? "block" : "none" }}
        >
          {subjectsSet1.map((subject, index) => (
            <button
              key={index}
              className="prompt-button"
              onClick={subject.path === "/chatroom" ? handleIctClick : () => {}}
            >
              {subject.name}
            </button>
          ))}
        </div>
        {/* Second set of chat prompts (initially hidden) */}
        <div
          className="chat-prompts"
          id="set2"
          style={{ display: isSet1Visible ? "none" : "block" }}
        >
          {subjectsSet2.map((subject, index) => (
            <button key={index} className="prompt-button">
              {subject.name}
            </button>
          ))}
        </div>
        <Arrow onClick={toggleChatPrompts} isSet1Visible={isSet1Visible} />
      </div>
    </div>
  );
}
