require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
// const API_KEY = "AIzaSyCnYYQNxFSKbKOH3v7c0yFO4eeSG2xuPlc";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(apiKey);

export async function bioscience(user_chat) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Fee - Biomedical Science" }],
      },
      {
        role: "model",
        parts: [{ text: "- 640,000" }],
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
        parts: [{ text: "Employment Outcomes - Biomedical Science" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "- Completion of the course will provide the graduate with the skills to enter a vast range of health-related industries including: Medical Research; Physiotherapy; Microbiology; Health Informatics; Occupational Health and Safety; Pharmaceutical Industry; Laboratory Technology.",
          },
        ],
      },

      {
        role: "user",
        parts: [{ text: "Course Plan - Biomedical Science" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "- A. General Education Courses (30 Credits)\n- B. Area Courses (94 Credits)\n  1) Basic Science Courses (17 Credits)\n  2) Major Courses (77 Credits)\n    2.1 Required Courses (65 Credits)\n    2.2 Elective Major Courses (12 Credits)\n- C. Free Elective Courses (6 Credits)",
          },
        ],
      },

      {
        role: "user",
        parts: [{ text: "Contact Information for Biomedical Science" }],
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
