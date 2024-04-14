require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
// const API_KEY = "AIzaSyCnYYQNxFSKbKOH3v7c0yFO4eeSG2xuPlc";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(apiKey);

export async function bioengin(user_chat) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Fee - Biomedical Engineering" }],
      },
      {
        role: "model",
        parts: [{ text: "- 640,000" }],
      },

      {
        role: "user",
        parts: [{ text: "Course Description - Biomedical Engineering" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "- Biomedical Engineering is a multi-disciplinary program integrating engineering activities with basic medical knowledge of human physiology and an understanding of how it functions to assist healthcare providers in supplying better care and treatment to patients through the use of technology.\n- During the 21st century, various advances in the field of medicine have been made, such as diagnostics devices, therapeutic devices, medical robotic, medical imaging, rehabilitation engineering, life support systems, biomaterials and tissue engineering.\n- Advances in technology for the need to find cure, promote well-being and build healthy communities make Biomedical Engineers one of the most in-demand positions for the healthcare industries, which is one of the world’s largest industrial sectors with a turnover approaching more than 20 billion USD per annum and an expanding rate of 9% per annum.\n- To keep updated in healthcare services and solutions, advanced techniques like AI, machine learning and Big Data are integrated into this program.\n- Students are also encouraged to join overseas exchange programs, cooperative education and pursue the 4+1 track of the master degree program.\n\nKnowledge, skills and competencies and graduates\n1. Have the basic skills in research and development for inventing new innovated devices and also become a business owner in the biomedical engineering industry.\n2. Understand the principles of biomedical engineering in research and development, in production and quality control at government or private companies engaged in the manufacturing of medical devices.\n3. Maintenance, repair, modification, and application of medical devices, and hospital engineering including assessments of medical technology.\n4. Management of procurement, use, and distribution of consultancy projects in biomedical engineering works.\n5. Pursue postgraduate studies in biomedical engineering and related fields\n6. Having good ethics and morals, possessing academic competency in both national and international competitions and professional readiness\n\nPotential Career\nUpon completion, graduates will be able to invent new biomedical instruments and select new technologies that are necessary and suitable in servicing, maintenance and application of medical devices. Potential career paths include:\n1. Biomedical engineer or clinical engineer in both public and private sector\n2. Service engineer for medical devices\n3. Product specialist for businesses involved in medical devices, both public and private sector\n4. Specialists in research and development, in production or quality control department of government agencies or private companies engaged in the manufacture of medical devices\n5. Sales executive in businesses engaged in medical devices\n6. Set-up own business in the sale, service or consultation in the fields of medical equipment and biomedical engineering\n7. Pursue higher education in Biomedical Engineering and related fields\n\nFields of Research and Innovation in Biomedical Engineering\n1. Biomedical Instrumentation\n2. Medical Signal and Image Processing\n3. Artificial Intelligence and Medical Robotics\n4. Clinical Engineering\n5. Biophysics and Medical Optics\n6. Medical Material and Tissue Engineering\n7. Smart Innovation and Rehabilitation for the Elderly\n8. Information System for Medical Management\n9. Metaverse in Healthcare and Medical Applications",
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
