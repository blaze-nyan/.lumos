require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
// const API_KEY = "AIzaSyCnYYQNxFSKbKOH3v7c0yFO4eeSG2xuPlc";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(apiKey);

export async function di(user_chat) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Fee - Digital Innovation" }],
      },
      {
        role: "model",
        parts: [{ text: "- 574,600 for 2.5 years" }],
      },

      {
        role: "user",
        parts: [{ text: "Course Plan - Digital Innovation" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "- A. General Education (30 credits)\n  1st Year, Summer Semester\n  XXX xxx English Language Group 1 (3 credits)\n  XXX xxx International Language (3 credits)\n  RSU 112 Sports for Health (1 credit)\n  RSU 113 Digital Literacy (2 credits)\n  Total: 9 credits\n  ...\n  D. Total Credits: 126 credits",
          },
        ],
      },

      {
        role: "user",
        parts: [{ text: "Contact Information for Digital Innovation" }],
      },
      {
        role: "model",
        parts: [
          { text: "- Name: Asst. Prof. Dr. Karn Yongsiriwit" },
          { text: "- Email: karn.y@rsu.ac.th" },
        ],
      },

      {
        role: "user",
        parts: [
          { text: "Contact Information for Communication Arts Department" },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "- Assistant Prof. Dr. Duangthip Charoenruk\n- Email: duangtipc@hotmail.com",
          },
        ],
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
