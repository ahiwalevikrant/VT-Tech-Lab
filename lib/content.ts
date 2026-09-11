export const profile = {
  name: "Vikrant Ahiwale",
  firm: "VT Tech Lab",
  tagline: "SOFTWARE ENGINEERING | AI SYSTEMS",
  role: "Lead Product & AI Engineer",
  location: "Bengaluru, India",
  phone: "+91 9325307637",
  email: "vikrantahiwale71@gmail.com",
  whatsapp: "https://wa.me/919325307637?text=Hi%20Vikrant,%20I'm%20interested%20in%20discussing%20a%20freelance%20project%20with%20VT%20Tech%20Lab.",
  github: "https://github.com/ahiwalevikrant",
  linkedin: "https://linkedin.com/in/vikrant-ahiwale",
  summary:
    "We architect, build, and deploy production-grade web applications, intelligent AI systems, and high-performance backend platforms. With 3.5+ years of enterprise engineering experience at scale, VT Tech Lab delivers fast, robust, and beautiful digital solutions that help startups and businesses scale effortlessly.",
};

export const clientServices = [
  {
    icon: "code",
    title: "Full-Stack Web & SaaS Apps",
    desc: "End-to-end responsive web applications built with Next.js, React, and TypeScript. Lightning fast, SEO optimized, and designed for conversion.",
    deliverables: ["Custom Web Apps", "SaaS MVPs & Dashboards", "Booking & E-Commerce Flows", "Responsive UI/UX"],
  },
  {
    icon: "ai",
    title: "AI Systems & Automation",
    desc: "Custom AI integrations, context-aware RAG pipelines, smart assistants (WhatsApp/Telegram/Web), and automated document triage.",
    deliverables: ["Custom AI Chatbots & RAG", "LLM Fine-Tuning & Prompting", "Automated Business Pipelines", "Smart Extraction & NER"],
  },
  {
    icon: "server",
    title: "Backend & API Architecture",
    desc: "High-throughput, enterprise-grade backend microservices in Java Spring Boot & Node.js, with rock-solid database design and Kafka queues.",
    deliverables: ["REST & GraphQL APIs", "Database Architecture (SQL/NoSQL)", "Payment & Ingestion Pipelines", "Async Event Messaging"],
  },
  {
    icon: "cloud",
    title: "Cloud Deployment & Support",
    desc: "Zero-downtime CI/CD deployment, Docker containerization, cloud hosting setup, and continuous technical maintenance.",
    deliverables: ["Docker Orchestration", "Automated CI/CD Pipelines", "Performance & Security Audits", "Production Monitoring"],
  },
];

export const freelanceWorkflow = [
  {
    step: "01",
    title: "Discovery & Blueprint",
    desc: "We analyze your business requirements, define exact scope & milestones, and architect the optimal tech stack with fixed pricing & timelines.",
  },
  {
    step: "02",
    title: "Rapid Development",
    desc: "Iterative, weekly milestone delivery with live staging previews so you see real working software and progress in real time.",
  },
  {
    step: "03",
    title: "Testing & QA",
    desc: "Rigorous testing across devices, speed benchmarks, security audits, and edge-case handling before launch.",
  },
  {
    step: "04",
    title: "Production Launch & Handover",
    desc: "Seamless live deployment, DNS setup, comprehensive documentation, and dedicated post-launch support.",
  },
];

export const skillGroups = [
  {
    label: "Frontend & Web Apps",
    items: ["Next.js", "React", "TypeScript", "Angular (RxJS)", "Tailwind CSS", "HTML5/CSS3", "JavaScript (ES6+)"],
  },
  {
    label: "Backend & Microservices",
    items: ["Java 21", "Spring Boot", "Spring MVC", "RESTful APIs", "Microservices", "Node.js (Express)", "Multi-threading"],
  },
  {
    label: "AI, LLMs & GenAI",
    items: ["RAG Pipelines", "LangChain", "ChromaDB (Vector DB)", "Ollama / Llama 3", "NLP & Named Entity Recognition", "Prompt Engineering"],
  },
  {
    label: "Databases & Streaming",
    items: ["Apache Kafka", "PostgreSQL", "Oracle", "MySQL", "MariaDB", "Redis Caching"],
  },
  {
    label: "DevOps & Tooling",
    items: ["Docker & Compose", "Git & GitHub", "CI/CD Pipelines", "Linux / Cloud Deploy", "Postman", "Agile / JIRA"],
  },
];

