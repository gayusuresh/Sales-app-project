// EDIT the [bracketed] values and answers to match your institute's real policy.
import { TA, TA_TABS } from "./faqTamil.js";
import { ML, ML_TABS } from "./faqMalayalam.js";

export const COURSES = [
  { id: "all", label: "All" },
  { id: "general", label: "Beginner & career-gap" },
  { id: "fees", label: "Fees & jobs" },
  { id: "fsd", label: "FSD-MERN" },
  { id: "agentic", label: "Agentic MERN" },
  { id: "da", label: "Data Analytics" },
  { id: "ds", label: "Data Science" },
  { id: "pw", label: "Playwright" },
  { id: "st", label: "Software Testing" },
];

const EN = [
  // ---- Beginner / non-tech / unemployed ----
  {
    c: "general",
    q: "I am from a non-IT background. Can I really learn this?",
    a: "Yes. We start from zero: how a website works, then basic logic, then code. Many of our learners come from commerce, arts, mechanical and other fields. What matters is 1-2 hours of daily practice, not your degree.",
    tip: "Ask: what did you study, and what do you do now? Then match a course.",
  },
  {
    c: "general",
    q: "I have no job right now / I have a career gap. Will that be a problem?",
    a: "Companies care about skills and projects more than a gap. We help you explain the gap honestly in your resume and interviews, and you finish with real projects to show.",
    tip: "Be warm here. Never promise a job; promise support and a portfolio.",
  },
  {
    c: "general",
    q: "Which course is right for me?",
    a: "Likes building websites/apps → FSD-MERN. Likes numbers and Excel → Data Analytics. Likes maths and prediction → Data Science. Prefers checking quality over writing apps → Software Testing / Playwright. Want to build AI-powered apps → Agentic MERN.",
    tip: "Ask 2 questions: 'Do you like building or checking?' and 'Numbers or screens?'",
  },
  {
    c: "general",
    q: "Do I need a laptop? What specs?",
    a: "Yes, a laptop is needed for practice. 8 GB RAM, i3 or better is enough. Data Science and Agentic MERN run smoother with 16 GB. [Mention if you offer lab access.]",
  },
  {
    c: "general",
    q: "How much time do I need to give each day?",
    a: "Class Duration: 1.5 hours per coding class. Frequency: 3 coding classes per week. Total Weekly Duration: 4.5 hours. On the remaining days, you should practise coding for at least 1 hour daily. Class Recordings / Live Session Recordings are available for working professionals and students preparing for exams. [Confirm batch timings.]",
  },
  {
    c: "general",
    q: "I am weak in English / maths. Can I still join?",
    a: "Yes. Classes explain in simple language, and we teach only the maths/English you actually need for the job. Interview communication practice is part of the support.",
  },
  {
    c: "general",
    q: "What age or qualification is required?",
    a: "Any graduate, final-year student, diploma holder or working professional can join. No coding background needed for beginner tracks.",
  },
  {
    c: "general",
    q: "Can I attend a demo class first?",
    a: "Yes. Pre-recorded videos are available in the Entri App. By watching these videos, you can clearly understand how the classes are conducted and what each session will be like.",
  },

  // ---- Fees / jobs ----
  {
    c: "fees",
    q: "What is the fee and can I pay in installments?",
    a: "Fee for [course] is [amount]. Installments / EMI are available: [your plan]. Everything included is listed in writing before you pay.",
    tip: "Share fee only after you know their goal. Value first, price second.",
  },
  {
    c: "fees",
    q: "Do you guarantee a job?",
    a: "No honest institute can guarantee a job. What we do give: resume building, mock interviews, project portfolio, and job referrals/placement support. Your effort decides the result.",
    tip: "Never over-promise. It protects your brand and refunds.",
  },
  {
    c: "fees",
    q: "What salary can I expect as a fresher?",
    a: "It varies by city, skills and interview performance. Freshers usually start in the entry-level range of [range]. Strong projects and communication move you to the higher end.",
  },
  {
    c: "fees",
    q: "Will I get a certificate? Is it valued?",
    a: "Yes, you will receive certificates upon successful course completion. Companies mainly evaluate your projects and interview performance, so we focus on helping you build practical projects. The certificates include: Entri Course Completion Certificate, NSDC Skill India Certificate (National), and Illinois Tech Certificate (International).",
  },
  {
    c: "fees",
    q: "What if I miss classes?",
    a: "Class Recordings / Live Session Recordings are available in the Entri App. You can watch the recorded sessions and catch up on missed classes.",
  },
  {
    c: "fees",
    q: "What is your refund policy?",
    a: "[State your policy clearly.] We explain it in writing at admission so there are no surprises.",
  },

  // ---- Course specific ----
  {
    c: "fsd",
    q: "What will I learn in FSD-MERN?",
    a: "HTML, CSS, JavaScript, React for the front end, Node + Express for the server, MongoDB for the database. You build full projects like e-commerce, job portal or chat app. Duration: [x months].",
    tip: "Roles: Full Stack Developer, React Developer, Node Developer.",
  },
  {
    c: "fsd",
    q: "Is MERN still in demand?",
    a: "Yes. JavaScript is everywhere in startups and product companies, and one language for front and back end makes it beginner friendly.",
  },
  {
    c: "agentic",
    q: "What is Agentic MERN?",
    a: "MERN plus AI agents: you build apps where AI can take actions (answer, search, call tools, automate tasks) using LLM APIs and agent frameworks. Example projects: AI support bot, AI study assistant, smart resume analyzer.",
    tip: "Best for learners with some MERN knowledge or those who finish FSD-MERN.",
  },
  {
    c: "agentic",
    q: "Do I need to know MERN before Agentic MERN?",
    a: "Basic JavaScript is needed. If you are new, we recommend FSD-MERN first or a combined track. [Confirm your batch structure.]",
  },
  {
    c: "da",
    q: "What tools do I learn in Data Analytics?",
    a: "Excel, SQL, Power BI/Tableau, and basic Python. You analyze real data and build dashboards. Roles: Data Analyst, Business Analyst, MIS executive.",
    tip: "Great fit for non-tech and commerce graduates.",
  },
  {
    c: "da",
    q: "Is coding required for Data Analytics?",
    a: "Very little. Excel and SQL do most of the work, and Python basics are taught from scratch.",
  },
  {
    c: "ds",
    q: "What is the difference between Data Analytics and Data Science?",
    a: "Analytics explains what happened using data and dashboards. Data Science predicts what will happen using Python, statistics and machine learning. Science is deeper and needs more maths and time.",
  },
  {
    c: "ds",
    q: "Is Data Science suitable for freshers?",
    a: "Yes, with patience. Starting with Python, statistics and projects works. Many learners do Data Analytics first and then move up. [Confirm path.]",
  },
  {
    c: "pw",
    q: "What is Playwright?",
    a: "A modern tool to automatically test websites in Chrome, Firefox and Safari using JavaScript/TypeScript. Companies use it for automation testing, and demand is growing.",
    tip: "Pair with Software Testing basics for best results.",
  },
  {
    c: "pw",
    q: "Do I need coding for Playwright?",
    a: "Basic JavaScript is required and taught in the course. Manual testing knowledge helps but is not mandatory.",
  },
  {
    c: "st",
    q: "What is Software Testing and what do I learn?",
    a: "Finding bugs before users do. You learn manual testing, test cases, bug reporting, Jira, API testing with Postman, SQL basics, and an intro to automation. Roles: QA Tester, QA Analyst.",
    tip: "Good entry for non-coders who are detail-oriented.",
  },
  {
    c: "st",
    q: "Manual testing or automation: which should I choose?",
    a: "Start with manual to build core skills, then add automation (Playwright) for better pay and growth. Our path covers both.",
  },
];

if (EN.length !== TA.length || EN.length !== ML.length)
  console.warn("EN/TA/ML FAQ counts differ:", EN.length, TA.length, ML.length);
export const FAQS = EN.map((f, i) => ({ ...f, ta: TA[i], ml: ML[i] }));
export const TABS = { ta: TA_TABS, ml: ML_TABS };
