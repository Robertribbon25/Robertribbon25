import { useState } from "react";
import { Menu, X, Sun, Moon, Terminal } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "GitHub", href: "#github" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      darkMode ? "glass-dark border-b border-slate-800/50" : "glass-light border-b border-slate-200/50"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <span className="p-2 rounded-lg bg-emerald-500 text-white group-hover:bg-emerald-600 transition-all duration-300 shadow-md shadow-emerald-500/10">
              <Terminal size={18} className="animate-pulse" />
            </span>
            <span className={`font-display font-bold tracking-tight text-lg transition-colors ${
              darkMode ? "text-slate-100 group-hover:text-emerald-400" : "text-slate-950 group-hover:text-emerald-600"
            }`}>
              Robert<span className="text-emerald-500">.dev</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    darkMode
                      ? "text-slate-300 hover:text-emerald-400 hover:bg-slate-800/40"
                      : "text-slate-600 hover:text-emerald-600 hover:bg-slate-100/50"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-3 border-l pl-4 border-slate-200 dark:border-slate-800">
              {/* Theme Toggle Button */}
              <button
                id="theme-toggle-desktop"
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all ${
                  darkMode
                    ? "text-yellow-400 bg-slate-800/60 hover:bg-slate-800 hover:text-yellow-300"
                    : "text-slate-600 bg-slate-100 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
                title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              id="theme-toggle-mobile"
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all ${
                darkMode
                  ? "text-yellow-400 bg-slate-800/60 hover:bg-slate-800"
                  : "text-slate-600 bg-slate-100 hover:bg-slate-200"
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all ${
                darkMode ? "text-slate-300 hover:bg-slate-800" : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className={`md:hidden px-4 pt-2 pb-4 space-y-2 border-t transition-all ${
          darkMode ? "bg-slate-900/95 border-slate-800" : "bg-white/95 border-slate-200"
        }`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all ${
                darkMode
                  ? "text-slate-300 hover:text-emerald-400 hover:bg-slate-800"
                  : "text-slate-700 hover:text-emerald-600 hover:bg-slate-100"
              }`}
            >
              {item.label}
            </a>
          ))}

        </div>
      )}
    </nav>
  );
}
