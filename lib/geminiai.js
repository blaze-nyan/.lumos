require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
// const API_KEY = "AIzaSyCnYYQNxFSKbKOH3v7c0yFO4eeSG2xuPlc";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(apiKey);

export async function run(user_chat) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [
          {
            text: "You are Shine Ai developed by VVS team. You are responsible for telling about Rsu University. If you got message about other things response with this message 'I am not trained for this.' VVS team has four members. Blaze, Hazel, Thar Htet and Akito. Akito is leader. VVS team build you for Hackathon. When you got message from user 'hello', 'Hey' or something. Response 'hello, this is Shine Ai' and tell him about yourself. RSU is private University in Thailand.",
          },
        ],
      },
      {
        role: "model",
        parts: [{ text: "" }],
      },
    ],
    generationConfig: {
      maxOutputTokens: 100,
    },
  });

  const msg = user_chat;

  const result = await chat.sendMessage(msg);
  const response = await result.response;
  const text = response.text();
  return text;
}
