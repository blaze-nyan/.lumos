require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
// const API_KEY = "AIzaSyCnYYQNxFSKbKOH3v7c0yFO4eeSG2xuPlc";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(apiKey);

export async function intedesign(user_chat) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Employment Outcomes - Interior Design" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "- Interior designer\n- Interior design consultant\n- Design researcher\n- Furniture designer\n- Interior product designer\n- Lighting designer\n- Event and exhibition designer\n- Prop designer\n- Set designer\n- Interior design stylist\n- Interior visualizer\n- Material supervisor\n- Project manager\n- Construction manager\n- Site supervisor\n- Interior contractor\n- Window display designer\n- Interior studio owner",
          },
        ],
      },

      {
        role: "user",
        parts: [{ text: "Fee - Interior Design" }],
      },
      {
        role: "model",
        parts: [{ text: "- 568,200" }],
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
        parts: [{ text: "Course Description/Purpose - Interior Design" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "- Department of interior design is committed to cultivating creativity among the learners to be the driving force behind the learning and the design process as well as the operation and practice at the individual level and as part of the team. Department of interior design develops the up to date curriculum to facilitate the grooming of analytical thinking, problem-solving skill and creative solutions that respond to the users and the usage of space. It also takes into consideration the role of designers in contemporary society that requires the development of knowledge for sustainable design and environmental considerations, alongside the design process.",
          },
        ],
      },

      {
        role: "user",
        parts: [{ text: "Contact Information for Interior Design" }],
      },
      {
        role: "model",
        parts: [
          { text: "- Dr. Sutarnthip Ruengprapavut" },
          { text: "- Email: sutarnthip.r@rsu.ac.th" },
          { text: "- Coordinator:" },
          { text: "  - Asst. Prof Tanett Pongtheerat" },
          { text: "  - Email: tanett.p@rsu.ac.th" },
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
