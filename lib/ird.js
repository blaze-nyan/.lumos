require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
// const API_KEY = "AIzaSyCnYYQNxFSKbKOH3v7c0yFO4eeSG2xuPlc";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(apiKey);

export async function ird(user_chat) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [
          {
            text: "Contact Information for International Relations and Development",
          },
        ],
      },
      {
        "role": "user",
        "parts": [{ "text": "request assistant" }]
      },
      {
        "role": "model",
        "parts": [{
        "text": "For all inquiries, please call our main reception between 8.30 am-4.30 pm, Monday to Friday:\nRangsit University International College (RIC)\n52/347 Muang-Ake Phaholyothin Road\nLak-Hok Muang Pathumthani 12000\nThailand\n\nEmail: rsuip@rsu.ac.th\nTelephone: + 66 (0)2 992-2200 ext 4012, 4019\nFax: +66 (0)2 997-2200 ext 4016"
          }]
      },
      {
        role: "model",
        parts: [
          { text: "- Dr. Sasiphattra Siriwato" },
          { text: "- Email: sasiphattra.s@rsu.ac.th" },
        ],
      },
    ],
    generationConfig: {
      maxOutputTokens: 30000,
    },
  });

  const msg = user_chat;

  const result = await chat.sendMessage(msg);
  const response = await result.response;
  const text = response.text();
  return text;
}
