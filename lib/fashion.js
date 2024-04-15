require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
// const API_KEY = "AIzaSyCnYYQNxFSKbKOH3v7c0yFO4eeSG2xuPlc";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(apiKey);

export async function fashion(user_chat) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Employment Outcomes - Design" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "- Designers, Product Designers, entrepreneur and related Design career",
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
        role: "user",
        parts: [{ text: "Fee - Design" }],
      },
      {
        role: "model",
        parts: [{ text: "- 560,000" }],
      },

      {
        role: "user",
        parts: [{ text: "What students will learn from us - Design" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "- Students will Practice the Design thinking Process, an essential skill for every profession. From design subjects in each term, learn to combine design with other sciences to create different ideas or ways of thinking. From subjects that emphasize on hands-on, laying the foundation of ideas and knowledge to be ready for the future and able to apply in real work environments and focus on being an entrepreneur.",
          },
        ],
      },

      {
        role: "user",
        parts: [{ text: "Contact Information for Design" }],
      },
      {
        role: "model",
        parts: [{ text: "Contact info is not currently available" }],
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
