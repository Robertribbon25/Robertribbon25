import { useState } from "react";
import { Code, Server, Database, Globe, Lightbulb, CheckCircle2 } from "lucide-react";
import { skills, Skill } from "../data/portfolioData";

interface SkillsProps {
  darkMode: boolean;
}

export default function Skills({ darkMode }: SkillsProps) {
  const [activeTab, setActiveTab] = useState<"all" | "tech" | "professional">("all");

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "tech", label: "Technical Stacks" },
    { id: "professional", label: "Professional & Soft Skills" }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "frontend":
        return <Code size={16} className="text-teal-400" />;
      case "backend":
        return <Server size={16} className="text-emerald-400" />;
      case "database":
        return <Database size={16} className="text-cyan-400" />;
      case "specialized":
        return <Globe size={16} className="text-indigo-400" />;
      case "professional":
        return <Lightbulb size={16} className="text-amber-400" />;
      default:
        return <CheckCircle2 size={16} className="text-emerald-500" />;
    }
  };

  const filteredSkills = skills.filter((skill) => {
    if (activeTab === "all") return true;
    if (activeTab === "professional") return skill.category === "professional";
    // Otherwise "tech" shows anything but professional
    return skill.category !== "professional";
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors ${
            darkMode ? "text-slate-100" : "text-slate-950"
          }`}>
            My <span className="text-emerald-500">Skills</span> Matrix
          </h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-3 rounded-full" />
          <p className={`mt-4 text-sm sm:text-base ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            A quantified index of my engineering capabilities, core language competencies, and management talents.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className={`p-1 rounded-xl flex gap-1 ${
            darkMode ? "bg-slate-900 border border-slate-800" : "bg-slate-100 border border-slate-200"
          }`}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-205 cursor-pointer ${
                  activeTab === cat.id
                    ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/10"
                    : darkMode
                      ? "text-slate-400 hover:text-slate-200 hover:bg-slate-850"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Rendering Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-102 hover:shadow-lg ${
                darkMode
                  ? "bg-slate-900/50 border-slate-800/80 hover:border-emerald-500/20 shadow-black/10"
                  : "bg-white border-slate-200 hover:border-emerald-500/20 shadow-slate-100"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2.5 rounded-xl ${
                    darkMode ? "bg-slate-800/80" : "bg-slate-100"
                  }`}>
                    {getCategoryIcon(skill.category)}
                  </div>
                  <span className={`font-display font-medium text-sm sm:text-base ${
                    darkMode ? "text-slate-100" : "text-slate-900"
                  }`}>
                    {skill.name}
                  </span>
                </div>
                <span className="text-xs font-bold font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Level Bar */}
              <div className={`w-full h-1.5 rounded-full overflow-hidden ${
                darkMode ? "bg-slate-800" : "bg-slate-100"
              }`}>
                <div
                  className="h-full bg-gradient-to-r from-emerald-555 to-teal-400 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Detail tag mapping */}
              <div className="flex justify-between mt-2.5 text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">
                <span>Core Ability</span>
                <span>
                  {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Proficient" : "Competent"}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
