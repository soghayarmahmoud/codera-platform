"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from './AuthProvider';
import Link from 'next/link';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiPython, DiJava, DiDatabase, DiAngularSimple, DiRuby, DiPhp } from 'react-icons/di';
import { SiTypescript, SiCplusplus, SiVuedotjs } from 'react-icons/si';

const technologies = [
  { name: 'HTML', Icon: DiHtml5 },
  { name: 'CSS', Icon: DiCss3 },
  { name: 'JavaScript', Icon: DiJavascript1 },
  { name: 'React', Icon: DiReact },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'Node.js', Icon: DiNodejsSmall },
  { name: 'Python', Icon: DiPython },
  { name: 'Java', Icon: DiJava },
  { name: 'C++', Icon: SiCplusplus },
  { name: 'SQL', Icon: DiDatabase },
  { name: 'Angular', Icon: DiAngularSimple },
  { name: 'Vue.js', Icon: SiVuedotjs },
  { name: 'PHP', Icon: DiPhp },
  { name: 'Ruby', Icon: DiRuby },
];

import { useFilter } from './FilterProvider';

function Header({ selectedTech: _selectedTechProp = 'All', onTechSelect: _onTechSelectProp = () => {}, searchTerm: _searchProp, onSearchChange: _onSearchChangeProp }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // prefer context values when available
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
    // Use Next.js hook for pathname if available
    let currentPath = '';
    try {
      currentPath = usePathname();
    } catch (e) {
      currentPath = pathname;
    }
  let selectedTech, onTechSelect, searchTerm, onSearchChange;
  try {
    const filter = useFilter();
    selectedTech = filter.selectedTech;
    onTechSelect = (tech) => filter.setSelectedTech(tech);
    searchTerm = filter.searchTerm;
    onSearchChange = (v) => filter.setSearchTerm(v);
  } catch (e) {
    // fallback to props
    selectedTech = _selectedTechProp;
    onTechSelect = _onTechSelectProp;
    searchTerm = _searchProp;
    onSearchChange = _onSearchChangeProp;
  }

  // Handle clicking on a technology filter.
  // If the same filter is clicked again, it will show all courses.
  const handleTechClick = (techName) => {
    if (selectedTech === techName) {
      onTechSelect('All');
    } else {
      onTechSelect(techName);
    }
  };

  return (
    <header className="bg-zinc-900 text-gray-300 shadow-lg">
      <nav className="flex items-center justify-between p-4 border-b border-zinc-800">
        
        {/* Nav Left: Logo & Search */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white">
            <img src="/images/logo.png" alt="Codera Logo" className="h-8 w-auto" />
            <span className="hidden sm:inline">Codera</span>
          </Link>
          <div className="relative hidden md:block">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
            <input 
              type="text" 
              placeholder="Search courses, problems..."
              value={searchTerm}
              onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 rounded-md py-2 pl-10 pr-4 w-72 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Nav Middle: Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={currentPath === '/' ? "text-white font-semibold" : "text-gray-400 hover:text-white transition-colors"}>Learn</Link>
          <Link href="/editor" className={currentPath.startsWith('/editor') ? "text-white font-semibold" : "text-gray-400 hover:text-white transition-colors"}>Editor</Link>
          <Link href="/problems" className={currentPath.startsWith('/problems') ? "text-white font-semibold" : "text-gray-400 hover:text-white transition-colors"}>Problems</Link>
          <Link href="/projects" className={currentPath.startsWith('/projects') ? "text-white font-semibold" : "text-gray-400 hover:text-white transition-colors"}>Projects</Link>
          <Link href="/blog" className={currentPath.startsWith('/blog') ? "text-white font-semibold" : "text-gray-400 hover:text-white transition-colors"}>Blog</Link>
          <Link href="/support" className={currentPath.startsWith('/support') ? "text-white font-semibold" : "text-gray-400 hover:text-white transition-colors"}>Support</Link>
        </div>

        {/* Nav Right: Points & Profile */}
        <div className="flex items-center gap-4 ">
          {/* auth-aware area */}
          {/* Auth area component */}
          <AuthArea />
          {/* Hamburger Menu Button */}
          <button 
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-4 6h4" /></svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="flex flex-col items-start p-4 space-y-4">
            <Link href="#" className="text-white font-semibold w-full pb-2 border-b border-zinc-800">Learn</Link>
            <Link href="/editor" className="text-gray-400 hover:text-white transition-colors w-full pb-2 border-b border-zinc-800">Editor</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors w-full pb-2 border-b border-zinc-800">Problems</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors w-full pb-2 border-b border-zinc-800">Projects</Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors w-full pb-2 border-b border-zinc-800">Blog</Link>
            <Link href="/support" className="text-gray-400 hover:text-white transition-colors w-full pb-2">Support</Link>

            {/* Auth links for mobile */}
            <div className="w-full border-t border-zinc-800 mt-2 pt-3">
              <AuthMobileArea />
            </div>
            
            <div className="relative w-full pt-4">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 mt-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
              <input 
                type="text" 
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="bg-zinc-800 border border-zinc-700 rounded-md py-2 pl-10 pr-4 w-full text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
          </div>
        </div>
      )}

      {/* Show tech tags only on home page */}
      {currentPath === '/' && (
        <div className="bg-zinc-800/50 p-3">
          {onTechSelect && onTechSelect !== Header.defaultProps.onTechSelect && <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-thin scrollbar-thumb-blue-600 hover:scrollbar-thumb-blue-500 scrollbar-track-zinc-800">
          {/* "All" button to clear the filter */}
          <button
            onClick={() => onTechSelect('All')}
            className={`
              flex items-center gap-2 py-1.5 px-4 rounded-md border 
              transition-all duration-200
              whitespace-nowrap
              ${selectedTech === 'All' 
                ? 'bg-blue-500 text-white border-blue-500 font-semibold shadow-md shadow-blue-500/20' 
                : 'bg-zinc-700 text-gray-300 border-zinc-600 hover:bg-zinc-600 hover:border-zinc-500'
              }
            `}
          >
            All
          </button>
          {technologies.map((tech) => (
            <button
              key={tech.name}
              onClick={() => handleTechClick(tech.name)}
              className={`
                flex items-center gap-2 py-1.5 px-3 rounded-md border 
                transition-all duration-200
                whitespace-nowrap
                ${selectedTech === tech.name 
                  ? 'bg-blue-500 text-white border-blue-500 font-semibold shadow-md shadow-blue-500/20'
                  : 'bg-zinc-700 text-gray-300 border-zinc-600 hover:bg-zinc-600 hover:border-zinc-500'
                }
              `}
            >
              <tech.Icon className="w-5 h-5" />
              <span>{tech.name}</span>
            </button>
          ))}
          </div>}
        </div>
      )}
    </header>
  );
}

