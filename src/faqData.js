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


// English translations. ORDER MUST MATCH the TA array in faqData.js (same index = same question).
export const EN = [
  {
    q: "I don't have an IT background. Can I learn coding?",
    a: "Yes, absolutely! We start from zero: how websites work, followed by basic logic and then coding. Students from Commerce, Arts, Mechanical, and other backgrounds have successfully learned with us. Your degree doesn't matter; practising for 1–2 hours daily is what matters.",
    tip: "Ask: What did you study, and what are you currently doing? Recommend a course based on their background.",
  },
  {
    q: "I am currently unemployed / have a career gap. Is that a problem?",
    a: "Companies focus more on your skills and projects than your career gap. We help you explain your career gap honestly in your resume and interviews. By the end of the course, you will have real projects to showcase.",
    tip: "Be supportive. Don't guarantee a job; explain that we provide guidance, support, and portfolio development.",
  },
  {
    q: "Which course is right for me?",
    a: "Interested in building websites/apps → FSD-MERN. Interested in numbers and Excel → Data Analytics. Interested in mathematics and predictions → Data Science. Interested in checking quality rather than writing applications → Software Testing / Playwright. Interested in building AI applications → Agentic MERN.",
    tip: "Ask two questions: 'Do you like building applications or testing them?' and 'Are you more interested in numbers or user interfaces?'",
  },
  {
    q: "Do I need a laptop? What are the specifications?",
    a: "Yes, a laptop is required for practice. 8 GB RAM with an i3 processor or above is sufficient. For Data Science and Agentic MERN, 16 GB RAM is recommended for smoother performance. [Mention lab facilities if available.]",
  },
  {
    q: "How much time should I spend learning every day?",
    a: "Class Duration: 1.5 hours per coding class. Frequency: 3 coding classes per week. Total Weekly Duration: 4.5 hours. On the remaining days, you should practise coding for at least 1 hour daily. Class Recordings / Live Session Recordings are available for working professionals and students preparing for exams. [Confirm batch timings.]",
  },
  {
    q: "Can I join if my English / Mathematics skills are weak?",
    a: "Yes, you can! We explain concepts in simple Tamil and English. We teach only the level of Mathematics and English required for the job. Interview communication practice is also included.",
  },
  {
    q: "What is the age limit or educational qualification required?",
    a: "Any graduate, final-year student, diploma holder, or working professional can join. No prior coding experience is required for beginner-level courses.",
  },
  {
    q: "Can I watch a demo class first?",
    a: "Yes. Pre-recorded videos are available in the Entri App. By watching these videos, you can clearly understand how the classes are conducted and what each session will be like.",
  },
  {
    q: "What is the course fee? Can I pay in instalments?",
    a: "The course fee for [course] is [amount]. Instalment / EMI options are available: [your payment plan]. We will provide the details of everything included in writing before you make the payment.",
    tip: "Understand their career goals before discussing the fee. Explain the value first, then the price.",
  },
  {
    q: "Do you guarantee a job?",
    a: "No genuine institution can guarantee a job. What we provide is resume preparation, mock interviews, project portfolio development, job referrals, and placement assistance. The final outcome depends on your skills and efforts.",
    tip: "Avoid making unrealistic promises. This protects your credibility and prevents refund-related issues.",
  },
  {
    q: "What salary can a fresher expect?",
    a: "It varies depending on the city, skills, and interview performance. Freshers generally start with an entry-level salary of [range]. With strong projects and good communication skills, you may be able to achieve a higher salary.",
  },
  {
    q: "Will I get a certificate? Is it valuable?",
    a: "Yes, you will receive certificates upon successful course completion. Companies mainly evaluate your projects and interview performance, so we focus on helping you build practical projects. The certificates include: Entri Course Completion Certificate, NSDC Skill India Certificate (National), and Illinois Tech Certificate (International).",
  },
  {
    q: "What if I miss a class?",
    a: "Class Recordings / Live Session Recordings are available in the Entri App. You can watch the recorded sessions and catch up on missed classes.",
  },
  {
    q: "What is the refund policy?",
    a: "[Clearly mention your refund policy.] We will explain the policy in writing during admission, so there will be no unexpected surprises.",
  },
  {
    q: "What will I learn in FSD-MERN?",
    a: "You will learn HTML, CSS, JavaScript, React for frontend development, Node.js and Express for backend development, and MongoDB for databases. You will build complete projects such as e-commerce websites, job portals, and chat applications. Course duration: [x months].",
    tip: "Career opportunities: Full Stack Developer, React Developer, and Node.js Developer.",
  },
  {
    q: "Is there still demand for MERN developers?",
    a: "Yes. JavaScript is widely used in startups and product-based companies. Since the same programming language is used for both frontend and backend development, MERN is a convenient starting point for beginners.",
  },
  {
    q: "What is Agentic MERN?",
    a: "Agentic MERN combines MERN with AI agents. You will build AI-powered applications using LLM APIs and agent frameworks. These applications can perform tasks independently, such as answering questions, searching for information, calling tools, and automating workflows. Examples include AI support bots, AI study assistants, and smart resume analyzers.",
    tip: "Best suited for learners who already know MERN or have completed FSD-MERN.",
  },
  {
    q: "Do I need to know MERN before joining Agentic MERN?",
    a: "Basic JavaScript knowledge is required. If you are a complete beginner, we recommend starting with FSD-MERN or a combined learning track. [Confirm your batch structure.]",
  },
  {
    q: "What tools will I learn in Data Analytics?",
    a: "You will learn Excel, SQL, Power BI, and basic Python. You will analyse real-world data and create dashboards. Career opportunities include Data Analyst, Business Analyst, and MIS Executive.",
    tip: "A suitable option for non-technical and Commerce graduates.",
  },
  {
    q: "Is coding required for Data Analytics?",
    a: "Very little coding is required. Most tasks can be performed using Excel and SQL. Python basics will also be taught from the beginning.",
  },
  {
    q: "What is the difference between Data Analytics and Data Science?",
    a: "Data Analytics explains what has happened using data and dashboards. Data Science predicts what may happen using Python, statistics, and machine learning. Data Science is more advanced and requires deeper mathematical knowledge and more learning time.",
  },
  {
    q: "Is Data Science suitable for freshers?",
    a: "Yes, if you are willing to learn patiently. You can start with Python, statistics, and practical projects. Many learners begin with Data Analytics and gradually move into Data Science. [Confirm your learning path.]",
  },
  {
    q: "What is Playwright?",
    a: "Playwright is a modern automation testing tool that uses JavaScript / TypeScript to automatically test websites across browsers such as Chrome, Firefox, and Safari. Companies use it for automation testing, and demand for these skills is growing.",
    tip: "For better results, combine Playwright with Software Testing fundamentals.",
  },
  {
    q: "Is coding required for Playwright?",
    a: "Basic JavaScript knowledge is required, and it will be taught as part of the course. Manual testing knowledge is helpful but not mandatory.",
  },
  {
    q: "What is Software Testing? What will I learn?",
    a: "Software Testing is the process of identifying bugs before an application reaches users. You will learn Manual Testing, Test Cases, Bug Reporting, Jira, API Testing using Postman, basic SQL, and an introduction to Automation Testing. Career opportunities include QA Tester and QA Analyst.",
    tip: "A good starting point for people who don't know coding but have good attention to detail.",
  },
  {
    q: "Manual Testing or Automation Testing: Which should I choose?",
    a: "Start with Manual Testing to understand the fundamentals. Then learn Automation Testing using Playwright to improve your career growth and salary opportunities. Our learning path covers both.",
  },
];

export const EN_TABS = {
  all: "All",
  general: "Getting Started & Career Gap",
  fees: "Fees & Jobs",
  fsd: "FSD-MERN",
  agentic: "Agentic MERN",
  da: "Data Analytics",
  ds: "Data Science",
  pw: "Playwright",
  st: "Software Testing",
};

if (EN.length !== TA.length || EN.length !== ML.length)
  console.warn("EN/TA/ML FAQ counts differ:", EN.length, TA.length, ML.length);
export const FAQS = EN.map((f, i) => ({ ...f, ta: TA[i], ml: ML[i] }));
export const TABS = { ta: TA_TABS, ml: ML_TABS };
