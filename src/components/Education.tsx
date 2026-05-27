import { motion } from "motion/react";
import { GraduationCap, Calendar, BookOpen, Clock, Building, ArrowUpRight } from "lucide-react";

interface EducationProps {
  darkMode: boolean;
}

export default function Education({ darkMode }: EducationProps) {
  const educationData = [
    {
      id: "o-level",
      level: "Ordinary Level (O-Level)",
      school: "Ecole Secondaire Kirambo",
      period: "2020 – 2023",
      status: "Completed",
      description: "Built strong foundation in mathematics, science, and ICT. Developed early interest in programming and software development.",
      highlights: [
        "Strong foundation in Mathematics & Physics",
        "Introduction to Computer Science & Logic",
        "Participated in regional science competitions"
      ],
      icon: <BookOpen className="text-emerald-500 shrink-0" size={20} />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: "a-level",
      level: "Advanced Level (A-Level)",
      school: "Saint Laurent Gaseke TSS",
      period: "2023 – 2026",
      status: "In Progress",
      description: "Studying software development and IT systems. Focused on programming, web development, system design, and real-world project building.",
      highlights: [
        "Advanced Software Development curriculum",
        "Data Structures, Web Stacks & Database Design",
        "Practical software product deployments"
      ],
      icon: <GraduationCap className="text-indigo-500 shrink-0" size={20} />,
      color: "from-emerald-500 via-indigo-500 to-purple-500",
      isCurrent: true
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Dynamic Background ambient lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4"
          >
            <GraduationCap size={12} />
            <span>Academic Pathway</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors ${
              darkMode ? "text-slate-100" : "text-slate-950"
            }`}
          >
            My <span className="text-emerald-500">Education</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "48px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-emerald-500 mx-auto mt-3 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-4 text-sm sm:text-base ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            My structured growth from baseline mathematics & ICT to specialized software systems engineering.
          </motion.p>
        </div>

        {/* Narrative Vertical Timeline Matrix */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Timeline Center line (for desktop, left line for mobile) */}
          <div className="absolute left-8 lg:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-emerald-500 via-indigo-500/50 to-slate-800 dark:to-slate-800/20" />

          <div className="space-y-12 lg:space-y-16">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={item.id} className="relative flex flex-col lg:flex-row items-start lg:justify-between w-full">
                  
                  {/* Timeline Badge/Node Circle */}
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: index * 0.25 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 shadow-lg ${
                        item.isCurrent
                          ? "bg-slate-950 border-emerald-500 text-emerald-400 ring-4 ring-emerald-500/10"
                          : "bg-slate-900 border-slate-700 text-slate-300"
                      }`}
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  {/* Left Column (Desktop Spacer / Event content) */}
                  <div className={`w-full lg:w-[45%] pl-16 lg:pl-0 ${isEven ? "lg:text-right order-2 lg:order-1" : "lg:text-left lg:order-2"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      className="group"
                    >
                      <div
                        className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/5 ${
                          darkMode
                            ? "bg-slate-900/45 border-slate-800/80 hover:border-emerald-500/30"
                            : "bg-white border-slate-200 hover:border-emerald-500/30"
                        } relative overflow-hidden`}
                      >
                        {/* Status Light indicators */}
                        <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${item.color}`} />
                        
                        {/* Header info */}
                        <div className={`flex flex-wrap items-center gap-2 mb-3 ${isEven ? "lg:justify-end" : "lg:justify-start"}`}>
                          {/* Year Badge */}
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-bold ${
                            darkMode ? "bg-slate-800/80 text-emerald-400" : "bg-slate-100 text-emerald-600"
                          }`}>
                            <Calendar size={12} />
                            {item.period}
                          </span>

                          {/* Status Badge */}
                          {item.isCurrent ? (
                            <span className="inline-flex items-center gap-1.2 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping mr-1" />
                              {item.status}
                            </span>
                          ) : (
                            <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                              darkMode ? "bg-slate-800/50 text-slate-400" : "bg-slate-100 text-slate-500"
                            }`}>
                              {item.status}
                            </span>
                          )}
                        </div>

                        {/* Title & School */}
                        <h3 className={`font-display text-xl sm:text-2xl font-black tracking-tight leading-tight transition-colors group-hover:text-emerald-400 ${
                          darkMode ? "text-slate-100" : "text-slate-950"
                        }`}>
                          {item.level}
                        </h3>

                        <div className={`flex items-center gap-1.5 mt-2 mb-4 text-xs font-semibold ${
                          isEven ? "lg:justify-end" : "lg:justify-start"
                        } ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                          <Building size={14} className="text-emerald-500" />
                          <span>{item.school}</span>
                        </div>

                        {/* Description */}
                        <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                          darkMode ? "text-slate-400" : "text-slate-600"
                        } ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                          {item.description}
                        </p>

                        {/* Bulleted Curriculum Highlights */}
                        <div className={`border-t pt-4 ${
                          darkMode ? "border-slate-800/80" : "border-slate-100"
                        }`}>
                          <h4 className={`text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 mb-3 ${
                            isEven ? "lg:text-right" : "lg:text-left"
                          }`}>
                            Core Highlights
                          </h4>
                          <ul className={`space-y-2 text-xs text-left ${
                            isEven ? "lg:rtl" : ""
                          }`}>
                            {item.highlights.map((hlt, hIndex) => (
                              <li key={hIndex} className={`flex items-start gap-2 ${
                                isEven ? "lg:flex-row-reverse" : ""
                              }`}>
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                                <span className={darkMode ? "text-slate-300" : "text-slate-700"}>
                                  {hlt}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column (Desktop Spacer for alignment) */}
                  <div className="hidden lg:block w-[45%] order-1 lg:order-2" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
