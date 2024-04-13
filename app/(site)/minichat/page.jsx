"use client";
import { useState } from "react";
import Button from "@/components/button/Button";
import Chat from "@/components/chat/Chat";
import Sample from "@/components/samplechat/Sample"

const useMinichat = () => {
  const [appear, setAppear] = useState(false);
  return (
    <div className="logo">
      <div className="text-center flex flex-col items-center justify-center">
        <div className="text">VVS</div>
        <img src="/VVS.png" alt="vvs" />

        {appear ? (
          <div className="w-56">
            {/* <Chat /> */}
            <Sample/>
          </div>
        ) : null}
      </div>
      <Button setAppear={setAppear} />
    </div>
  );
};

export default useMinichat;
