require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
// const API_KEY = "AIzaSyCnYYQNxFSKbKOH3v7c0yFO4eeSG2xuPlc";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(apiKey);

export async function ib(user_chat) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "International Business" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "- Fee\n530,000\n- Career opportunities\nThere continues to be a huge demand for graduates in all areas of International Business and employment prospects are excellent in the fields of government and privately-owned companies, international organizations and entrepreneurship.",
          },
        ],
      },

      {
        role: "user",
        parts: [{ text: "Course plan for International Business" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "General Education Courses (30 credits)\nI. Humanities and Social Sciences (3 credits)\nII. Sciences and Mathematics (9 credits)\nIII. Languages (15 credits)\nIV. Interdisciplinary and Physical Education (3 credits)\nCore Courses (102 credits)\nI. Professional Foundation Courses (36 credits)\nIAC 100 - Principles of Financial Accounting (3 credits)\nIAC 103 - Principles of Managerial Accounting (3 credits)\nICS 211 - Computer-Based Problem Solving for Business (3 credits)\nIEC 211 - Principles of Microeconomics (3 credits)\nIEC 212 - Principles of Macroeconomics (3 credits)\nIFN 201 - Business Finance (3 credits)\nIHR 201 - Human Resource Management (3 credits)\nILA 112 - Business Law (3 credits)\nIMG 201 - Modern Management and Organization Behavior (3 credits)\nIMK 201 - Principle of Marketing (3 credits)\nIPO 201 - Operations Management (3 credits)\nIPO 200 - Quantitative Analysis and Business Statistics (3 credits)\nII. Major Courses (60 credits)\nRequired Major Courses (36 credits)\nIBM 301 - International Business Management (3 credits)\nIBM 334 - International Business Logistics (3 credits)\nIBM 445 - Cross Cultural Management (3 credits)\nIBM 460 - Global Competitive Strategy (3 credits)\nIBM 492 - Current Issues in International Business (3 credits)\nIFN 331 - International Finance (3 credits)\nILA 431 - International Trade Law (3 credits)\nIMG 336 - Leadership, Negotiation and Conflict Management (3 credits)\nIMK 331 - International Marketing (3 credits)\nIPO 302 - Research Methodology and Statistical Analysis (3 credits)\nIBM 431 - Export-Import Management (3 credits) - choose either IBM 431, IBM 498, or IBM 494\nIBM 498 - Internship (3 credits) - choose either IBM 431, IBM 498, or IBM 494\nOR - . IBM 494 - Co-operative Education (6 credits) - choose either IBM 431, IBM 498, or IBM 494\nElective Major Courses (24 credits)\nIAC 441 - International Accounting (3 credits)\nIBM 221 - International Experience I (3 credits)\nIBM 322 - International Experience II (3 credits)\nIBM 450 - International Commerce: ASEAN (3 credits)\nIBM 454 - E-Commerce for International Trade (3 credits)\nICS 211 - Computer Problem Solving in Business (3 credits)\nIFN 221 - Money and Banking (3 credits)\nIFN 431 - International Financial Markets and Institutions (3 credits)\nIMA 144 - Calculus for Business and Economics (3 credits)\nIMK 432 - Strategic Brand Management (3 credits)\nIMK 433 - Strategic Customer Relationship (3 credits)\nIMK 451 - Marketing Management (3 credits)\nITH 428 - Thai Culinary Arts Theory and Practice (3 credits)\nITH 429 - International Culinary Arts Theory and Practice (3 credits)\nFree Elective Courses (6 credits)",
          },
        ],
      },

      {
        role: "user",
        parts: [
          { text: "Contact Information for International Business Department" },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "- Head of Department: Ussanee Malisuwan\n- Email: ussaneem@yahoo.com",
          },
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
