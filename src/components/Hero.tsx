import { useState, useEffect } from "react";
import { Github, Instagram, Facebook, MessageCircle, ArrowRight, MapPin, GraduationCap } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const keywords = [
    "Full Stack Developer",
    "MERN Stack Specialist",
    "Problem Solver",
    "Creative Web UI Designer",
    "Blockchain Developer"
  ];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenKeywords = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = keywords[textIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && currentText === fullWord) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenKeywords);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % keywords.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex]);

  return (
    <section id="home" className="relative min-h-screen pt-16 flex items-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-500 bg-emerald-500`} />
        {darkMode ? (
          <>
            <div className="absolute top-1/2 left-10 w-80 h-80 rounded-full blur-3xl opacity-10 bg-indigo-500 animate-pulse" />
            <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 bg-emerald-500" />
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
          </>
        ) : (
          <>
            <div className="absolute top-1/2 left-10 w-80 h-80 rounded-full blur-3xl opacity-20 bg-emerald-200" />
            <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-indigo-100" />
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Branding Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border bg-emerald-500/10 text-emerald-500 border-emerald-500/20 shadow-sm animate-bounce">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Open to New Opportunities
            </div>

            <div className="space-y-2">
              <h1 className={`font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight transition-colors ${
                darkMode ? "text-slate-100" : "text-slate-950"
              }`}>
                Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500">{personalInfo.name}</span>
              </h1>
              
              {/* Dynamic Sub-Branding Typing Row */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className={`text-lg sm:text-xl md:text-2xl font-semibold font-mono ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}>
                  {currentText}
                  <span className="w-2.5 h-6 ml-1 inline-block bg-emerald-500 animate-pulse" />
                </span>
              </div>
            </div>

            <p className={`text-base sm:text-lg max-w-xl leading-relaxed duration-300 ${
              darkMode ? "text-slate-400" : "text-slate-650"
            }`}>
              {personalInfo.bio} Dedicated to solving critical real-world business problems through professional, scalable Full Stack software solutions.
            </p>

            {/* Micro Badges Info */}
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm">
              <div className={`flex items-center space-x-2 px-3 py-2 rounded-xl border ${
                darkMode ? "border-slate-800 bg-slate-900/60 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700"
              }`}>
                <MapPin size={16} className="text-emerald-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className={`flex items-center space-x-2 px-3 py-2 rounded-xl border ${
                darkMode ? "border-slate-800 bg-slate-900/60 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700"
              }`}>
                <GraduationCap size={16} className="text-emerald-500" />
                <span>{personalInfo.role}</span>
              </div>
            </div>

            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-emerald-500/25 active:scale-98"
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Social Channels Container */}
            <div className="pt-6">
              <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}>
                Let's Connect
              </p>
              <div className="flex space-x-3.5">
                {[
                  { icon: <Github size={20} />, href: personalInfo.socials.github, label: "GitHub" },
                  { icon: <MessageCircle size={20} />, href: personalInfo.socials.whatsapp, label: "WhatsApp" },
                  { icon: <Instagram size={20} />, href: personalInfo.socials.instagram, label: "Instagram" },
                  { icon: <Facebook size={20} />, href: personalInfo.socials.facebook, label: "Facebook" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl transition-all duration-300 shadow-sm ${
                      darkMode 
                        ? "bg-slate-900 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 border border-slate-800/80 hover:border-emerald-500/30"
                        : "bg-white text-slate-600 hover:text-emerald-600 hover:bg-slate-100 border border-slate-200/80 hover:border-emerald-500/30"
                    }`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Tech Visual Card Right Column */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center z-10">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Spinning background outline */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500/30 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-indigo-500/20 animate-[spin_30s_linear_infinite_reverse]" />

              {/* Glowing Core Container */}
              <div className={`absolute inset-12 rounded-full flex flex-col items-center justify-center p-6 border shadow-2xl overflow-hidden animate-float transition-all ${
                darkMode 
                  ? "bg-slate-950/80 border-slate-800/80 shadow-emerald-500/5" 
                  : "bg-white/95 border-slate-200/80 shadow-emerald-500/5"
              }`}>
                {/* Simulated Terminal Avatar */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 overflow-hidden shadow-lg shadow-emerald-500/20 mb-4 flex items-center justify-center">
                  <img
                    src="https://github.com/Robertribbon25.png"
                    alt="Robert Ribbon Profile"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if GitHub goes offline or is blocked
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallbackSpan = document.createElement('span');
                        fallbackSpan.className = 'font-display font-extrabold text-white text-3xl';
                        fallbackSpan.innerText = 'RN';
                        parent.appendChild(fallbackSpan);
                      }
                    }}
                  />
                </div>
                
                <p className={`font-display font-bold text-center text-lg leading-tight ${
                  darkMode ? "text-slate-150" : "text-slate-950"
                }`}>
                  {personalInfo.name}
                </p>
                <p className={`text-xs font-semibold text-center mt-1 text-emerald-500`}>
                  {personalInfo.username}
                </p>

                {/* Micro code statement */}
                <div className={`mt-3 py-1.5 px-3 rounded-lg font-mono text-[10px] uppercase tracking-wider flex items-center gap-1.5 ${
                  darkMode ? "bg-slate-900 text-slate-400" : "bg-slate-100 text-slate-600"
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>MERN_STACK_OK</span>
                </div>
              </div>

              {/* Float floating tech indicators around */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 p-3 rounded-xl shadow-md font-mono text-[10px] font-bold bg-amber-500/15 border border-amber-500/30 text-amber-500">
                ⚡ React.js
              </div>
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 p-3 rounded-xl shadow-md font-mono text-[10px] font-bold bg-emerald-500/15 border border-emerald-500/20 text-emerald-500">
                🍃 MongoDB
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 p-3 rounded-xl shadow-md font-mono text-[10px] font-bold bg-indigo-500/15 border border-indigo-500/20 text-indigo-400">
                🌐 Express.js
              </div>
              <div className="absolute top-1/2 -left-4 -translate-y-1/2 p-3 rounded-xl shadow-md font-mono text-[10px] font-bold bg-slate-500/15 border border-slate-550/30 text-slate-400">
                📂 Node.js
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
