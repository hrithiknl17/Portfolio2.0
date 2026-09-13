import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function Navigation() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      
      const key = e.key.toLowerCase();
      if (key === 'h') navigate('/');
      if (key === 'w') navigate('/work');
      if (key === 'a') navigate('/about');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
    <nav className="py-6 sm:py-8 mb-6 sm:mb-10 flex items-center justify-between border-b border-stone-200">
      <NavLink 
        to="/" 
        className="flex items-center gap-3 font-['Mudstone',sans-serif] font-black text-xl sm:text-2xl tracking-[-0.02em] text-stone-950 hover:opacity-85 transition-opacity"
      >
        <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#1E50FF] via-[#00D2FF] to-[#60A5FA] shadow-md shadow-blue-500/40 shrink-0 animate-pulse" />
        <span className="tracking-tight">HRITHIK N L</span>
      </NavLink>

      <ul className="flex items-center space-x-6 sm:space-x-8 text-xs sm:text-sm font-sans font-bold tracking-wider uppercase">
        <li>
          <NavLink 
            to="/work" 
            className={({ isActive }) => cn(
              "transition-colors hover:text-[#1E50FF]",
              isActive ? "text-[#1E50FF]" : "text-stone-800"
            )}
          >
            WORK
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => cn(
              "transition-colors hover:text-[#1E50FF]",
              isActive ? "text-[#1E50FF]" : "text-stone-800"
            )}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <a
            href="/Resume_portoflio.pdf"
            download="Hrithik-N-L-Resume.pdf"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#1E50FF] via-[#2563EB] to-[#6366F1] hover:from-blue-700 hover:to-indigo-700 text-white font-sans font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            RESUME
          </a>
        </li>
      </ul>
    </nav>
  );
}