export const experience = [
  {
    role: "Product Engineer",
    company: "Speridian Technologies",
    companyNote: "formerly EngageCloud / Benefitalign",
    period: "Apr 2025 — Present",
    points: [
      "Maintained and enhanced Java Spring Boot backend APIs, optimizing enterprise integration points and resolving critical production bugs to increase platform uptime.",
      "Migrated a React Revenue Management system to a lazy-loaded Angular CRM module, preserving parity across ingestion and payouts.",
      "Refactored client workflows using feature modules and reactive forms, using advanced RxJS operators to optimize communication.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Speridian Technologies",
    companyNote: "",
    period: "Nov 2022 — Mar 2025",
    points: [
      "Engineered a reconciliation API platform in Spring Boot supporting server-side sorting, search, and pagination for large datasets.",
      "Automated end-to-end reconciliation across commission platforms — cut manual effort by 70% and improved accuracy by 25%.",
      "Built responsive React operational dashboards alongside file-ingestion validation pipelines for self-serve auditing.",
      "Awarded the September SPOT Award for outstanding performance on critical deliverables.",
    ],
  },
];

export const featuredProjects = [
  {
    id: "healthcare-payouts",
    name: "Enterprise Healthcare Payout & Notification System",
    tag: "Systems / Event-Driven",
    stack: ["Java 21", "Spring Boot 3.2", "Kafka", "Docker", "NLP"],
    points: [
      "5-service event-driven microservices architecture with Kafka-driven async queues, DLQ retries, and local Docker orchestration.",
      "Integrated Stanford CoreNLP (NER) to process unstructured claim disputes and auto-flag accounts for manual review.",
      "Built a natural-language Q&A interface using Ollama (Llama 3) for plain-text search routing.",
    ],
  },
  {
    id: "cbse-rag-tutor",
    name: "CBSE-Bot — NCERT Science RAG AI Tutor",
    tag: "AI / RAG Pipeline",
    stack: ["Python", "LangChain", "ChromaDB", "Groq API", "Telegram Bot"],
    points: [
      "End-to-end RAG pipeline using LangChain and ChromaDB vector search to deliver context-grounded tutor answers on Telegram with sub-second response latency.",
    ],
  },
];

export const clientProjects = [
  {
    id: "vj-car-rental",
    name: "VJ Car Rental — Self-Drive Booking Platform",
    client: "VJ Car Rental Pvt. Ltd., Pune",
    category: "Web Application / Booking Flow",
    summary:
      "Modern self-drive car rental booking platform featuring a dynamic fleet catalog, transparent pricing engine, route-based trip estimator, and WhatsApp-integrated instant reservation pipeline.",
    stack: ["React", "JavaScript", "Tailwind CSS", "Vite", "Responsive Design"],
    url: "https://vjcarsrental.in/",
    linkLabel: "vjcarsrental.in",
    spec: "01",
    highlight: "100% Mobile First • Real-Time Inquiry Pipeline • Live in Production",
  },
  {
    id: "bagayatdar-farm",
    name: "Bagayatdar Farm — Bilingual Agri-Business Storefront",
    client: "Shreyas Jagtap, Phaltan, Satara",
    category: "E-Commerce / Regional Storefront",
    summary:
      "Bilingual (Marathi & English) digital showcase for an agri-business enterprise covering fresh produce, export-grade chillies, poultry, and goat farming with high conversion direct farmer-to-buyer ordering.",
    stack: ["React", "JavaScript", "CSS3", "GitHub Pages", "Bilingual i18n"],
    url: "https://ahiwalevikrant.github.io/Bagayatdar-Farm-ShreyasJagtap/",
    linkLabel: "ahiwalevikrant.github.io/Bagayatdar-Farm",
    spec: "02",
    highlight: "Dual Language Support • Direct WhatsApp Ordering • Fast CDN Delivery",
  },
  {
    id: "merit-classes",
    name: "Merit Classes — Education Institute Lead Engine",
    client: "Trupti Jagtap, Baramati",
    category: "Lead Generation / Educational Portal",
    summary:
      "High-conversion web portal for a premier CBSE & State Board coaching institute featuring faculty credentials, course curriculum breakdown, test series highlights, and automated student enquiry capture.",
    stack: ["React", "JavaScript", "CSS3", "Mobile UI", "Lead Funnel"],
    url: "https://ahiwalevikrant.github.io/Merit-Classes/",
    linkLabel: "ahiwalevikrant.github.io/Merit-Classes",
    spec: "03",
    highlight: "Optimized Lead Funnel • Course Catalog • WhatsApp Direct Connect",
  },
];

export const education = {
  degree: "Bachelor of Engineering, Production Engineering",
  school: "AISSMS College of Engineering, Savitribai Phule Pune University",
  location: "Pune, India",
  period: "Graduated May 2020",
};
