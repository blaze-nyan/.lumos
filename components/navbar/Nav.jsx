"use client";
import React from "react";
import Link from "next/link";
import "./nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toogleNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="navbar">
        <Link href="/" className="p-2">
          <img
            src="/lumos.png"
            alt="lumos"
            loading="lazy"
            className="lumos size-10"
          />
        </Link>

        <ul className="flex flex-row justify-between items-center">
          <li>
            <Link href="/">Main page</Link>
          </li>
          <li>
            <Link href="/eventspage">Event</Link>
          </li>
          <li>
            <Link href="/clubs">Club</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/chatroom">Chat</Link>
          </li>
          <li>
            <Link href="/minichat">Shine Ai</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
