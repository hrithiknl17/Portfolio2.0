import { motion } from 'motion/react';
import { BrainCircuit, Code2, Database, Palette, Rocket, Server } from 'lucide-react';

const skills = [
  { title: 'Design', detail: 'Figma · FigJam · Framer · Adobe CC', summary: 'I design beautifully, with a sharp eye for detail and flow.', tags: ['Figma', 'FigJam', 'Framer'], icon: Palette, color: 'bg-[#7C3AED] text-white', detailColor: 'text-violet-100', iconColor: 'text-[#FDE68A]', tagColor: 'bg-white/20 text-white' },
  { title: 'Frontend', detail: 'React · TypeScript · Next.js · Vite', summary: 'Interfaces that feel clear, fast, and alive.', tags: ['React', 'TypeScript', 'Next.js'], icon: Code2, color: 'bg-[#1E50FF] text-white', detailColor: 'text-blue-100', iconColor: 'text-[#FFC700]', tagColor: 'bg-white/20 text-white' },
  { title: 'Backend', detail: 'Python · FastAPI · Express · APIs', summary: 'Reliable foundations for products that scale.', tags: ['Python', 'FastAPI', 'Express'], icon: Server, color: 'bg-[#FF5A36] text-white', detailColor: 'text-orange-100', iconColor: 'text-[#FFE28A]', tagColor: 'bg-white/20 text-white' },
  { title: 'AI systems', detail: 'RAG · agents · Gemini · Ollama', summary: 'Useful intelligence, grounded in real workflows.', tags: ['RAG', 'Agents', 'Gemini'], icon: BrainCircuit, color: 'bg-[#FFC700] text-stone-950', detailColor: 'text-stone-800', iconColor: 'text-[#1E50FF]', tagColor: 'bg-stone-950/10 text-stone-950' },
  { title: 'Data & infra', detail: 'Postgres · Supabase · Redis · Docker', summary: 'Data systems that stay organized under pressure.', tags: ['Postgres', 'Redis', 'Docker'], icon: Database, color: 'bg-[#14B87A] text-white', detailColor: 'text-emerald-50', iconColor: 'text-[#B9F7D9]', tagColor: 'bg-white/20 text-white' },
  { title: 'Shipping', detail: 'Vercel · Render · PWA · OAuth', summary: 'The last mile from working build to shipped product.', tags: ['Vercel', 'PWA', 'OAuth'], icon: Rocket, color: 'bg-[#F43F7A] text-white', detailColor: 'text-pink-100', iconColor: 'text-[#FFD1DF]', tagColor: 'bg-white/20 text-white' },
];

export function SkillsSection() {
  return (
    <section className="flex flex-col gap-8 border-t border-stone-100 py-8">
      <div>
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5A36]" />
          <h2 className="font-['Mudstone',sans-serif] text-2xl font-black tracking-tight text-stone-950 sm:text-3xl">
            What I bring
          </h2>
        </div>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-stone-600 sm:text-base">
          I design very well, pairing strong visual taste with clear, usable experiences, then build the systems that make them work.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.article
              key={skill.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
              className={`group flex min-h-[22rem] flex-col justify-between rounded-2xl p-5 shadow-[0_12px_30px_rgba(23,21,15,0.08)] transition-transform duration-300 hover:-translate-y-1 sm:p-6 ${skill.color}`}
            >
              <div className="flex items-start justify-between gap-4">
                <Icon className={`h-8 w-8 stroke-[1.8] ${skill.iconColor}`} aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">0{index + 1}</span>
              </div>
              <div>
                <h3 className="font-['Mudstone',sans-serif] text-2xl font-black tracking-[-0.025em]">{skill.title}</h3>
                <p className={`mt-2 text-sm font-semibold leading-relaxed ${skill.detailColor}`}>{skill.summary}</p>
                <p className={`mt-2 max-w-[24ch] text-sm font-medium leading-relaxed ${skill.detailColor}`}>{skill.detail}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {skill.tags.map((tag) => (
                    <span key={tag} className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${skill.tagColor}`}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
