require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
// const API_KEY = "AIzaSyCnYYQNxFSKbKOH3v7c0yFO4eeSG2xuPlc";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(apiKey);

export async function civil(user_chat) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Employment Outcomes - Civil Engineering" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "- After completion of the program, graduates typically take the Professional Licensing Examination to become professional engineers. Excellent career prospects include design, project management, and research and development engineers in both the private and public sectors. Civil engineers are the dominant drivers in the development of infrastructure, and resource and environmental management of the country and its surrounding region",
          },
        ],
      },

      {
        role: "user",
        parts: [{ text: "Fee - Civil Engineering" }],
      },
      {
        role: "model",
        parts: [{ text: "- 620,000" }],
      },

      {
        role: "user",
        parts: [{ text: "Study Plan - Civil Engineering" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "A. General Education Courses (30 Credits)\nI. Humanities and Social Sciences (9 Credits)\nII. Sciences and Mathematics (3 Credits)\nIII. Languages (15 Credits)\nIV. Interdisciplinary and Physical Education (3 Credits)\nB. Area Courses (114 Credits)\nI. Basic Science Courses (21 Credits)\nCHM 121 Principles of Chemistry (3 Credits)\nCHM 122 Laboratory for Principles of Chemistry (1 Credit)\nMAT 136 Engineering Mathematics I (3 Credits)\nMAT 137 Engineering Mathematics II (3 Credits)\nMAT 138 Engineering Mathematics III (3 Credits)\nPHY 121 Physics I (3 Credits)\nPHY 122 Physics Laboratory I (1 Credit)\nPHY 223 Physics II (3 Credits)\nPHY 224 Physics Laboratory II (1 Credit)\nII. Basic Professional Courses (32 Credits)\nGEN 133 Engineering Drawing (3 Credits)\nGEN 192 Workshop Practice (2 Credits)\nCEN 221 Engineering Statics (2 Credits)\nCEN 223 Strength of Materials (3 Credits)\nCEN 283 Engineering Surveying (2 Credits)\nCEN 342 Hydraulics (3 Credits)\nCEN 292 Applied Mathematics for Civil Engineering (3 Credits)\nMEN 222 Engineering Materials (3 Credits)\nIEN 221 Probability and Statistics for Engineers (3 Credits)\nIEN 361 Engineering Materials (3 Credits)\nCPE 252 Computer Programming for Engineers (3 Credits)\nIII. Professional Courses (59 Credits)\nCEN 261 Civil Engineering Materials and Testing (3 Credits)\nCEN 284 Surveying Field Practice (1 Credit)\nCEN 285 Route Surveying (3 Credits)\nCEN 320 Structural Analysis I (3 Credits)\nCEN 321 Structural Analysis II (3 Credits)\nCEN 331 Reinforced Concrete Design (3 Credits)\nCEN 332 Computer-Aided Engineering and Design (3 Credits)\nCEN 343 Hydraulics Laboratory (1 Credit)\nCEN 344 Hydrology (3 Credits)\nCEN 362 Concrete Technology (3 Credits)\nCEN 370 Engineering Geology (3 Credits)\nCEN 371 Soil Mechanics (3 Credits)\nCEN 372 Soil Mechanics Laboratory (1 Credit)\nCEN 412 Construction Engineering and Management (3 Credits)\nCEN 433 Steel and Timber Design (3 Credits)\nCEN 444 Hydraulic Engineering (3 Credits)\nCEN 473 Foundation Engineering (3 Credits)\nCEN 476 Highway Engineering Laboratory (1 Credit)\nCEN 481 Highway Engineering (3 Credits)\nCEN 490 Civil Engineering Training (1 Credit)\nCEN 491 Civil Engineering Project I (1 Credit)\nCEN 492 Civil Engineering Project II (2 Credits)\nGEN 494 Preparation for Cooperative Education (1 Credit)\nCEN 495 Cooperative Education (3 Credits)\nB. Professional Elective Courses (6 Credits)\nComputer Hardware Design\nCEN 401 Advanced Engineering Mathematics (3 Credits)\nCEN 402 Numerical Methods (3 Credits)\nCEN 410 Contracts, Specifications and Cost Estimation (3 Credits)\nCEN 413 Engineering Project Management (3 Credits)\nCEN 432 Prestressed Concrete Design (3 Credits)\nCEN 435 Structural Building Design (3 Credits)\nCEN 436 Bridge Design (3 Credits)\nCEN 437 Design of Small Building (3 Credits)\nCEN 438 Introduction to Finite Element (3 Credits)\nCEN 439 Structural Dynamics and Earthquake Engineering (3 Credits)\nCEN 446 Water Resource and Irrigation Engineering (3 Credits)\nCEN 447 Coastal and Harbor Engineering (3 Credits)\nCEN 448 Open Channel Flow (3 Credits)\nCEN 451 Flood and Drought Engineering (3 Credits)\nCEN 452 Tsunami Engineering (3 Credits)\nCEN 453 Storm and Storm Surge Engineering (3 Credits)\nCEN 461 Water Supply and Sanitary Engineering (3 Credits)\nCEN 474 Landslides, Mudslides and Debris Flows (3 Credits)\nCEN 475 Soil Improvement Techniques (3 Credits)\nCEN 480 Transportation Engineering (3 Credits)\nCEN 482 Construction Surveying (3 Credits)\nCEN 484 Photogrammetry (3 Credits)\nCEN 485 Pavement Engineering (3 Credits)\nCEN 486 Airport Design (3 Credits)\nCEN 487 Fundamentals of Geographic Information System (3 Credits)\nCEN 488 Traffic Engineering (3 Credits)\nCEN 489 Geometric Design of Highway (3 Credits)\nCEN 499 Special Topics in Civil Engineering (3 Credits)\nCEN 496 Cooperative Education for Civil Engineering (6 Credits)\nC. Free Elective Courses (6 Credits)",
          },
        ],
      },

      {
        role: "user",
        parts: [{ text: "Contact Information for Civil Engineering" }],
      },
      {
        role: "model",
        parts: [
          { text: "- A. Supattana Nirukkanaporn" },
          { text: "- Email: [Please provide the email address]" },
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
