import { useState } from "react";
import { Github, ExternalLink, Search, Tag, Eye } from "lucide-react";
import { projects, Project } from "../data/portfolioData";

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Systems" },
    { id: "management", label: "Management Rooms" },
    { id: "finance", label: "Financial Portals" },
    { id: "education", label: "Academic & E-Learning" },
    { id: "sports", label: "Athletic Registers" },
    { id: "social", label: "Community & Welfare" }
  ];

  const filteredProjects = projects.filter((proj) => {
    const matchesCategory = activeCategory === "all" || proj.category === activeCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLiveDemoClick = (projectTitle: string) => {
    alert(`💡 live demo placeholder for "${projectTitle}". You can clone this full-stack project from its high-fidelity GitHub code repository and boot it locally!`);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors ${
            darkMode ? "text-slate-100" : "text-slate-950"
          }`}>
            Projects <span className="text-emerald-500">Exhibit</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-3 rounded-full" />
          <p className={`mt-4 text-sm sm:text-base ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Browse my high-fidelity code bases and architectures. Explore 15 complete business management solutions.
          </p>
        </div>

        {/* Search & Filtering Control Bar */}
        <div className="space-y-6 mb-12">
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Search by system name or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all ${
                darkMode
                  ? "bg-slate-900 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-emerald-500/40"
                  : "bg-white border-slate-200 text-slate-950 placeholder-slate-400 focus:border-emerald-500/40"
              }`}
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/10"
                    : darkMode
                      ? "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid Display */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className={`text-base ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
              No repositories matched your search or category tags. Try adjusting the query!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className={`group flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-102 hover:shadow-xl ${
                  darkMode
                    ? "bg-slate-900/50 border-slate-800/80 hover:border-emerald-500/25"
                    : "bg-white border-slate-200 hover:border-emerald-500/25"
                }`}
              >
                {/* Visual Cover Banner with Lazy Fallback Render */}
                <div className="relative h-48 overflow-hidden bg-slate-950 z-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-100"
                    onError={(e) => {
                      // Gracefully swap to a highly available, themed fallback image seed on failure
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://picsum.photos/seed/${project.id}/800/450`;
                    }}
                  />
                  {/* Category overlay label */}
                  <span className="absolute top-3 left-3 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-950/80 text-emerald-400 border border-emerald-550/10 backdrop-blur-md">
                    <Tag size={10} />
                    <span>{project.category}</span>
                  </span>
                </div>

                {/* Content Block */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className={`font-display text-lg font-bold group-hover:text-emerald-500 transition-colors ${
                    darkMode ? "text-slate-100" : "text-slate-950"
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`mt-2.5 text-xs sm:text-sm flex-grow line-clamp-3 leading-relaxed ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}>
                    {project.description}
                  </p>

                  {/* Skills Tag chips */}
                  <div className="flex flex-wrap gap-1.5 mt-4 mb-6">
                    {project.tech.map((technology, tIndex) => (
                      <span
                        key={tIndex}
                        className={`text-[10px] sm:text-xs font-mono px-2.5 py-0.5 rounded-md ${
                          darkMode
                            ? "bg-slate-800/80 text-slate-300 border border-slate-700/30"
                            : "bg-slate-105 text-slate-600 border border-slate-200/50"
                        }`}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Operational controls button block */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center space-x-2 px-3 py-2.5 rounded-xl border text-xs font-semibold hover:scale-101 active:scale-98 transition-all ${
                        darkMode
                          ? "border-slate-800 bg-slate-850 hover:bg-slate-800 text-slate-300 hover:text-white"
                          : "border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      <Github size={14} />
                      <span>Codebase</span>
                    </a>

                    <button
                      id={`demo-${project.id}`}
                      onClick={() => handleLiveDemoClick(project.title)}
                      className={`flex items-center justify-center space-x-2 px-3 py-2.5 rounded-xl text-xs font-semibold hover:scale-101 active:scale-98 transition-all cursor-pointer ${
                        darkMode
                          ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white"
                          : "bg-emerald-50/50 border border-emerald-100 text-emerald-650 hover:bg-emerald-500 hover:text-white"
                      }`}
                    >
                      <Eye size={14} />
                      <span>Live Demo</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}

            {/* Special "+15 More Projects" Callout Card */}
            <article
              className={`group flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-102 hover:shadow-xl sm:col-span-1 ${
                darkMode
                  ? "bg-slate-900/40 border-slate-800/80 hover:border-emerald-500/30 shadow-emerald-500/5"
                  : "bg-white border-slate-200 hover:border-emerald-500/30 shadow-emerald-500/5"
              }`}
            >
              {/* Visual Cover Banner with giant display typography and elegant dark matrix mesh */}
              <div className="relative h-48 overflow-hidden bg-slate-950 flex flex-col items-center justify-center z-0 group-hover:bg-slate-900 transition-colors duration-300">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#022c22_1px,transparent_1px),linear-gradient(to_bottom,#022c22_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
                <span className="relative font-display font-black text-5xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 drop-shadow-sm group-hover:scale-110 transition-transform duration-500">
                  +15
                </span>
                <span className="relative text-[10px] font-bold uppercase tracking-widest text-emerald-400/80 mt-2">
                  Live Repositories
                </span>
              </div>

              {/* Content Block */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className={`font-display text-lg font-bold group-hover:text-emerald-400 transition-colors ${
                  darkMode ? "text-slate-100" : "text-slate-950"
                }`}>
                  +15 More Projects
                </h3>
                
                <p className={`mt-2.5 text-xs sm:text-sm flex-grow leading-relaxed ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}>
                  Explore additional applications, experiments, and management systems available on my GitHub profile.
                </p>

                {/* Simulated Skills Tag Chips */}
                <div className="flex flex-wrap gap-1.5 mt-4 mb-6">
                  {["React.js", "Node.js", "MERN Stack", "Express", "Databases"].map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className={`text-[10px] sm:text-xs font-mono px-2.5 py-0.5 rounded-md ${
                        darkMode
                          ? "bg-slate-800/50 text-slate-400 border border-slate-705/10"
                          : "bg-slate-100 text-slate-500 border border-slate-200/50"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Explore Button */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 mt-auto">
                  <a
                    href="https://github.com/Robertribbon25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center space-x-2 w-full px-4 py-3 rounded-xl text-xs font-bold transition-all duration-250 cursor-pointer ${
                      darkMode
                        ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-500/10"
                        : "bg-slate-950 text-white hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10"
                    }`}
                  >
                    <Github size={14} />
                    <span>Explore GitHub Profile</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        )}

      </div>
    </section>
  );
}
