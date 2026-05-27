export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demoUrl?: string;
  category: "management" | "finance" | "education" | "sports" | "social";
  image: string;
}

export interface Skill {
  name: string;
  level: number; // percentage
  category: "frontend" | "backend" | "database" | "specialized" | "professional";
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const personalInfo = {
  name: "Robert Ndayiragije",
  username: "Robertribbon25",
  title: "Full Stack Developer",
  role: "Full Stack Developer",
  location: "Kigali, Rwanda",
  bio: "I am a passionate full-stack developer focused on building modern web applications and management systems using MERN stack technologies. I enjoy solving real-world business problems with technology and continuously improving my software engineering skills.",
  languages: [
    { name: "English", level: "Professional Working" },
    { name: "Kinyarwanda", level: "Native / Bilingual" },
    { name: "Français", level: "Conversational" }
  ],
  socials: {
    github: "https://github.com/Robertribbon25",
    whatsapp: "https://wa.me/250795823088",
    instagram: "https://instagram.com/n_rob_ert",
    facebook: "https://facebook.com/robertribbon",
    phone: "0795823088"
  }
};

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Vue.js", level: 80, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 88, category: "frontend" },
  { name: "HTML & CSS", level: 95, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 88, category: "backend" },
  { name: "REST APIs", level: 92, category: "backend" },
  
  // Database & Specialty
  { name: "MongoDB", level: 85, category: "database" },
  { name: "MySQL", level: 90, category: "database" },
  { name: "PostgreSQL Database", level: 88, category: "database" },
  { name: "NoSQL & SQL Databases", level: 88, category: "database" },
  { name: "XAMPP", level: 85, category: "database" },
  { name: "Blockchain Dev", level: 75, category: "specialized" },
  { name: "Machine Learning", level: 70, category: "specialized" },
  { name: "DevOps & Git", level: 82, category: "specialized" },

  // Professional
  { name: "Communication Skills", level: 90, category: "professional" },
  { name: "Problem Solving", level: 95, category: "professional" },
  { name: "Team Collaboration", level: 92, category: "professional" },
  { name: "Leadership & Management", level: 88, category: "professional" },
  { name: "Time Management", level: 85, category: "professional" },
  { name: "Critical Thinking", level: 90, category: "professional" }
];

export const services: Service[] = [
  {
    title: "Frontend Development",
    description: "Building responsive, modern, and interactive single page applications using React, Tailwind CSS, and Framer Motion.",
    icon: "Layout"
  },
  {
    title: "Backend Development",
    description: "Designing hyper-robust server architectures with Node.js and Express.js, handling high-concurrency requests.",
    icon: "Server"
  },
  {
    title: "Database Architecture",
    description: "Structuring scalable relational & NoSQL databases with MongoDB, indexing operations for swift queries.",
    icon: "Database"
  },
  {
    title: "API Design & Integration",
    description: "Developing highly secure, RESTful, and documented APIs keeping cross-origin boundaries tight.",
    icon: "Cpu"
  },
  {
    title: "Blockchain Applications",
    description: "Writing and integrating smart contracts and decentralizing business workflows on modern chains.",
    icon: "Flame"
  },
  {
    title: "DevOps & Deployment",
    description: "Configuring container environments, managing GitHub CI/CD configurations, and cloud deployment pipelines.",
    icon: "Infinity"
  }
];

