"use client";

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/header';
import Footer from './components/Footer';
import AuthProvider from './components/AuthProvider';
import FilterProvider from './components/FilterProvider';

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  enter: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.2 }
  }
};

export default function ClientLayout({ children, languages }) {
  const pathname = usePathname();

  return (
    <AuthProvider><div className="min-h-screen flex flex-col">
      <FilterProvider>
        <Header languages={languages} />

        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={pathname}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            className="flex-1"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </motion.main>
        </AnimatePresence>

        <Footer languages={languages} />

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-50"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
        </button>
      </FilterProvider>
    </div></AuthProvider>
  );
}