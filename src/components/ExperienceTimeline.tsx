import { detailedExperience } from '../data';
import { motion } from 'motion/react';

export function ExperienceTimeline() {
  return (
    <div className="flex flex-col">
      {detailedExperience.map((item, index) => (
        <motion.div 
          key={index} 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
          className="relative pl-12 sm:pl-16 pb-12 last:pb-0"
        >
          {/* Logo */}
          <div className={`absolute left-0 top-0.5 w-9 h-9 rounded-[12px] flex items-center justify-center font-sans font-semibold text-[14px] text-white shadow-sm ${item.logoColor}`}>
            {item.logoInitials}
          </div>

          {/* Thread */}
          {index !== detailedExperience.length - 1 && (
            <div className="absolute left-[17px] top-11 bottom-0 w-px border-l-[1.5px] border-dashed border-stone-300" />
          )}

          {/* Roles */}
          <div className="flex flex-col gap-10">
            {item.roles.map((role, roleIndex) => (
              <div key={roleIndex} className="flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                  <h3 className="text-[1.125rem] font-sans font-medium text-stone-950 tracking-tight">
                    {role.title}
                  </h3>
                  <span className="font-mono text-[13px] text-stone-500 shrink-0">
                    {role.date}
                  </span>
                </div>

                <div className="text-[14px] text-stone-600 mb-3 font-medium">
                  {item.company} {role.type && `· ${role.type}`}
                </div>

                {role.description && (
                  <p className="text-[15px] leading-relaxed text-stone-700">
                    {role.description}
                  </p>
                )}

                {role.tags && role.tags.length > 0 && (
                  <div className="text-[11px] font-sans tracking-widest uppercase text-stone-500 mt-4">
                    {role.tags.join(' · ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