Header.defaultProps = {
  onTechSelect: () => {},
};

function AuthArea() {
  const { user, logout } = useAuth();

  if (user) {
    return (
      <>
        <div className="hidden sm:flex items-center gap-2 bg-zinc-800 text-yellow-400 font-bold py-2 px-3 rounded-lg border border-zinc-700">
          <span role="img" aria-label="points">⭐</span>
          <span>{user.stars ?? 0}</span>
        </div>
        <Link href="/profile" className="w-10 h-10 bg-zinc-800 rounded-full border-2 border-zinc-700 hover:border-blue-500 transition-colors inline-flex items-center justify-center">
          <img src={`https://i.pravatar.cc/40?u=${user.email}`} alt={user.name} className="rounded-full w-full h-full object-cover" />
        </Link>
      </>
    );
  }

  return (
    <>
      <div className="hidden sm:flex items-center gap-2">
        <Link href="/login" className="bg-blue-600 text-white px-3 py-2 rounded-md font-semibold">Login</Link>
        <Link href="/signup" className="bg-transparent border border-zinc-700 text-white px-3 py-2 rounded-md ml-2">Sign Up</Link>
      </div>
      <Link href="/login" className="w-10 h-10 bg-zinc-800 rounded-full border-2 border-zinc-700 hover:border-blue-500 transition-colors cursor-pointer flex items-center justify-center">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14v7" /></svg>
      </Link>
    </>
  );
}

function AuthMobileArea() {
  const { user, logout } = useAuth();
  if (user) {
    return (
      <div className="flex flex-col w-full">
        <Link href="/profile" className="text-white py-2">Profile</Link>
        <button onClick={() => logout()} className="text-left text-red-500 py-2">Logout</button>
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full">
      <Link href="/login" className="text-white py-2">Login</Link>
      <Link href="/signup" className="text-white py-2">Sign Up</Link>
    </div>
  );
}

export default Header;