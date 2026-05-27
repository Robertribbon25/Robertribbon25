import { ArrowUp, Terminal, Github, Instagram, Facebook, MessageSquare } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const socialIcons = [
    { icon: <Github size={18} />, href: personalInfo.socials.github, label: "GitHub" },
    { icon: <MessageSquare size={18} />, href: personalInfo.socials.whatsapp, label: "WhatsApp" },
    { icon: <Instagram size={18} />, href: personalInfo.socials.instagram, label: "Instagram" },
    { icon: <Facebook size={18} />, href: personalInfo.socials.facebook, label: "Facebook" }
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "GitHub", href: "#github" },
    { label: "Contact", href: "#contact" }
  ];

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className={`py-12 border-t transition-all ${
      darkMode ? "bg-slate-950/80 border-slate-900" : "bg-slate-50/50 border-slate-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Logo Brand Statement */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <a href="#home" className="flex items-center space-x-2 group">
              <span className="p-2 rounded-lg bg-emerald-500 text-white shadow-md shadow-emerald-500/10">
                <Terminal size={14} />
              </span>
              <span className={`font-display font-bold text-base ${darkMode ? "text-slate-100" : "text-slate-950"}`}>
                Robert<span className="text-emerald-500">.dev</span>
              </span>
            </a>
            <p className={`text-[11px] font-medium tracking-wide ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
              Kigali, Rwanda • Full-Stack Developer
            </p>
          </div>

          {/* Quick Nav Row */}
          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors font-medium ${
                  darkMode ? "text-slate-400 hover:text-emerald-400" : "text-slate-650 hover:text-emerald-600"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social connections & scroll top */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-3">
              {socialIcons.map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg border transition-all ${
                    darkMode
                      ? "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/20"
                      : "border-slate-200 bg-white text-slate-600 hover:text-emerald-600 hover:border-emerald-500/20"
                  }`}
                  aria-label={soc.label}
                >
                  {soc.icon}
                </a>
              ))}
            </div>

            <button
              id="back-to-top-btn"
              onClick={handleScrollToTop}
              className={`flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-lg border text-emerald-500 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer ${
                darkMode ? "border-slate-800 bg-slate-900/40 hover:bg-slate-900" : "border-slate-200 bg-white hover:bg-slate-50"
              }`}
            >
              <span>To Top</span>
              <ArrowUp size={12} />
            </button>
          </div>

        </div>

        {/* Lower copyright */}
        <div className="mt-8 pt-8 border-t border-slate-200/50 dark:border-slate-900/50 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-405 dark:text-slate-500 font-medium">
          <p>
            © {new Date().getFullYear()} Robert Ndayiragije. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0 font-mono">
            Designed for high fidelity • Responsive Web System
          </p>
        </div>
      </div>
    </footer>
  );
}
