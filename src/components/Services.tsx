import { Layout, Server, Database, Cpu, Flame, Infinity, ShieldAlert } from "lucide-react";
import { services, Service } from "../data/portfolioData";

interface ServicesProps {
  darkMode: boolean;
}

export default function Services({ darkMode }: ServicesProps) {
  
  const renderIcon = (iconName: string, size = 24) => {
    switch (iconName) {
      case "Layout":
        return <Layout size={size} className="text-emerald-500" />;
      case "Server":
        return <Server size={size} className="text-indigo-550" />;
      case "Database":
        return <Database size={size} className="text-cyan-500" />;
      case "Cpu":
        return <Cpu size={size} className="text-amber-500" />;
      case "Flame":
        return <Flame size={size} className="text-orange-500" />;
      case "Infinity":
        return <Infinity size={size} className="text-purple-500" />;
      default:
        return <ShieldAlert size={size} className="text-emerald-500" />;
    }
  };

  const getBadgeColor = (iconName: string) => {
    switch (iconName) {
      case "Layout": return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "Server": return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
      case "Database": return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
      case "Cpu": return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "Flame": return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "Infinity": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      default: return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
    }
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors ${
            darkMode ? "text-slate-100" : "text-slate-950"
          }`}>
            Professional <span className="text-emerald-500">Services</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-3 rounded-full" />
          <p className={`mt-4 text-sm sm:text-base ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            I deliver high-standard industry development services, focusing on responsiveness, scalability, and code cleanliness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border transition-all duration-300 hover:scale-102 hover:shadow-xl relative overflow-hidden group ${
                darkMode
                  ? "bg-slate-900/40 border-slate-800/80 hover:border-slate-700/60"
                  : "bg-white border-slate-200 hover:border-slate-300/80"
              }`}
            >
              {/* Subtle visual color accent top bars */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 from-emerald-500 to-indigo-500`} />

              {/* Service Icon inside themed badge */}
              <div className={`p-3 w-12 h-12 rounded-2xl flex items-center justify-center border mb-6 ${getBadgeColor(service.icon)}`}>
                {renderIcon(service.icon)}
              </div>

              <h3 className={`font-display font-bold text-lg mb-3 ${
                darkMode ? "text-slate-100" : "text-slate-950"
              }`}>
                {service.title}
              </h3>

              <p className={`text-xs sm:text-sm leading-relaxed ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}>
                {service.description}
              </p>

              {/* Bottom tag indicator */}
              <div className="mt-6 flex items-center text-xs font-semibold text-emerald-500 group-hover:translate-x-1.5 transition-transform duration-300">
                <span>Enterprise Grade Standard</span>
                <span className="ml-1">➔</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
