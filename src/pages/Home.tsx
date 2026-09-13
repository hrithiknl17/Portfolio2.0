import { ProjectCard } from '../components/ProjectCard';
import { SkillsSection } from '../components/SkillsSection';
import { ScrollParagraph } from './About';
import { projects, experience, education } from '../data';
import { ArrowDownRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import heroPhoto from '../../man_drinking_water_jug.webp';

export function Home() {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const visibleExperience = showAllExperience ? experience : experience.slice(0, 3);
  const hasMoreExperience = experience.length > 3;

  return (
    <div className="flex flex-col gap-24 relative overflow-hidden">
      {/* ── AMBIENT COLORFUL GLOW BLOBS ── */}
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-gradient-to-br from-amber-300/35 via-yellow-200/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-0 w-[480px] h-[480px] bg-gradient-to-bl from-blue-400/25 via-indigo-300/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[600px] left-1/4 w-[380px] h-[380px] bg-gradient-to-tr from-rose-300/20 via-pink-200/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section className="pt-2 sm:pt-6 pb-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          
          {/* ── LEFT SIDE: Typography & CTA ── */}
          <div className="lg:col-span-7 flex flex-col justify-center relative">
            
            {/* Playful Floating Mini Stickers */}
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400/20 via-rose-400/20 to-blue-500/20 border border-amber-400/40 text-stone-800 font-bold text-xs tracking-wider uppercase font-sans shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                SOFTWARE ENGINEER & AI SYSTEMS
              </motion.span>

              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FF5A36] text-white text-xs font-bold font-sans tracking-wide shadow-sm cursor-default"
              >
                Full-Stack ✦
              </motion.span>

              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFC700] text-stone-900 text-xs font-bold font-sans tracking-wide shadow-sm cursor-default"
              >
                Systems ⚙️
              </motion.span>
            </div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative mb-6"
            >
              {/* HELLO, I'M */}
              <h1 className="font-['Mudstone',sans-serif] font-black text-[clamp(3.4rem,7vw,5.75rem)] leading-[0.93] tracking-[-0.025em] text-stone-950">
                HELLO, I'M
              </h1>

              {/* HRITHIK NL + Doodle Arrow + Sparkle */}
              <div className="relative inline-flex items-center gap-2 sm:gap-3 mt-1 flex-wrap">
                {/* Hand-drawn doodle curved arrow pointing to HRITHIK */}
                <svg
                  className="absolute -left-10 sm:-left-14 -top-2 sm:top-0 w-8 sm:w-11 h-12 sm:h-16 text-stone-950 pointer-events-none select-none"
                  viewBox="0 0 90 150"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M72 6 C 30 28 6 72 24 124" />
                  <path d="M9 102 L 24 130 L 46 116" />
                </svg>

                {/* HRITHIK with yellow highlighter underline */}
                <span className="relative inline-block text-[#1E50FF] font-['Mudstone',sans-serif] font-black text-[clamp(3.4rem,7vw,5.75rem)] leading-[0.93] tracking-[-0.025em]">
                  <span className="relative z-10">HRITHIK</span>
                  <span className="absolute -left-1 -right-1 bottom-1 sm:bottom-2 h-4 sm:h-5 bg-[#FFC000] -z-0 rounded-full opacity-95 shadow-sm" />
                </span>

                {/* N L */}
                <span className="font-['Mudstone',sans-serif] font-black text-[clamp(3.4rem,7vw,5.75rem)] leading-[0.93] tracking-[-0.025em] text-stone-950">
                  N L
                </span>

                {/* Vibrant Blue & Cyan Sparkle Star */}
                <motion.span
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center shrink-0 ml-1 select-none drop-shadow-md"
                >
                  <svg className="w-9 h-9 sm:w-12 sm:h-12 fill-[#1E50FF]" viewBox="0 0 24 24">
                    <path d="M12 0 C12 6.627 17.373 12 24 12 C17.373 12 12 17.373 12 24 C12 17.373 6.627 12 0 12 C6.627 12 12 6.627 12 0 Z" />
                  </svg>
                </motion.span>
              </div>
            </motion.div>

            {/* Editorial Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-stone-700 text-base sm:text-[17px] leading-relaxed max-w-lg mb-8 font-sans font-normal"
            >
              A software engineer building full-stack applications and AI systems,
              shaping products where robust engineering meets intelligent autonomy
              and curious craft.
            </motion.p>

            {/* Pill Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#1E50FF] via-[#2563EB] to-[#4F46E5] hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 group"
              >
                View Work
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Resume download will be available soon!");
                }}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-stone-900 border-2 border-stone-300 hover:border-amber-400 px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT SIDE: Portrait ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center lg:justify-end relative"
          >
            <div className="relative w-[300px] h-[405px] sm:w-[390px] sm:h-[505px] lg:w-[420px] lg:h-[545px] overflow-visible">
              <p className="absolute -left-3 top-10 z-20 font-['Mudstone',sans-serif] text-3xl font-black leading-none tracking-[-0.04em] text-stone-950 sm:-left-7 sm:text-4xl">
                Stay
              </p>
              <p className="absolute left-2 bottom-12 z-20 translate-x-[5cm] font-['Mudstone',sans-serif] text-3xl font-black leading-none tracking-[-0.04em] text-stone-950 sm:-left-5 sm:text-4xl">
                Hydrated
              </p>
              <div className="h-full w-full overflow-hidden">
                <img
                  src={heroPhoto}
                  alt="Hrithik N L outdoors in the hills"
                  className="h-full w-full origin-bottom translate-y-[-2cm] scale-[1.7] object-contain object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-stone-200 pt-12 sm:pt-16">
        <div className="max-w-2xl">
          <h2 className="font-['Mudstone',sans-serif] text-3xl font-black tracking-[-0.025em] text-stone-950 sm:text-4xl">
            About
          </h2>
          <p className="mt-3 text-base leading-relaxed text-stone-700 sm:text-lg">
            The human bit behind the work.
          </p>
        </div>

        <ScrollParagraph compact />

        <SkillsSection />
      </section>

      {/* ═══════════════ SELECTED WORK ═══════════════ */}
      <section id="work" className="pt-4">
        <div className="flex items-baseline justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1E50FF]" />
            <h2 className="font-['Mudstone',sans-serif] text-2xl sm:text-3xl font-black tracking-tight text-stone-950">
              Selected Work
            </h2>
          </div>
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-stone-500">
            {String(projects.length).padStart(2, '0')} PROJECTS
          </span>
        </div>
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} index={index} {...project} />
          ))}
        </div>
      </section>

      {/* ═══════════════ EXPERIENCE ═══════════════ */}
      <section className="pt-2">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <h2 className="font-['Mudstone',sans-serif] text-2xl sm:text-3xl font-black tracking-tight text-stone-950">
            Experience
          </h2>
        </div>

        <div className="relative border-l-2 border-stone-200 ml-4 flex flex-col gap-9">
          {visibleExperience.map((exp, index) => {
            const circleColors = [
              "bg-blue-600 text-white shadow-blue-500/30",
              "bg-amber-500 text-white shadow-amber-500/30",
              "bg-emerald-500 text-white shadow-emerald-500/30",
            ];
            const colorClass = circleColors[index % circleColors.length];

            return (
              <motion.div 
                key={exp.id} 
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative pl-10 sm:pl-12"
              >
                <div className={`absolute w-7 h-7 flex items-center justify-center ${colorClass} font-['Mudstone',sans-serif] text-xs font-black rounded-full -left-[15px] top-1 border-2 border-white shadow-md`}>
                  {index + 1}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                  <h3 className="font-serif text-xl font-medium text-stone-950 tracking-tight">
                    {exp.role} <span className="text-[#1E50FF] font-sans font-semibold text-base">@ {exp.company}</span>
                  </h3>
                  {exp.date && (
                    <span className="text-xs font-mono font-bold text-stone-600 bg-stone-100 px-3 py-1 rounded-full tabular-nums shrink-0">
                      {exp.date}
                    </span>
                  )}
                </div>
                <p className="text-stone-700 text-[15px] leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        {hasMoreExperience && (
          <button 
            onClick={() => setShowAllExperience(!showAllExperience)}
            className="mt-8 ml-4 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors"
          >
            {showAllExperience ? "Show less" : "Show more"}
          </button>
        )}
      </section>
      
      {/* ═══════════════ EDUCATION ═══════════════ */}
      <section className="pt-10">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <h2 className="font-['Mudstone',sans-serif] text-2xl sm:text-3xl font-black tracking-tight text-stone-950">
            Education
          </h2>
        </div>

        <div className="flex flex-col gap-6 ml-4">
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1"
            >
              <div>
                <h3 className="font-serif text-xl font-medium text-stone-950 tracking-tight">
                  {edu.degree}
                </h3>
                <p className="text-stone-700 text-[15px] leading-relaxed">
                  {edu.institution}
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-stone-600 bg-stone-100 px-3 py-1 rounded-full tabular-nums shrink-0">
                {edu.date}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════ CONTACT BANNER ═══════════════ */}
      <section className="mt-4 mb-16">
        <div className="relative min-h-[26rem] [perspective:1400px]">
          {/* Decorative ambient glowing circles */}
          <motion.div
            className="relative h-full min-h-[26rem] w-full [transform-style:preserve-3d]"
            animate={{ rotateY: showContactForm ? 180 : 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-[36px] bg-gradient-to-br from-[#1E50FF] via-[#2563EB] to-[#4F46E5] p-10 text-center shadow-2xl shadow-blue-500/25 [backface-visibility:hidden] sm:p-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-amber-400/20 blur-2xl" />
              <h2 className="relative mb-6 font-['Mudstone',sans-serif] text-[3rem] font-black tracking-tight text-white drop-shadow-md sm:text-[3.75rem]">
                Let's talk.
              </h2>
              <p className="relative mb-8 max-w-md font-sans text-base text-blue-100 sm:text-lg">
                Looking for new engineering challenges and exciting products to build.
              </p>
              <div className="relative flex flex-col gap-4 font-sans text-xs font-bold uppercase tracking-wide sm:flex-row sm:text-sm">
                <button
                  type="button"
                  onClick={() => setShowContactForm(true)}
                  className="rounded-full bg-white px-7 py-3.5 text-stone-900 shadow-lg transition-all duration-200 hover:scale-105 hover:bg-amber-300 hover:shadow-xl active:scale-95"
                >
                  Email Me ✉️
                </button>
                <a href="https://github.com/hrithiknl17" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 bg-white/15 px-7 py-3.5 text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white/25 active:scale-95">
                  GitHub ↗
                </a>
                <a href="https://linkedin.com/in/hrithiknl" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 bg-white/15 px-7 py-3.5 text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white/25 active:scale-95">
                  LinkedIn ↗
                </a>
              </div>
            </div>

            <div className="absolute inset-0 overflow-hidden rounded-[36px] bg-white p-6 text-left shadow-2xl shadow-blue-500/25 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E50FF]">Send a note</p>
                  <h2 className="mt-2 font-['Mudstone',sans-serif] text-3xl font-black tracking-tight text-stone-950 sm:text-4xl">Let’s build something.</h2>
                </div>
                <button type="button" onClick={() => setShowContactForm(false)} className="rounded-full border border-stone-200 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-stone-600 transition hover:border-stone-400 hover:text-stone-950">Back</button>
              </div>
              <form className="mt-5 grid gap-3 sm:grid-cols-2" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value= "b9ca12bc-2859-41a5-a345-3d88c343fc7d"/>
                <input type="hidden" name="subject" value="New portfolio message" />
                <input type="hidden" name="from_name" value="Hrithik N L portfolio" />
                <input name="name" required placeholder="Your name" aria-label="Your name" className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-[#1E50FF] sm:col-span-1" />
                <input name="email" type="email" required placeholder="Your email" aria-label="Your email" className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-[#1E50FF] sm:col-span-1" />
                <textarea name="message" required placeholder="Tell me what you are thinking..." aria-label="Your message" rows={3} className="resize-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-[#1E50FF] sm:col-span-2" />
                <button type="submit" className="rounded-full bg-[#1E50FF] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg sm:col-span-2 sm:justify-self-start">Send message ✦</button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
