export const profile = {
  name: "Poovarasan B",
  title: "Laravel Full Stack Developer",
  tagline: "PHP, Python & JavaScript developer building enterprise ERP apps and AI-powered tools.",
  about:
    "Laravel Full Stack Developer with hands-on experience (Feb 2026 – Sep 2026) building enterprise ERP web applications using PHP, Laravel (MVC), JavaScript, jQuery, AJAX, RESTful APIs and Microsoft SQL Server. I deliver end-to-end business modules from requirement to release, and optimize large-data processing with Laravel Queue and Snappy (wkhtmltopdf). I also build Python (FastAPI) backends with LLM integration using Groq and local Ollama models. I enjoy writing clean, scalable, well-documented code with Git and Agile practices.",
  location: "Perambalur, Tamil Nadu, India",
  email: "poovarasanb132@gmail.com",
  phone: "+91-9025109770",
  linkedin: "https://linkedin.com/in/poovarasan-b-bb53b0282",
  github: "https://github.com/your-username", // unga GitHub link ku maathunga
  resume: "/Poovarasan_B_Resume.pdf",
};

export const skills = [
  { group: "Languages", items: ["PHP", "JavaScript", "Python", "SQL", "HTML5", "CSS3", "Java (basic)"] },
  { group: "Frontend", items: ["Bootstrap", "jQuery", "AJAX", "JSON", "Responsive Design", "marked.js", "DOMPurify"] },
  { group: "Backend", items: ["Laravel (MVC)", "Laravel Queue", "FastAPI", "REST APIs", "OOP", "HTTP Basic Auth"] },
  { group: "Database", items: ["MySQL", "Microsoft SQL Server", "Stored Procedures", "Views", "Query Optimization"] },
  { group: "AI / LLM", items: ["Groq API", "Ollama", "Prompt Engineering", "Provider Fallback", "Rate-limit Handling"] },
  { group: "Reporting", items: ["DOMPDF", "Snappy (wkhtmltopdf)"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "XAMPP", "Postman", "ngrok", "Agile/Scrum"] },
];

export const experience = [
  {
    role: "Laravel Full Stack Developer",
    company: "Smartzen Solutions Pvt. Ltd.",
    period: "Feb 2026 – Sep 2026",
    points: [
      "Developed responsive ERP web applications end-to-end using PHP Laravel (MVC).",
      "Designed user-friendly interfaces with HTML5, CSS3, JavaScript, Bootstrap and jQuery, improving usability across 5+ business modules.",
      "Integrated frontend with Laravel RESTful APIs using AJAX and JSON.",
      "Developed and optimized SQL queries, Views and Stored Procedures in Microsoft SQL Server.",
      "Delivered 5 core ERP modules: Quotation Management, Job Management, Material Request/Issue, AMC, and Manager Assignment.",
      "Diagnosed and resolved production issues, improving performance and stability.",
      "Collaborated with cross-functional teams in an Agile environment.",
    ],
  },
];

export const projects = [
  {
    title: "AI Knowledge — AI-Powered Code & Project Explainer",
    subtitle: "Personal Project",
    tech: ["Python", "FastAPI", "JavaScript", "Groq API", "Ollama", "HTML/CSS"],
    description:
      "Chat-based web app that explains source code and entire project folders in Tamil, Tanglish or English. Uses Groq cloud AI online and automatically falls back to a local Ollama model offline.",
    points: [
      "FastAPI backend with configurable AI provider layer (Groq / Ollama / auto), retry and back-off for rate limits.",
      "Project loading via folder path, folder upload or .zip; skips node_modules, .git and .env files.",
      "Function lookup: regex search sends only the relevant code to the AI for line-by-line explanation.",
      "Keyword-scored context selection and map-reduce summarization for large projects.",
      "Automatic language detection (Tamil / Tanglish / English).",
      "Vanilla JS chat UI with DOMPurify-sanitized Markdown, localStorage history and dark theme.",
      "Secured public access with HTTP Basic Auth using constant-time comparison.",
    ],
    code: "",
  },
  {
    title: "Quotation Management Module",
    subtitle: "Smartzen Solutions Pvt. Ltd.",
    tech: ["Laravel", "MS SQL Server", "DOMPDF"],
    description: "Complete RFQ workflow from quotation creation to final release.",
    points: [
      "Customer management, searchable grid listing and package/material selection.",
      "Drag-and-drop employee assignment and Proposal Offer PDF generation.",
      "Release with edit restrictions, revision management and automated email of released PDFs.",
    ],
    code: "",
  },
  {
    title: "Job Management Module",
    subtitle: "SmartGas Technologies",
    tech: ["Laravel", "PHP", "MS SQL Server", "jQuery", "AJAX", "Bootstrap", "Laravel Queue", "Snappy"],
    description: "Workflow converting approved quotations into Jobs with phase and material management.",
    points: [
      "Phase Entry (rooms/floors) with per-phase material management.",
      "Price List and Price List Revision, optimized for large updates using Laravel Queue.",
      "Material Request (quantity validation), Material Issue (return handling) and real-time Open Material Request report.",
      "High-volume PDF reports using Snappy (wkhtmltopdf).",
      "Manager Assignment module with grid interface.",
    ],
    code: "",
  },
];

export const academicProjects = [
  {
    title: "Out Pass Management System",
    description: "Web app for student out-pass requests and approvals using PHP, MySQL, HTML, CSS and JavaScript.",
  },
  {
    title: "Deepfake Analysis",
    description: "Academic project on identifying manipulated media using machine learning concepts and image analysis.",
  },
];

export const education = {
  degree: "Bachelor of Technology (B.Tech) – Information Technology",
  school: "Paavai Engineering College",
  period: "2021 – 2025",
};

export const certifications = [
  "PHP & MySQL – IIT Bombay",
  "AI Ethics – IBM SkillBuild",
  "Democracy Leadership Program – MIT Pune",
];