import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { SkillsSection } from '../components/SkillsSection';
import { education } from '../data';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

const BIO =
  "Hi, I'm Hrithik, a full-stack AI/ML engineer in Bengaluru. I graduated in Information Science Engineering, which means I have zero years of experience and four projects nobody requested. Mostly retrieval systems, agents, and the unglamorous infrastructure that stops them falling over. Outside of that, I print posters for Fury Arts, take people up hills, and lose to my own chess bot.";

// Single word — opacity driven by scroll progress
function Word({ word, progress, start, end }: {
  word: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.12, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {word}{' '}
    </motion.span>
  );
}

// Full scroll-driven paragraph with photo behind it
export function ScrollParagraph({ compact = false }: { compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.2'],
  });

  const words = BIO.split(' ');

  return (
    <div
      ref={ref}
      className={`relative w-full mx-auto ${compact ? 'mt-10 mb-16 sm:mt-12 sm:mb-20' : 'mt-[6cm] mb-[6cm]'} px-4 sm:px-8 lg:px-12 py-16`}
    >
      {/* Photo — spans exactly the paragraph box (py-16), nudged up slightly */}
      <div
        className="absolute inset-x-0 top-16 bottom-16 -translate-y-4 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <img
          src="/assets/images/hrithik-about-trimmed.png"
          alt=""
          className="h-full w-auto object-contain opacity-55"
        />
      </div>

      {/* Word-by-word scroll reveal */}
      <p
        className="relative z-10 text-center text-stone-900 leading-snug w-full"
        style={{
          fontFamily: '"ITC Garamond Std", "EB Garamond", Garamond, ui-serif, Georgia, serif',
          fontSize: '48px',
        }}
      >
        {words.map((word, i) => (
          <Word
            key={i}
            word={word}
            progress={scrollYProgress}
            start={i / words.length}
            end={(i + 1) / words.length}
          />
        ))}
      </p>
    </div>
  );
}


// Photos to rotate through — each chip starts at a different one
const PHOTOS = [
  '/assets/about-gallery/about-01.jpeg',
  '/assets/about-gallery/about-02.jpeg',
  '/assets/about-gallery/about-03.jpeg',
  '/assets/about-gallery/about-04.jpeg',
  '/assets/about-gallery/about-05.jpeg',
  '/assets/about-gallery/about-06.jpeg',
  '/assets/about-gallery/about-07.jpeg',
  '/assets/about-gallery/about-08.jpeg',
  '/assets/about-gallery/about-09.jpeg',
  '/assets/about-gallery/about-10.jpeg',
  '/assets/about-gallery/about-11.jpeg',
  '/assets/about-gallery/about-12.jpeg',
];

