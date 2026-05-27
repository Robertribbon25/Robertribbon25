import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import GitHubSection from "./components/GitHubSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { handleDownloadCV } from "./utils/cvGenerator";

export default function App() {
  // Always default to dark mode for a pristine, professional tech-inspired visual grid
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  // Simulated professional portfolio initializing routine
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Sync state changes explicitly into the document root context
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center font-mono text-emerald-500 p-4">
        <div className="p-8 rounded-3xl border border-slate-800/80 bg-slate-900/40 max-w-xs text-center space-y-4 shadow-2xl shadow-emerald-500/5">
          <div className="w-10 h-10 rounded-full border-3 border-emerald-500 border-t-transparent animate-spin mx-auto" />
          <div className="space-y-1">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-105">Robert.dev</p>
            <p className="text-[10px] text-emerald-500/80 uppercase font-bold tracking-wider">Compiling Core Modules</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 overflow-x-hidden ${
      darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-950"
    }`}>
      {/* Background grid overlays */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {darkMode ? (
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:4rem_4rem] opacity-30" />
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:4rem_4rem] opacity-30" />
        )}
      </div>

      {/* Main Structural Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
          onDownloadCV={handleDownloadCV}
        />
        
        <main className="flex-grow">
          {/* Landing viewport */}
          <Hero
            darkMode={darkMode}
            onDownloadCV={handleDownloadCV}
          />
          
          {/* Biography and summary details */}
          <About darkMode={darkMode} />
          
          {/* Measured technical & soft competencies */}
          <Skills darkMode={darkMode} />
          
          {/* Services capabilities outline */}
          <Services darkMode={darkMode} />
          
          {/* Gallery display of projects */}
          <Projects darkMode={darkMode} />
          
          {/* Mockup GitHub operations matrix */}
          <GitHubSection darkMode={darkMode} />
          
          {/* Direct client connect form */}
          <Contact darkMode={darkMode} />
        </main>
        
        {/* Footing anchors */}
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
