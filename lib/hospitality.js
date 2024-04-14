require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
// const API_KEY = "AIzaSyCnYYQNxFSKbKOH3v7c0yFO4eeSG2xuPlc";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(apiKey);

export async function hospitality(user_chat) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Fee for IHI" }],
      },
      {
        role: "model",
        parts: [{ text: "- 510,000" }],
      },

      {
        role: "user",
        parts: [{ text: "Employment Outcomes for IHI" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "- Graduates of the program are highly employable across a range of organizations, not only within hospitality and tourism. Excellent career opportunities exist in operational management roles, hotel management, tourism & hospitality, international resorts and tourism consultancy",
          },
        ],
      },

      {
        role: "user",
        parts: [{ text: "Study Plan for IHI" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "A. General Education Courses (30 Credits)\nI. Humanities and Social Sciences (3 Credits)\nII. Sciences and Mathematics (9 Credits)\nIII. Languages (15 Credits)\nIV. Interdisciplinary and Physical Education (3 Credits)\nB. Core Courses (97 Credits)\nI. Professional Foundation Courses (36 Credits)\nIAC 111 Accounting for Non-Accountant (3 Credits)\nIFN 201 Business Finance (3 Credits)\nIHI 101 International Tourism and Hospitality (3 Credits)\nIHI 102 Psychology for Hospitality and Cross-Cultural Communication (3 Credits)\nIHI 103 Hospitality Arts and Personality Development (3 Credits)\nIHI 108 Comparative Religions (3 Credits)\nIHI 301 Sustainable Hospitality Business Management (3 Credits)\nIHI 319 Consumer Behavior (3 Credits)\nIHI 376 Human Resource Management (3 Credits)\nIMG 201 Modern Management and Organization Behavior (3 Credits)\nIMK 201 Principles of Marketing (3 Credits)\nIEG 350 English for Professional Development (3 Credits)\nII. Major Courses (61 Credits)\nRequired Major Courses (40 Credits)\nIHI 305 Ecotourism, Adventure, and Medical Tourism (3 Credits)\nIHI 310 Hotel Operations and Management (3 Credits)\nIHI 328 Geography for Tourism Business (3 Credits)\nIHI 335 Food and Beverage Management and Operations (3 Credits)\nIHI 348 Room Division and Front Office (3 Credits)\nIHI 354 Tour Package Planning and Management (3 Credits)\nIHI 355 Airline Business Management (3 Credits)\nIHI 362 Catering Banquet Management (3 Credits)\nIHI 375 Hotel and Tourism Sales and Marketing (3 Credits)\nIHI 402 Ethics and Laws Related to Hospitality (3 Credits)\nIPO 302 Research Methodology for Hospitality (3 Credits)\nIHI 493 Preparation for Internship in Hospitality (1 Credit)\nIHI 425 Strategic Management and Current Issues in Hospitality Industry (3 Credits)\nIHI 494 Internship in Hospitality Industry (3 Credits)\nIHI 496 Co-operative Education (6 Credits)\nElective Major Courses (6 Credits)\nIHI 221 International Experience I (3 Credits)\nIHI 325 Multimedia for Hospitality Business (3 Credits)\nIHI 322 International Experience II (3 Credits)\nIHI 352 Taxation and Duties in Tour Business (3 Credits)\nIHI 360 Bar and Beverage Management (3 Credits)\nIHI 387 Hotel and Tourism Information Systems (3 Credits)\nIHI 418 Resort and Spa Management (3 Credits)\nIHI 428 Thai Culinary Arts Theory and Practice (3 Credits)\nIHI 429 International Culinary Arts Theory and Practice (3 Credits)\nIHI 456 Charter Flight Brokerage Management (3 Credits)\nIHI 457 Advertising and Sales Promotion in Hospitality Business (3 Credits)\nILC 113 Business Chinese (3 Credits)\nILJ 113 Business Japanese (3 Credits)\nILF 113 Business French (3 Credits)\nILS 113 Business Spanish (3 Credits)\nILG 113 Business German (3 Credits)\nILK 113 Business Korean (3 Credits)\nITA 113 Business Thai (3 Credits)\nIII. Minor Courses (15 Credits)\nIHI 331 Special Event Operation Principles (3 Credits)\nIHI 332 Meeting, Convention, and Conference Organization (3 Credits)\nIHI 333 Exhibition and Tradeshow Organization (3 Credits)\nIHI 334 Venue Management for Events (3 Credits)\nIHI 335 Festival Planning and Organization (3 Credits)\nIHI 431 Event Marketing and Sponsorship (3 Credits)\nIHI 351 Foundations of Culinary Principles (3 Credits)\nIHI 352 Preparation and Baking of Cakes, Pies, and Yeast-based Products (3 Credits)\nIHI 353 Occidental Culinary Arts (3 Credits)\nIHI 428 Thai Culinary Arts Theory and Practice (3 Credits)\nIHI 355 Arts of Baking and Decorating Pastries and Bakeries (3 Credits)\nIHI 451 Culinary Arts of the Thai Royal Courts (3 Credits)\nIHI 452 Gastronomic Trends and Contemporary Food Styling (3 Credits)\nIHI 361 Air Cargo Management (3 Credits)\nIHI 362 Airport Management (3 Credits)\nIHI 363 Airline Ticketing and Reservation (3 Credits)\nIHI 364 In-flight Passenger Service Management (3 Credits)\nIHI 365 Passenger Ground-service Handling and Management (3 Credits)\nIHI 461 In-flight Catering Management (3 Credits)\nIHI 310 Hotel Operations and Management (3 Credits)\nIHI 319 Consumer Behavior (3 Credits)\nIHI 328 Geography for Tourism Business (3 Credits)\nIHI 335 Food and Beverage Management and Operations (3 Credits)\nIHI 348 Room Division and Front Office (3 Credits)\nIHI 355 Airline Business Management (3 Credits)\nIHI 375 Hotel and Tourism Sales and Marketing (3 Credits)\nIHI 354 Tour Package Planning and Management (3 Credits)\nIHI 402 Ethics and Laws Related to Hospitality Industry (3 Credits)\nIHI 362 Catering Banquet Management (3 Credits)\nC. Free Elective Courses (9 Credits)",
          },
        ],
      },

      {
        role: "user",
        parts: [
          {
            text: "Contact Information for Tourism, Hospitality, and Sports Department",
          },
        ],
      },
      {
        role: "model",
        parts: [{ text: "- A. Nicha Chavalit\n- Email: nicha.c@rsu.ac.th" }],
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