// Auto-rotating inline photo chip — offset so each instance shows a different photo
function RotatingImg({ offset = 0 }: { offset?: number }) {
  const [idx, setIdx] = useState(offset % PHOTOS.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx(i => (i + 1) % PHOTOS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span
      className="inline-flex items-center mx-2 sm:mx-3 align-middle relative"
      style={{ verticalAlign: 'middle' }}
    >
      <span
        className="relative block overflow-hidden rounded-xl shadow-md border border-stone-200"
        style={{ width: 'clamp(60px, 9vw, 115px)', height: 'clamp(44px, 6.5vw, 78px)' }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            src={PHOTOS[idx]}
            alt=""
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </span>
    </span>
  );
}

export function About() {
  return (
    <div className="flex flex-col">

      {/* ── HERO HEADLINE ─────────────────────────────────────── */}
      <section className="relative pt-28 pb-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="text-center w-full max-w-4xl mx-auto px-4"
        >
          {/* 3 lines, each is a flex row — cannot wrap */}
          <div
            className="flex flex-col items-center gap-2 font-['Mudstone',sans-serif] font-black tracking-tight text-[#1E50FF]"
            style={{ fontSize: 'clamp(1.75rem, 4.6vw, 4rem)', lineHeight: 1.25 }}
          >
            {/* Line 1 */}
            <div className="flex items-center justify-center flex-nowrap whitespace-nowrap gap-2 sm:gap-3">
              <span>Full-stack</span>
              <RotatingImg offset={0} />
              <span>engineer.</span>
            </div>

            {/* Line 2 */}
            <div className="flex items-center justify-center flex-nowrap whitespace-nowrap gap-2 sm:gap-3">
              {/* Yellow highlighter swash — same treatment as HRITHIK on the home hero */}
              <span className="relative inline-block">
                <span className="relative z-10">Currently unemployed,</span>
                <span className="absolute -left-1 -right-1 bottom-2 sm:bottom-3 h-3.5 sm:h-5 bg-[#FFC000] -z-0 rounded-full opacity-95 shadow-sm" />
              </span>
              <RotatingImg offset={1} />
              <span>which is why the</span>
            </div>

            {/* Line 3 */}
            <div className="flex items-center justify-center flex-nowrap whitespace-nowrap gap-2 sm:gap-3">
              <span>projects</span>
              <RotatingImg offset={2} />
              <span>are so good.</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── BIO PARAGRAPH + PHOTO ─────────────────────────────── */}
      <ScrollParagraph />

      <SkillsSection />

      {/* ── EXPERIENCE ────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex flex-col gap-8 py-8 border-t border-stone-100"
      >
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#1E50FF]" />
          <h2 className="font-['Mudstone',sans-serif] text-2xl sm:text-3xl font-black tracking-tight text-stone-950">
            Experience
          </h2>
        </div>
        <ExperienceTimeline />
      </motion.section>

      {/* ── EDUCATION ─────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col gap-6 py-8 border-t border-stone-100"
      >
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <h2 className="font-['Mudstone',sans-serif] text-2xl sm:text-3xl font-black tracking-tight text-stone-950">
            Education
          </h2>
        </div>
        {education.map((edu) => (
          <div key={edu.id} className="text-[15px] leading-relaxed text-stone-600">
            <div className="font-serif text-xl font-medium text-stone-950 tracking-tight mb-0.5">
              {edu.degree}
            </div>
            <div>{edu.institution} · <span className="font-medium text-stone-800">{edu.date}</span></div>
          </div>
        ))}
      </motion.section>

      {/* ── CERTIFICATIONS & AWARDS ───────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.33 }}
        className="flex flex-col gap-6 py-8 border-t border-stone-100"
      >
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <h2 className="font-['Mudstone',sans-serif] text-2xl sm:text-3xl font-black tracking-tight text-stone-950">
            Certifications & Awards
          </h2>
        </div>
        <ul className="flex flex-col gap-5 text-[15px] leading-relaxed text-stone-600">
          <li>
            <div className="font-serif text-xl font-medium text-stone-950 tracking-tight mb-0.5">
              AWS Cloud Technical Essentials
            </div>
            <div><span className="font-medium text-stone-800">2025</span></div>
          </li>
          <li>
            <div className="font-serif text-xl font-medium text-stone-950 tracking-tight mb-0.5">
              Rajya Puraskar
            </div>
            <div>Bharat Scouts and Guides</div>
          </li>
        </ul>
      </motion.section>

      {/* ── OTHER ─────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.36 }}
        className="flex flex-col gap-6 py-8 border-t border-stone-100"
      >
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
          <h2 className="font-['Mudstone',sans-serif] text-2xl sm:text-3xl font-black tracking-tight text-stone-950">
            Other
          </h2>
        </div>
        <div className="text-[15px] leading-relaxed text-stone-600">
          <div className="font-serif text-xl font-medium text-stone-950 tracking-tight mb-0.5">Fury Arts</div>
          <div>A custom posters and digital art side business I ran from 2022 to 2023.</div>
        </div>
      </motion.section>

      {/* ── BIG NAME FOOTER ───────────────────────────────────── */}
      {/* Blue blob wave + giant "Hrithik" below it */}
      <div className="relative mt-20 overflow-hidden">
        {/* Blue blob */}
        <div className="w-full flex justify-center" aria-hidden>
          <svg
            viewBox="0 0 800 300"
            className="w-full max-w-4xl"
            preserveAspectRatio="xMidYMax meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 300 C80 180, 200 80, 400 120 C600 160, 700 60, 800 20 L800 300 Z"
              fill="#1E50FF"
            />
          </svg>
        </div>

        {/* Giant name */}
        <div className="bg-white pb-8 pt-0 flex justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="font-['Mudstone',sans-serif] font-black leading-none tracking-tight text-stone-950 select-none"
            style={{ fontSize: 'clamp(4.5rem, 18vw, 12rem)' }}
          >
            Hrithik
          </motion.h2>
        </div>
      </div>

    </div>
  );
}
