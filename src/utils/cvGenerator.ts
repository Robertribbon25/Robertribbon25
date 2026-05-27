import { personalInfo, skills } from "../data/portfolioData";

export function handleDownloadCV() {
  const techSkillsList = skills
    .filter((s) => s.category !== "professional")
    .map((s) => `- ${s.name} (${s.level}%)`)
    .join("\n");

  const profSkillsList = skills
    .filter((s) => s.category === "professional")
    .map((s) => `- ${s.name} (${s.level}%)`)
    .join("\n");

  const cvContent = `======================================================================
CURRICULUM VITAE - ROBERT NDAYIRAGIJE
======================================================================

PERSONAL DETAILS
----------------------------------------------------------------------
Full Name:  ${personalInfo.name}
GitHub:     ${personalInfo.socials.github}
Location:   ${personalInfo.location}
WhatsApp:   0795823088 (https://wa.me/250795823088)
Email:      ndayiragijerobert830@gmail.com

ROLE & MISSION
----------------------------------------------------------------------
Role:       ${personalInfo.role}
Overview:   ${personalInfo.bio}

TECHNICAL SKILLS
----------------------------------------------------------------------
${techSkillsList}

PROFESSIONAL SKILLS & TALENTS
----------------------------------------------------------------------
${profSkillsList}

LANGUAGES
----------------------------------------------------------------------
* English (Professional Working)
* Kinyarwanda (Native / Bilingual)
* Français (Conversational)

PROJECTS HIGHLIGHTS (Available on GitHub)
----------------------------------------------------------------------
1. Business Management System
   URL: https://github.com/Robertribbon25/bussiness-management-system
   
2. Budget Tracker
   URL: https://github.com/Robertribbon25/budget_tracker

3. SmartTech HRMS
   URL: https://github.com/Robertribbon25/smarttech-hrms

4. Stock Inventory Management System
   URL: https://github.com/Robertribbon25/stock-inventory-management-system

5. Student Management System
   URL: https://github.com/Robertribbon25/student-management-system

6. VSLA Management System
   URL: https://github.com/Robertribbon25/vsla

7. Enterprise Suite
   URL: https://github.com/Robertribbon25/enterprise-suite

8. Rwanda World Vision Project
   URL: https://github.com/Robertribbon25/rwanda-world-vision-project

9. DAB Sales & Distribution Manager
   URL: https://github.com/Robertribbon25/dab-sales---distribution-manager

======================================================================
Generated via Robert Ndayiragije's Portfolio System.
======================================================================`;

  const blob = new Blob([cvContent], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "robert-ndayiragije-cv.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
