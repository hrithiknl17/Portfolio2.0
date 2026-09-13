import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data';

export function Work() {
  return (
    <div className="flex flex-col gap-10 sm:gap-12 pt-4 sm:pt-8">
      <header>
        <h1 className="font-['Mudstone',sans-serif] text-[2.5rem] sm:text-[3rem] font-black text-stone-950 tracking-tight">
          Selected Work
        </h1>
        <p className="mt-4 text-stone-700 font-medium max-w-xl text-[15px] leading-relaxed">
          The things I've built. From automated email infrastructure to personal finance trackers.
        </p>
      </header>

      <section>
        <div className="flex flex-col gap-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} index={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
