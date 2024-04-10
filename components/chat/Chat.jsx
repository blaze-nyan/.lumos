import { useState } from "react";
import { run } from "@/lib/geminiai";

const Chat = () => {
  const [user_text, setUser_text] = useState("");
  const [reply, setReply] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newReply = await run(user_text);
    setReply(newReply);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full mt-6 flex flex-row justify-center items-center"
      >
        <textarea
          value={user_text}
          onChange={(event) => setUser_text(event.target.value)}
          className=" rounded-lg bg-green-400 text-black w-8/12 h-8 p-1"
        />
        <button
          type="submit"
          className="w-2/12 bg-green-600 text-xs rounded-sm p-1 ml-1 text-white"
        >
          Send
        </button>
      </form>
      <p className="text-white bg-slate-400 rounded-md mt-3 text-sm">{reply}</p>
    </div>
  );
};

export default Chat;
