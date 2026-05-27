import { BookOpen, Award, Compass, Languages, ChevronRight } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const stats = [
    { label: "Projects Completed", val: "15+", desc: "Full-Stack systems on GitHub", icon: <Award className="text-emerald-500" size={20} /> },
    { label: "Active Technologies", val: "12+", desc: "Frontend, Backend & DB stacks", icon: <BookOpen className="text-indigo-500" size={20} /> },
    { label: "Specialties Focused", val: "4", desc: "MERN, DevOps, Blockchain & ML", icon: <Compass className="text-amber-500" size={20} /> }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors ${
            darkMode ? "text-slate-100" : "text-slate-950"
          }`}>
            About <span className="text-emerald-500">Me</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-3 rounded-full" />
          <p className={`mt-4 text-sm sm:text-base ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Discover my background, core career goals, and what drives my engineering passion.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Bio Section */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className={`font-display text-xl sm:text-2xl font-bold ${
              darkMode ? "text-slate-200" : "text-slate-900"
            }`}>
              I Solve Business Problems Using the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500 font-extrabold">MERN Stack</span>
            </h3>
            
            <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              {personalInfo.bio} Being situated in <strong>{personalInfo.location}</strong>, I see firsthand the power of technology to digitize, clean, and speed up business processes. My mission is to build software products that can empower businesses and communities locally and globally.
            </p>

            <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              Whether designing interactive dashboards, managing sensitive secure databases, or working with blockchain architectures, I focus on typing clean, well-documented code that is responsive and ready for production.
            </p>

            {/* Core Goals Box */}
            <div className={`p-6 rounded-2xl border transition-all ${
              darkMode ? "bg-slate-900/40 border-slate-800" : "bg-slate-50 border-slate-200"
            }`}>
              <h4 className={`font-display font-bold text-sm sm:text-base mb-3 flex items-center gap-2 ${
                darkMode ? "text-slate-200" : "text-slate-900"
              }`}>
                <ChevronRight className="text-emerald-550 shrink-0" size={18} />
                <span>My Career Goals</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {[
                  "Pioneer reliable digital ERP/CRM packages tailored to Rwandan startups and SMEs.",
                  "Harness blockchain and machine learning smarts to safeguard supply chain logs.",
                  "Master modern cloud solutions, Docker, CI/CD pipelines, and scale distributed containers."
                ].map((goal, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span className={darkMode ? "text-slate-300" : "text-slate-700"}>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Cards & Languages Section */}
          <div className="lg:col-span-5 space-y-6">
            {/* Stat Widgets */}
            <div className="space-y-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-2xl border flex items-start gap-4 transition-all hover:scale-101 hover:shadow-md duration-200 ${
                    darkMode 
                      ? "bg-slate-900/60 border-slate-800 hover:border-slate-750" 
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className={`p-3 rounded-xl shrink-0 ${
                    darkMode ? "bg-slate-800" : "bg-slate-100"
                  }`}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className={`font-display text-2xl font-extrabold ${
                        darkMode ? "text-slate-100" : "text-slate-900"
                      }`}>
                        {stat.val}
                      </span>
                    </div>
                    <p className={`text-sm font-bold ${darkMode ? "text-slate-300" : "text-slate-800"}`}>
                      {stat.label}
                    </p>
                    <p className={`text-xs mt-0.5 ${darkMode ? "text-slate-500" : "text-slate-500"}`}>
                      {stat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages Widget */}
            <div className={`p-6 rounded-2xl border ${
              darkMode ? "bg-slate-900/40 border-slate-800" : "bg-slate-50 border-slate-200"
            }`}>
              <h4 className={`font-display font-bold text-sm sm:text-base mb-4 flex items-center gap-2 ${
                darkMode ? "text-slate-200" : "text-slate-900"
              }`}>
                <Languages className="text-emerald-500" size={18} />
                <span>Languages I Speak</span>
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {personalInfo.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center text-xs sm:text-sm">
                    <span className={`font-medium ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      {lang.name}
                    </span>
                    <span className={`px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-md ${
                      darkMode ? "bg-slate-800 text-slate-400" : "bg-slate-200 text-slate-650"
                    }`}>
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
