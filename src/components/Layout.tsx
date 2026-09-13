import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { motion } from 'motion/react';

export function Layout() {
  return (
    <div className="min-h-screen w-full bg-white overflow-x-clip">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex flex-col">
        <Navigation />
        <motion.main
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex-grow pb-20"
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
}
