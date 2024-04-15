"use client";
import Image from "next/image";
import { useState } from "react";
import Arrow from "../components/arrow/Arrow";
import { useRouter } from "next/navigation";
import Link from "next/link";

const subjectsSet1 = [
  { name: "ICT", path: "Ict" },
  { name: "International Business", path: "InternationalBusiness" },
  { name: "Fashion Design", path: "Fashion" },
  { name: "Biomedical Science", path: "BiomedScience" },
  { name: "Computer Science", path: "ComputerScience" },
  { name: "Hospitality and Tourism", path: "Hospitality" },
];

const subjectsSet2 = [
  { name: "Digital Innovation", path: "DigitalInnovation" },
  { name: "Communication Arts", path: "CommunicationArt" },
  { name: "IRD", path: "Ird" },
  { name: "Biomedical Engineering", path: "BiomedEngineer" },
  { name: "Civil Engineering", path: "CivilEngineering" },
  { name: "Interior Design", path: "InterriorDesign" },
];

export default function Home() {
  const [isSet1Visible, setIsSet1Visible] = useState(true);
  const router = useRouter();

  const toggleChatPrompts = () => {
    setIsSet1Visible((prev) => !prev);
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
            <Link
              href={`/${subject.path}`}
              className={`${subject.name}`}
              key={index}
            >
              <button className="prompt-button">{subject.name}</button>
            </Link>
          ))}
        </div>
        {/* Second set of chat prompts (initially hidden) */}
        <div
          className="chat-prompts"
          id="set2"
          style={{ display: isSet1Visible ? "none" : "block" }}
        >
          {subjectsSet2.map((subject, index) => (
            <Link
              href={`/${subject.path}`}
              className={`${subject.name}`}
              key={index}
            >
              <button key={index} className="prompt-button">
                {subject.name}
              </button>
            </Link>
          ))}
        </div>
        <Arrow onClick={toggleChatPrompts} isSet1Visible={isSet1Visible} />
      </div>
    </div>
  );
}
