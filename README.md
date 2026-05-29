Robert Ndayiragije - Modern Full-Stack Developer Portfolio

A professional, modern, fully animation-rich, and highly responsive developer portfolio web application custom-tailored for **Robert Ndayiragije**, a Full-Stack Developer located in Kigali, Rwanda.

This system is built using React, Vite, and Tailwind CSS on the frontend, and Node.js with Express.js and MongoDB on the backend. This project incorporates a custom integrated live project packager** that compiles the clean codebase workspace into a downloadable ZIP archive on-the-fly when clicking **"Source ZIP"** in the navigation header.

 Key Core Features
- Responsive Theme Transitions**: Seamless Light & Dark visual mode.
- Sleek Auto-Typing Hero section**: Welcoming keyword loops detailing MERN stack specialty.
- Quantified Skill Matrix**: Animated progress bars split between technical and human competencies.
- 15 Genuine Project Repositories**: Integrated gallery linking to Robert's actual GitHub codes of his management modules.
- Direct WhatsApp Connect**: Hot link mapped to WhatsApp chat indicators (`0795823088`).
- Interactive Contact Module**: Posts and securely logs message entries inside MongoDB (with local file-based fallbacks for offline review).
- On-demand ZIP Packer**: Dedicated `/api/download-zip` router creating full-structure downloads with single clicks.


 File and Folder Structure Mode
When downloading the source via the portfolio top button, the folder directory output is prepared as follows:
text
robert-portfolio/
├── data/                    JSON local database backup folder
│   └── messages.json        Falling-back database file for local contact items
├── src/                     Core React Frontend source tree
│   ├── components/          Modularized visual blocks (Navbar.tsx, Hero.tsx, Projects.tsx, etc.)
│   ├── data/                Data sources (portfolioData.ts encapsulating all 15 project links)
│   ├── utils/               CV document layout utilities (cvGenerator.ts)
│   ├── App.tsx              Application layout coordinator
│   ├── index.css            Tailwind global stylesheets
│   └── main.tsx             Standard entry anchor
├── .env.example             Local variables template configuration
├── index.html               Main index DOM page
├── package.json             Workspace dependencies
├── server.ts                Express backend routing & MongoDB connector
├── tsconfig.json            Strict TypeScript mappings compiler
└── vite.config.ts           Bundler config definitions


Technical Installation & Local Execution Instructions

To execute this integrated full-stack portfolio locally on your machine, follow these steps:

Prerequisites
- Make sure [Node.js](https://nodejs.org/) is installed on your operating system (v18 or higher recommended).
- (Optional) Have a local [MongoDB](https://www.mongodb.com/) instance configured, or provide an active remote cluster URL. If MongoDB is not loaded, the application will notify and gracefully fall back to storing message records under local JSON files in `./data/messages.json`.

Startup Checklist

1. Unzip the Downloaded Codebase**:
   Extract `robert-portfolio-source.zip` into your preferred local development directory.

2. Configure Environment Variables**:
   By default, local files already map proper environments. However, you can create a `.env` file in the root directories of the project to customize ports or link databases:
   env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/robert-portfolio
   

3. Install Workspace Dependencies**:
   Open a terminal prompt inside the project folder and type:
   cmd
   npm install
   

4. Launch the Development Servers**:
   Type the following commands:
   cmd
   npm run dev
   
   This command starts the Node.js Express environment. The server instantly spawns high-performance Vite compiler instances to run the application code in development mode!

5. Interact with the Browser**:
   Open [http://localhost:3000](http://localhost:3000) inside your web browser to test and view the full-stack system!

Production Bundling Commands
To generate high-performance static pages and minify code files before deployment:
cmd
npm run build
npm start

This minifies frontend static resources under `/dist` and compiles server hooks into clean bundles ready for immediate deployment on Cloud Run or other hosting services.
