import { ArrowUpRight, Github } from 'lucide-react';
import React from 'react';
import { motion } from 'motion/react';

interface ProjectCardProps {
  id: string;
  name: string;
  accent?: string;
  problem: string;
  stack: string;
  stats?: { label: string; value: string }[];
  demoLink?: string;
  demoText?: string;
  repoLink?: string;
  index?: number;
  key?: React.Key;
}

// Color palette map for project accents
const colorThemes: Record<string, { bg: string; border: string; badge: string; text: string; lightBg: string }> = {
  liquid: {
    bg: "hover:border-[#FF0055]/40",
    border: "border-stone-200/80",
    badge: "bg-gradient-to-r from-[#FF0055] to-[#FF5588]",
    text: "text-[#FF0055]",
    lightBg: "bg-pink-500/10",
  },
  mcpwatch: {
    bg: "hover:border-[#F59E0B]/40",
    border: "border-stone-200/80",
    badge: "bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]",
    text: "text-[#D97706]",
    lightBg: "bg-amber-500/10",
  },
  outreachos: {
    bg: "hover:border-[#10B981]/40",
    border: "border-stone-200/80",
    badge: "bg-gradient-to-r from-[#10B981] to-[#34D399]",
    text: "text-[#059669]",
    lightBg: "bg-emerald-500/10",
  },
  "project-pulse": {
    bg: "hover:border-[#8B5CF6]/40",
    border: "border-stone-200/80",
    badge: "bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]",
    text: "text-[#7C3AED]",
    lightBg: "bg-purple-500/10",
  },
  "api-explorer-env": {
    bg: "hover:border-[#0F766E]/40",
    border: "border-stone-200/80",
    badge: "bg-gradient-to-r from-[#0F766E] to-[#14B8A6]",
    text: "text-[#0F766E]",
    lightBg: "bg-teal-500/10",
  },
  "creative-dine": {
    bg: "hover:border-[#F97316]/40",
    border: "border-stone-200/80",
    badge: "bg-gradient-to-r from-[#F97316] to-[#FB923C]",
    text: "text-[#EA580C]",
    lightBg: "bg-orange-500/10",
  },
  mailscout: {
    bg: "hover:border-[#0EA5E9]/40",
    border: "border-stone-200/80",
    badge: "bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]",
    text: "text-[#0284C7]",
    lightBg: "bg-sky-500/10",
  },
  grounded: {
    bg: "hover:border-[#6366F1]/40",
    border: "border-stone-200/80",
    badge: "bg-gradient-to-r from-[#6366F1] to-[#818CF8]",
    text: "text-[#4F46E5]",
    lightBg: "bg-indigo-500/10",
  },
  "ats-scan-pro": {
    bg: "hover:border-[#F97316]/40",
    border: "border-stone-200/80",
    badge: "bg-gradient-to-r from-[#F97316] to-[#FB923C]",
    text: "text-[#EA580C]",
    lightBg: "bg-orange-500/10",
  },
  "social-spark": {
    bg: "hover:border-[#EC4899]/40",
    border: "border-stone-200/80",
    badge: "bg-gradient-to-r from-[#EC4899] to-[#F472B6]",
    text: "text-[#DB2777]",
    lightBg: "bg-pink-500/10",
  },
  "rcb-monitor": {
    bg: "hover:border-[#DC2626]/40",
    border: "border-stone-200/80",
    badge: "bg-gradient-to-r from-[#DC2626] to-[#F87171]",
    text: "text-[#B91C1C]",
    lightBg: "bg-red-500/10",
  },
};

export function ProjectCard({ id, name, problem, stack, stats, demoLink, demoText, repoLink, index = 0 }: ProjectCardProps) {
  const theme = colorThemes[id] || {
    bg: "hover:border-[#1E50FF]/40",
    border: "border-stone-200/80",
    badge: "bg-gradient-to-r from-[#1E50FF] to-[#60A5FA]",
    text: "text-[#1E50FF]",
    lightBg: "bg-blue-500/10",
  };

  const stackItems = stack.split(/,\s*/);

  return (
    <motion.article 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-white border-2 ${theme.border} ${theme.bg} shadow-sm hover:shadow-xl transition-all duration-300`}
    >
      <div className="w-full">
        {/* Top header with colored badge */}
        <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
          <div className="flex items-center gap-3">
            <span className={`inline-flex items-center px-4 py-1.5 font-['Mudstone',sans-serif] font-black text-sm tracking-wider uppercase text-white rounded-full shadow-md ${theme.badge}`}>
              {name}
            </span>
            <span className={`text-xs font-mono font-bold uppercase tracking-widest ${theme.text}`}>
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {demoLink && demoLink !== "#" && (
              <a 
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#1E50FF] hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full transition-all duration-200 shadow-sm active:scale-95"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {repoLink && repoLink !== "#" && (
              <a 
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-200"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
        
        {/* Main Problem / Solution Statement */}
        <p className="font-serif text-xl sm:text-2xl font-normal leading-snug text-stone-950 tracking-tight mb-5">
          {problem}
        </p>
        
        {/* Stats Grid for MCPwatch or other stat-rich projects */}
        {stats && stats.length > 0 && (
          <div className="mb-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="flex flex-col p-3.5 rounded-2xl bg-amber-50 border border-amber-200"
              >
                <span className="font-['Mudstone',sans-serif] text-2xl font-black text-amber-600 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[11px] font-sans font-semibold text-stone-600 uppercase tracking-wider mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Colorful Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {stackItems.map((tech, idx) => (
            <span
              key={idx}
              className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-mono font-medium bg-stone-100 text-stone-800 border border-stone-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