export const projects: Project[] = [
  {
    id: "bms",
    title: "Business Management System",
    description: "A comprehensive desktop/web solution for tracking small business sales, inventory, custom invoices, and cash flow reports.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Robertribbon25/bussiness-management-system",
    category: "management",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "budget-tracker",
    title: "Budget Tracker",
    description: "An interactive personal finance application allowing users to allocate monthly budgets, monitor limits, and view charts.",
    tech: ["React.js", "Tailwind CSS", "Recharts", "Local Storage"],
    github: "https://github.com/Robertribbon25/budget_tracker",
    category: "finance",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description: "A sleek, lightweight expense logging application enabling categorized entry with analytics dashboards.",
    tech: ["React.js", "Tailwind CSS", "Express.js", "MongoDB"],
    github: "https://github.com/Robertribbon25/expense_tracker",
    category: "finance",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "smarttech-hrms",
    title: "SmartTech HRMS",
    description: "A secure Human Resource Management System to handle employee records, automated payroll calculations, and attendance.",
    tech: ["MERN Stack", "Tailwind CSS", "JWT Auth", "Mongoose"],
    github: "https://github.com/Robertribbon25/smarttech-hrms",
    category: "management",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "stock-inventory",
    title: "Stock Inventory Management System",
    description: "A stock monitoring system featuring automatic low-stock notifications, secure logs, and supplier invoices.",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"],
    github: "https://github.com/Robertribbon25/stock-inventory-management-system",
    category: "management",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "student-mgmt",
    title: "Student Management System",
    description: "An academic portal for schools to capture student profiles, exam records, automated grading, and balance summaries.",
    tech: ["ReactJS", "Express", "NodeJS", "MongoDB", "TailwindCSS"],
    github: "https://github.com/Robertribbon25/student-management-system",
    category: "education",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "vsla-mgmt",
    title: "VSLA Management System",
    description: "Village Savings and Loan Association platform helping community savings groups manage contributions, loans, and interest.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Charts.js"],
    github: "https://github.com/Robertribbon25/vsla",
    category: "finance",
    image: "https://images.unsplash.com/photo-1534951009808-df6159250e43?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "enterprise-suite",
    title: "Enterprise Suite",
    description: "An integrated ERP dashboard grouping CRM, advanced inventory pipelines, financial registers, and staff analytics.",
    tech: ["React.js", "Express.js", "MongoDB", "ChartJS", "Material UI"],
    github: "https://github.com/Robertribbon25/enterprise-suite",
    category: "management",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "football-club",
    title: "Football Club System",
    description: "Operational interface to register athletic club players, schedule league matches, and control ticket sales.",
    tech: ["Node.js", "Express.js", "MongoDB", "CSS", "EJS Templates"],
    github: "https://github.com/Robertribbon25/football-club-system",
    category: "sports",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "e-learning",
    title: "E-Learning Management System",
    description: "An educational platform where students view courses, submit lessons, complete exams, and query professors.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Robertribbon25/E-learning-managementsystem",
    category: "education",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "orphan-db",
    title: "Orphan Database Management System",
    description: "A highly confidential, secure registry designed to track orphan care records, matching sponsors, and relief supply.",
    tech: ["Node.js", "Express.js", "MongoDB", "Bootstrap", "Session Auth"],
    github: "https://github.com/Robertribbon25/Orphan-Database-Management-System",
    category: "social",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "spare-parts",
    title: "SmartPark Spare Parts Management",
    description: "A tracking application detailing catalog listings, mechanical compatibility sheets, sales points, and supplier records.",
    tech: ["Node.js", "Express.js", "MongoDB", "Bootstrap"],
    github: "https://github.com/Robertribbon25/smartpark-spare-parts-management",
    category: "management",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "rwanda-wv",
    title: "Rwanda World Vision Project",
    description: "Development management model designed to log clean water distributions, agricultural assets, and village impact metrics.",
    tech: ["React.js", "Vite", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Robertribbon25/rwanda-world-vision-project",
    category: "social",
    image: "https://images.unsplash.com/photo-1469571486090-759931336756?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dab-sales",
    title: "DAB Sales & Distribution Manager",
    description: "Logistics software facilitating real-time stock routing, truck inventory capacities, invoices, and sales histories.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Maps API"],
    github: "https://github.com/Robertribbon25/dab-sales---distribution-manager",
    category: "management",
    image: "https://images.unsplash.com/photo-1501516069922-a9982bd6f3bd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "football-clubs-mgmt-collab",
    title: "Football Clubs Management",
    description: "Collaborative portal detailing club memberships, seasonal point tallies, penalty logs, and upcoming fixture matching.",
    tech: ["HTML5", "CSS3", "JavaScript", "Express.js", "MongoDB"],
    github: "https://github.com/sengabojr/football-clubs-management",
    category: "sports",
    image: "https://images.unsplash.com/photo-1431324155629-1a6edd1dec1d?auto=format&fit=crop&w=800&q=80"
  }
];
