import { Github, Star, GitFork, GitPullRequest, Award, ArrowUpRight, Calendar } from "lucide-react";

interface GitHubSectionProps {
  darkMode: boolean;
}

export default function GitHubSection({ darkMode }: GitHubSectionProps) {
  // Mock contribution cell states representing high activity
  const contributionGrid = Array.from({ length: 140 }, (_, i) => {
    // Make weekends lower, midweeks higher
    const day = i % 7;
    const level = day === 0 || day === 6 ? Math.floor(Math.random() * 2) : Math.floor(Math.random() * 5);
    return level; // 0 = empty, 1-4 = varying shades of green
  });

  const gitStats = [
    { label: "Total commits", value: "2,143", icon: <GitCalendarIcon size={16} /> },
    { label: "Pull requests", value: "84 Open/Merged", icon: <GitPullRequest size={16} className="text-violet-400" /> },
    { label: "Stars earned", value: "112 Stars", icon: <Star size={16} className="text-amber-400" /> },
    { label: "Repositories", value: "15 Public Repos", icon: <Github size={16} className="text-emerald-400" /> }
  ];

  const featuredRepos = [
    {
      name: "bussiness-management-system",
      stars: "14",
      forks: "4",
      desc: "Robust desktop/web system designed using Node and React to manage sales registers.",
      url: "https://github.com/Robertribbon25/bussiness-management-system"
    },
    {
      name: "smarttech-hrms",
      stars: "9",
      forks: "2",
      desc: "Complete enterprise resource planner, matching personnel rosters with payroll streams.",
      url: "https://github.com/Robertribbon25/smarttech-hrms"
    }
  ];

  function GitCalendarIcon({ size }: { size: number }) {
    return <Calendar size={size} className="text-emerald-400" />;
  }

  return (
    <section id="github" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors ${
            darkMode ? "text-slate-100" : "text-slate-950"
          }`}>
            GitHub <span className="text-emerald-500">Activity</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-3 rounded-full" />
          <p className={`mt-4 text-sm sm:text-base ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            A look into my open-source contributions, daily codes commits, and active code repositories.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stats & Profile Card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Main Bio Card */}
            <div className={`p-6 rounded-2xl border transition-all ${
              darkMode ? "bg-slate-900/50 border-slate-800" : "bg-white border-slate-200"
            }`}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-800 flex items-center justify-center font-display font-bold text-white text-lg">
                  <img
                    src="https://github.com/Robertribbon25.png"
                    alt="Robert Ribbon Profile"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallbackSpan = document.createElement('span');
                        fallbackSpan.className = 'font-display font-extrabold text-white text-lg';
                        fallbackSpan.innerText = 'RR';
                        parent.appendChild(fallbackSpan);
                      }
                    }}
                  />
                </div>
                <div>
                  <h3 className={`font-semibold ${darkMode ? "text-slate-100" : "text-slate-950"}`}>
                    Robert Ribbon
                  </h3>
                  <a
                    href="https://github.com/Robertribbon25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-500 text-xs font-mono hover:underline flex items-center gap-0.5"
                  >
                    <span>@Robertribbon25</span>
                    <ArrowUpRight size={10} />
                  </a>
                </div>
              </div>
              <p className={`text-xs sm:text-sm mb-4 leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                Full Stack Developer in Kigali. Shipping modular full-stack code daily. Committed to robust designs.
              </p>
              
              <a
                href="https://github.com/Robertribbon25"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white text-sm font-semibold transition-all"
              >
                <Github size={16} />
                <span>Visit GitHub Profile</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {gitStats.map((stat, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl border flex items-center justify-between ${
                    darkMode ? "bg-slate-900/40 border-slate-800" : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div>
                    <span className={`block text-xs uppercase tracking-wider ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                      {stat.label}
                    </span>
                    <span className={`font-mono text-sm sm:text-base font-bold ${darkMode ? "text-slate-250" : "text-slate-900"}`}>
                      {stat.value}
                    </span>
                  </div>
                  <div className={`p-2 rounded-lg ${darkMode ? "bg-slate-800" : "bg-slate-100"}`}>
                    {stat.icon}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Graphs & Featured Repos */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Contribution Graphic Container */}
            <div className={`p-6 rounded-2xl border ${
              darkMode ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200"
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h4 className={`font-display font-bold text-sm sm:text-base ${darkMode ? "text-slate-200" : "text-slate-900"}`}>
                    Contributions Calendar
                  </h4>
                  <p className={`text-xs ${darkMode ? "text-slate-500" : "text-slate-450"}`}>
                    1,424 commits and contributions in the past year
                  </p>
                </div>
                <div className="flex items-center space-x-1 text-[10px] font-medium font-mono">
                  <span className={darkMode ? "text-slate-500" : "text-slate-400"}>Less</span>
                  <div className="w-2.5 h-2.5 bg-slate-800/10 dark:bg-slate-800 rounded-sm" />
                  <div className="w-2.5 h-2.5 bg-emerald-500/30 rounded-sm" />
                  <div className="w-2.5 h-2.5 bg-emerald-500/60 rounded-sm" />
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-sm" />
                  <span className={darkMode ? "text-slate-500" : "text-slate-400"}>More</span>
                </div>
              </div>

              {/* Grid Box */}
              <div className="overflow-x-auto pb-2">
                <div className="grid grid-flow-col grid-rows-7 gap-1 min-w-[340px] h-[90px]">
                  {contributionGrid.map((level, idx) => {
                    let colorClass = "bg-slate-850";
                    if (!darkMode) {
                      colorClass = "bg-slate-100";
                    }
                    if (level === 1) colorClass = "bg-emerald-500/20";
                    if (level === 2) colorClass = "bg-emerald-500/40";
                    if (level === 3) colorClass = "bg-emerald-500/70";
                    if (level === 4) colorClass = "bg-emerald-500";
                    return (
                      <div
                        key={idx}
                        className={`w-[10px] h-[10px] rounded-[1.5px] transition-all duration-300 hover:scale-120 ${colorClass}`}
                        title={`${level * 2} contributions`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Featured Showcase Repos */}
            <div className="space-y-4">
              <h4 className={`font-display font-bold text-sm sm:text-base ${darkMode ? "text-slate-200" : "text-slate-900"}`}>
                Starred Code Repositories
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {featuredRepos.map((repo, i) => (
                  <div
                    key={i}
                    className={`p-5 rounded-xl border flex flex-col justify-between hover:scale-101 hover:shadow shadow-sm transition-all ${
                      darkMode ? "bg-slate-900/50 border-slate-800" : "bg-white border-slate-200"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-sm font-semibold text-emerald-500 hover:underline flex items-center gap-1"
                        >
                          <span>{repo.name}</span>
                          <ArrowUpRight size={12} />
                        </a>
                      </div>
                      <p className={`text-xs leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                        {repo.desc}
                      </p>
                    </div>

                    <div className="flex items-center space-x-3 mt-4 text-[10px] font-bold tracking-wide uppercase text-slate-400 dark:text-slate-500">
                      <span className="flex items-center gap-1">
                        <Star size={11} className="text-amber-500" />
                        <span>{repo.stars}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={11} className="text-emerald-550" />
                        <span>{repo.forks}</span>
                      </span>
                    </div>
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
