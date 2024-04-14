require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
// const API_KEY = "AIzaSyCnYYQNxFSKbKOH3v7c0yFO4eeSG2xuPlc";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(apiKey);

export async function ict(user_chat) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
      history: [
          {
              role: "user",
              parts: [{ text: "What is this" }],
          },
          {
              role: "model",
              parts: [{ text: "This is the guide for chat bot of ICT major in Rangsit university" }],
          },
          {
              role: "user",
              parts: [{ text: "I want to know more about subjects" }],
          },
          {
              role: "model",
              parts: [{ text: "put in the subject code that you want to know" }],
          },
      {
        role: "user",
        parts: [{ text: "ICT 111"}],
      },
      {
        role: "model",
        parts: [{ text: "Introduction to information technology; history of IT; pervasive themes in IT: digital logic, memory, storage, processing paradigms, operating systems, programminglanguages; introduction to telecommunications and computer networks: internet, intranets, and extranets; IT and its related and informing disciplines application domains: business information systems, electronic commerce, decision support systems, knowledge management; ethical issues in information society"}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 112 "}],
      },
      {
        role: "model",
        parts: [{ text: "Fundamental of information systems; business organizations and processes; business environments; information systems in organization; persons related to information systems; type of information systems; systems and application software; organizing data and 11 information; introduction to systems development: systems development life cycle (SDLC), system deployment; integration of IT into business, government and community systems; role of IT professionals in solving organizational problems."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT103"}],
      },
      {
        role: "model",
        parts: [{ text: "Concepts of information systems, related to information retrieval, database system hierarchical, network, relational, database management systems, applications of data structures and file systems to build database, database normalization, data description languages, data manipulation languages, database backup, data security, reliability and data integrity, database design practices."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 210 "}],
      },
      {
        role: "model",
        parts: [{ text: "The importance of laws related to digital technology; laws related to digital technology: trading and commerce issues, computer abuse, cybercrime, social justice, free speech, privacy, risk assessment in computer systems, intellectual properties, and ethics in digital technology professions."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 211"}],
      },
      {
        role: "model",
        parts: [{ text: "Data modeling using the Entity-Relationship (ER) model, the enhanced Entity-Relationship (EER) model, the relational data model and relational database constraints; functional dependencies and normalization for relational databases; introduction to NoSQL database technology, types and examples of NoSQL databases, Structured Query Language (SQL), procedural language and Structured Query Language (SQL), fundamentals of PL/SQLcontrol structures, collections and records, PL/SQL cursor, database security."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 302"}],
      },
      {
        role: "model",
        parts: [{ text: "Professional communications; teamwork concepts and issues; service management; social context of computing; intellectual property; legal issues in computing; organizational context; professional and ethics issues, responsibilities; history of computing; privacy and civil liberty."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 402"}],
      },
      {
        role: "model",
        parts: [{ text: "Research definition, significance of research, research processes, actors and roles in research, literature seeking, literature review and scientific reading, reference and citation, plagiarism and research ethics, information and communication technology article writing, developing research proposal, research report, data analysis and statistics for information technology research method."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 213"}],
      },
      {
        role: "model",
        parts: [{ text: "System components; system development life cycle (SDLC); requirement analysis; technical and operational feasibility studies; data flow diagram, entity relationship diagram, computer-aided software engineering (CASE) tools; transition from analysis to design: input design, output design; prototyping, system development, testing, implementation; documentation and presentation."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 215"}],
      },
      {
        role: "model",
        parts: [{ text: "Usability of interactive systems, universal usability, guidelines, principles, and theories, design, evaluation and the user experience, design case studies, direct manipulation and immersive environments, fluid, expressive human and command languages, devices, communication and collaboration, advancing the user experience, the timely user experience, documentation and user support (a.k.a. Help), information search, data visualization."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 301"}],
      },
      {
        role: "model",
        parts: [{ text: "Information system implementation; implementation process; architecture; acquisition and sourcing; intersystem communications; data mapping and exchange; integrative coding; scripting techniques; software security practices; miscellaneous issues; overview of programming languages."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 304"}],
      },
      {
        role: "model",
        parts: [{ text: "Fundamental aspects of network security; cyber-attack; security awareness; design of network security with Firewall; Industrial Control System Security e.g. SCADA; Critical infrastructure security e.g. power plant; Cyber warfare."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 305"}],
      },
      {
        role: "model",
        parts: [{ text: "Introduction to Project Management, the project management and information technology context, the project management process groups: a case study, project integration management, project scope management, project time management, project cost management, project quality management, project human resource management, project communications management, project risk management, project procurement management, project stakeholder managements."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 401"}],
      },
      {
        role: "model",
        parts: [{ text: "Issues for activities concerning current information technology,team working; meeting; conferencing; augmentation; methods of writing report; project writing; project presentation; seminar holding and seminar evaluation."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 101"}],
      },
      {
        role: "model",
        parts: [{ text: "Fundamental concepts of object-oriented technology; characteristics of objects; class and objects; object attributes and behaviors; base classes; inheritance; arrays; reuse of objects; basic concepts of object-oriented analysis and design using UML."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 102"}],
      },
      {
        role: "model",
        parts: [{ text: "Basic concepts of computer programming; skills necessary to develop modern application; features of a typical modern programming environment; techniques in developing 13 applications; object orientation and visual programming; basic features of programming language; emphasis on the use of practical examples to illustrate key aspects."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 202"}],
      },
      {
        role: "model",
        parts: [{ text: "Prerequisite: ICT 102 Computer Programming-1 Fundamental of the commercial programming environment; features of commercial batch and online processing systems; practical use of programming languages to implement a large number of existing online commercial systems; exploring a number of fundamental business online processing tasks and the used algorithms."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 212"}],
      },
      {
        role: "model",
        parts: [{ text: "Prerequisite: ICT 102 Computer Programming-1 Introduction to data structures and algorithms; string; array; record; pointer; linked list; list data structure; stack data structure; queue data structure; graph data structure; tree data structure; recursion; searching algorithms; sorting algorithms and analysis of algorithms."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 110"}],
      },
      {
        role: "model",
        parts: [{ text: "Structure of World Wide Web; web design concepts and techniques; practical steps to plan, organize, create, and maintain a web site from start to finish; digital media; web development using markup language such as HTML, XHTML, XML; vulnerabilities."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 209"}],
      },
      {
        role: "model",
        parts: [{ text: "Prerequisite: ICT 111 Introduction to Information Technology Foundations of networking; in-depth knowledge of data communications and networking theory; concepts and requirements relative to telecommunications and networking technologies; structures; hardware and software; types of computer networks; layers of control; network mechanism; routing and switching; physical layer; lab of networking design; security; network management; build and maintain a Local Area Network (LAN)."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 493 Internship"}],
      },
      {
        role: "model",
        parts: [{ text: "Students will enter an industrial training program with the industrial sector, the business sector, or other public organizations for a period of at least 280 hours. Student is required to do the report."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 494 Introduction to Senior Project"}],
      },
      {
        role: "model",
        parts: [{ text: "Prerequisite: Students are required to complete at least 45 credits earned from the compulsory core courses or granted approval from the Head of the Program.Creation of senior project topics; outlining and drafting senior projects; citations and reference formats; writing introduction for senior projects; compilation of theories; frameworks and existed works and/or related researches; writing for senior project methodologies; development and presentation of models and/or tools used in senior projects; preliminary examination of senior project proposals."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 495 Senior Project"}],
      },
      {
        role: "model",
        parts: [{ text: "Prerequisite: Students are required to complete ICT 494 Introduction to Senior Project and/or at least 45 credits earned from the compulsory core courses or granted approval from the Head of the Program.Completion of senior projects; printing standard for full senior projects; preparation for final examination of senior projects; final examination of senior projects."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 498 Co-operative Education"}],
      },
      {
        role: "model",
        parts: [{ text: "Prerequisite: Students are required to complete at least 60 credits earned from the major courses or granted approval from the Head of the Program. Minimum of 16 weeks or 560 hours must be achieved. This program is designed to enhance traditional academic study by providing students the opportunity to integrate academic study and classroom theory with productive and real-life work experience in Information and Communication Technology field at a work site in the community. It also provides the time to explore occupational areas and to develop skills, knowledge and attitudes needed to become productive and satisfied members of society."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 214 "}],
      },
      {
        role: "model",
        parts: [{ text: "Introduction to computer architecture and operating systems; hardware components and functions; processor, bus, external devices connector, memory, storage; service of operating systems; process, multiprogramming; time sharing system; management of computer resources; synchronization; concurrency; deadlock; starvation; job scheduling; advanced virtual memory organization; parallel processing."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 320 "}],
      },
      {
        role: "model",
        parts: [{ text: "Storyboarding; scene composition; lighting; music and sound effect; animation; multimedia technology; and user interaction."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 324"}],
      },
      {
        role: "model",
        parts: [{ text: "Introduction to data warehouse; characteristics of data warehouse; dimensional modelling, e.g., star schema and snowflake schema; data extraction; transformation and loading (ETL); metadata; data warehouse maintenance; online analytical processing (OLAP); dashboard; data mining process; database segmentation; classification; association rule discovery; data warehousing and data mining tools "}],
      
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 325"}],
      },
      {
        role: "model",
        parts: [{ text: "Object-Oriented Programming; Internet Programming with Socket; Industrial Control/ Monitoring Programming e.g. Modbus TCP/IP, Internet of Things Programming, Application Programming Interface e.g. JavaScript Object Notation."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 328 "}],
      },
      {
        role: "model",
        parts: [{ text: "Social facts; social computing; social media; fundamental of management; social web; social graph; social text; social business; social media strategy; social media in marketing; social media in innovation; social media in customer service; social media in knowledge management and human resource management; social media in public sector and business; social media engagement; social media analytics; crisis management."}],
      },
      {
        role: "user",
        parts: [{ text: "ICT 329"}],
      },
      {
        role: "model",
        parts: [{ text: "Basic concepts of big data analytics; application in social network analysis; big data analytics platform; social network analytics; MapReduce programming; MapReduce based computing framework; practical sessions dedicated to the implementation of big data analytics with selected programming language and tools."}],
      },
      {
        role: "user",
        parts: [{ text: "ICT 331"}],
      },
      {
        role: "model",
        parts: [{ text: "Introduction to cloud computing; Cloud deployment model; service model by perceiving Infrastructure as a service, platform as a service, and software as a service; distributed model; data security present a process of authentication and personal use; cloud computing model such as public cloud; community cloud; hybrid cloud, and personal cloud; business perspectives; service provider and service user that have a mutual service level agreement at present; concepts of the business for a cloud provider, design system, and deploy a suitable cloud-computing infrastructure; an excellent quality application determined by the ICT industry."}],
      },
      {
        role: "user",
        parts: [{ text: "ICT 333 "}],
      },
      {
        role: "model",
        parts: [{ text: "Foundation of enterprise architectures; define operating model; implement the operating model via enterprise architecture; enterprise architecture maturity; build the project at a time; use enterprise architectures to guide outsourcing."}],
      },
      {
        role: "user",
        parts: [{ text: "ICT 334 "}],
      },
      {
        role: "model",
        parts: [{ text: "Fundamental concepts of object-oriented analysis and design; class and object; object-oriented requirement elicitation; static object modeling; dynamic object modeling; object-oriented database; object-oriented database modeling; object-oriented database development; object query language; object-relational database management system; design, implementation and operation with object-oriented database management system."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 336"}],
      },
      {
        role: "model",
        parts: [{ text: "Introduction to machine learning; supervised learning; linear regression; least squares; logistic regression; neural network; k-nearest neighbour; support vector machine; unsupervised learning; k-mean clustering; expectation-maximization algorithm; dimensionality reduction; principal component analysis; cross-validation; evaluating estimator performance; machine learning applications."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 338"}],
      },
      {
        role: "model",
        parts: [{ text: "Introduction to artificial intelligence and applications; introduction to intelligent agent systems; expert systems; fuzzy systems; artificial neural networks; evolutionary computation; hybrid intelligent systems; examples of intelligent systems."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 339"}],
      },
      {
        role: "model",
        parts: [{ text: "Introduction to computer forensics, tracking on offender, encryption and forensics, data hiding, hostile code, electronic toolkit, investigating computers and host, introduction to the criminal justice system; related information technology law."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 352"}],
      },
      {
        role: "model",
        parts: [{ text: "Business eco-systems among the trends of digital technologies, formation of business models through innovations from digital technologies, changes in cost structure and revenue from adding value to intangible goods, leveraging open innovation, significance of tactic and digital strategy, digital transformation of the industry, and creating effective digital strategies."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 355"}],
      },
      {
        role: "model",
        parts: [{ text: "Concept of launching a business startup for innovative products and services. The main aim is to develop the essential knowledge, skills, and understanding of creative ideas for new products and processes to succeed in a business venture. Necessary business management, marketing, financial, operation and supply chain techniques that ensure business growth form the core of discussion and review materials."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 356"}],
      },
      {
        role: "model",
        parts: [{ text: "Introduction to cryptography; block cipher; stream cipher; symmetric and asymmetric cryptography; hash functions; message authentication code; authentication; access control; digital signature; session key generation and distribution; applications of cryptography; blockchain technology and its applications; blockchain generation."}],
      },
      
      
      {
        role: "user",
        parts: [{ text: "ICT 358 "}],
      },
      {
        role: "model",
        parts: [{ text: "Introduction to the importance of data science; data manipulation techniques; the data structure for data analysis; data analysis; predictive modeling; supervised segmentation; discriminant functions; model performance analytics; decision analytic thinking; model performance visualization; prediction via evidence combination; text representation and mining; similarity and nearest neighbors; unsupervised data mining and clustering; data science tasks and techniques; data science and business strategy."}],
      },
      
      
      {
        role: "user",
        parts: [{ text: "ICT 421"}],
      },
      {
        role: "model",
        parts: [{ text: "Concepts of wireless data network and modern knowledge of wireless implementation, emerging technologies such as wireless phone systems, mobile internet system, wireless local loop (WLL), satellite system, Bluetooth, etc., Wireless Local Area Network(WLAN) technologies, IEEE802.11 standard, wireless LAN topologies, major WLAN equipment: wireless NIC, access points, vehicle-to-everything (V2X) wireless, long range wireless power, wireless, sensing, wireless location tracking, wireless bridges and antenna systems, WLAN security systems, the design, planning, implementation, operation and troubleshooting of WLAN."}],
      },
      
      
      {
        role: "user",
        parts: [{ text: "ICT 422"}],
      },
      {
        role: "model",
        parts: [{ text: "Game design; game design document; game programming; game development; scene composition; character control; and user interface."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 425"}],
      },
      {
        role: "model",
        parts: [{ text: "Application development for mobile devices; development process; underling technology; and recent mobile application technology."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 426"}],
      },
      {
        role: "model",
        parts: [{ text: "Models and methods for storage and retrieval of information; topics include information retrieval techniques, text analysis and automatic indexing, document clustering, search techniques, search engine architecture, techniques for ranking search results, retrieval performance measurement, and current research topics related to search engine; image retrieval and multimedia retrieval."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 428"}],
      },
      {
        role: "model",
        parts: [{ text: "Computer vision technology; augmented reality technology; development process; how to use software, hardware and peripherals that is needed for development the augmented reality application."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 429"}],
      },
      {
        role: "model",
        parts: [{ text: "Organization structure; organizational communication; budgeting issues; personnel hiring; evaluation and promotion; physical plant layout; controls and procedures for routine daily operation; security and disaster planning; improves the adjustment from the academic to the business environment."}],
      },
      
      {
        role: "user",
        parts: [{ text: "ICT 489"}],
      },
      {
        role: "model",
        parts: [{ text: "Special topics in Information and Communication Technology areas, from semester to semester with change of content, topics must be approved by department head."}],
      },
      
      {
        role: "user",
        parts: [{ text: "Can I know about subjects?"}],
      },
      {
        role: "model",
        parts: [{ text: "You can put in the subject code to know the requirement and subject description"}],
      },
      
      {
        role: "user",
        parts: [{ text: ""}],
      },
      {
        role: "model",
        parts: [{ text: ""}],
          },
          {
              role: "user",
              parts: [{ text: "What are the tuition fees of ICT" }],
          },
          {
              role: "model",
              parts: [{ text: "The total fees of 511,000 baht for four years." }],
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
