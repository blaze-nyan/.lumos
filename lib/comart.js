require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
// const API_KEY = "AIzaSyCnYYQNxFSKbKOH3v7c0yFO4eeSG2xuPlc";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(apiKey);

export async function comart(user_chat) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Communication Arts" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "- Fee\n-530,000\n\nCareer opportunities\n-There continues to be a huge demand for graduates in all areas of Comm Arts, and employment prospects are excellent, which include:\nAccount Executive\nPublic Relations Practitioner\nCopywriter\nColumnist\nNews Editor\nEvent Organizer\nContent Creator\nMarketing Communications\nWriter\nCreative\nColumnist\nBlogger",
          },
        ],
      },

      {
        role: "user",
        parts: [{ text: "Why study in Communication Arts?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "- Holistic knowledge of communication\n- Modern and uniquely designed program to enhance career opportunities\n- World-leading academics and highly experienced lecturers\n- Multidisciplinary education\n- Third language proficiency\n- Local and/or abroad internship program\n- International experience\n- Outstanding mix of friends from all over the world",
          },
        ],
      },

      {
        role: "user",
        parts: [{ text: "Course plan for Communication Arts" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "General Education Courses (30 credits)\nI. Humanities and Social Sciences (9 credits)\nCourses from humanities and social sciences disciplines.\nII. Sciences and Mathematics (3 credits)\nCourses from science and mathematics disciplines.\nIII. Languages (15 credits)\nCourses in languages to develop proficiency.\nIV. Interdisciplinary and Physical Education (3 credits)\nInterdisciplinary courses to broaden perspectives and physical education courses.\nCore Courses (90 credits)\nI. Professional Foundation Courses (36 credits)\nICO 111 - Communication Theories\nICO 113 - Speech for Communication\nICO 116 - Language in Communication Arts\nICO 211 - Law and Ethics for Communication Arts\nICO 215 - Digital Photography for Communication\nICO 218 - Intercultural Communication\nICO 222 - Ethic of Mass Communication\nICO 228 - Audience Analysis in Digital Era\nICO 230 - Communication in Current Affairs\nICO 231 - Creative Contents for Digital Media\nICO 311 - Communication Research\nICO 349 - Communication Entrepreneurs\nII. Major Courses (39 credits)\nRequired Major Courses (39 credits)\nICA 111 - Introduction to Journalism\nICA 120 - Introduction to Radio and Television\nICA 122 - Principles of Strategic Communication\nICA 131 - Principles of Public Relations\nICA 132 - Persuasive Communication\nICA 217 - Psychology of Communication\nICA 251 - Target Audience Behavior\nICA 253 - Advanced Writing for Communication\nICA 311 - Strategic Communication Planning and Evaluation\nICA 312 - Production for Multimedia\nICA 336 - Presentation Techniques in Public Relations\nICA 354 - Integrated Marketing Communication\nICA 491 - Communication Arts Professional Seminar\nICA 492 - Senior Project\nICA 493 - Internship in Communication Arts\nICA 494 - Co-operative Education\nElective Major Courses (9 credits)\nICA 220 - Introduction to News Writing and Reporting\nICA 316 - Mass Communication Business\nICA 336 - Presentation Techniques in Public Relations\nICA 351 - Media Planning\nICA 354 - Integrated Marketing Communication\nICA 361 - Advertising Presentation\nIII. Minor Courses (15 credits)\nAdvertising\nIAD 311 - Creative Strategy for Advertising\nIAD 351 - Media Planning\nIAD 356 - Advertising Design\nIAD 358 - Photography for Advertising\nIAD 360 - Brand Management\nIAD 361 - Content Marketing\nIAD 362 - Creative Marketing Activities\nIAD 432 - Advertising Campaign\nIAD 451 - Advertising Management\nPublic Relations\nIPR 233 - Image and Reputation Management\nIPR 234 - Marketing Public Relations\nIPR 305 - Organizational Communication\nIPR 311 - Creative Strategy for Public Relations\nIPR 332 - Public Relations Campaign\nIPR 337 - Photography for Public Relations\nIPR 362 - Creative Public Relations Activities\nIPR 433 - Public Relation in Crisis Situation\nIPR 434 - Public Relations Management\nJournalism\nIJR 222 - Interviewing Arts and Techniques\nIJR 245 - Graphic Design for Journalism\nIJR 331 - Electronic Publishing\nIJR 345 - Journalistic Photography\nIJR 346 - Editing for Journalism\nIJR 347 - Article and Critique Writing\nIJR 450 - Editing and Newspaper Production\nIJR 453 - Editing and Magazine Production\nVisual and Audio Media Production\nIMP 223 - Storytelling\nIMP 224 - Short Film Production\nIMP 225 - Audiovisual Media Production\nIMP 226 - Acting For Film\nIMP 227 - Entertainment Media Criticism\nMinor Courses (Choose 15 credits)\nIAD 361 - Content Marketing\nICO 349 - Communication Entrepreneurs\nIJR 245 - Graphic Design for Journalism\nIJR 347 - Article and Critique Writing\nIPR 234 - Marketing Public Relations\nFree Elective Courses (6 credits)",
          },
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
