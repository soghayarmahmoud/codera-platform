"use client";
import React, { useState } from 'react';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiPython, DiJava, DiDatabase, DiAngularSimple, DiRuby, DiPhp } from 'react-icons/di';
import { SiTypescript, SiCplusplus, SiVuedotjs } from 'react-icons/si';

// قائمة اللغات، يمكنك استبدال الأيقونات النصية بأيقونات SVG أو react-icons
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

/**
 * ملاحظة: ستحتاج إلى إضافة هذه الألوان المخصصة إلى ملف
 * tailwind.config.js
 * الخاص بك ليتطابق مع التصميم تماماً
 * * module.exports = {
 * theme: {
 * extend: {
 * colors: {
 * 'brand-dark': '#1e2024',
 * 'brand-light': '#2a2d31',
 * 'brand-input': '#3a3d41',
 * },
 * },
 * },
 * }
 * * في هذا المثال، سأستخدم ألوان Tailwind المدمجة 
 * الأقرب لها (مثل bg-neutral-800, bg-neutral-700) 
 * ليعمل الكود مباشرة.
 */

function Header({ selectedTech, onTechSelect }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      {/* 1. الـ Navbar العلوي */}
      <nav className="flex items-center justify-between p-4 border-b border-zinc-800">
        
        {/* Nav Left: Logo & Search */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-2xl font-bold text-white">
            <span role="img" aria-label="logo">💠</span>
            <span>Codera</span>
          </div>
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
              className="bg-zinc-800 border border-zinc-700 rounded-md py-2 pl-10 pr-4 w-72 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Nav Middle: Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-white font-semibold">Learn</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Editor</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Problems</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Projects</a>
        </div>

        {/* Nav Right: Points & Profile */}
        <div className="flex items-center gap-4 ">
          <div className="flex items-center gap-2 bg-zinc-800 text-yellow-400 font-bold py-2 px-3 rounded-lg border border-zinc-700">
            <span role="img" aria-label="points">⭐</span>
            <span>1450</span>
          </div>
          <div className="w-10 h-10 bg-zinc-800 rounded-full border-2 border-zinc-700 hover:border-blue-500 transition-colors cursor-pointer">
            <img 
              src="https://i.pravatar.cc/40" 
              alt="Profile" 
              className="rounded-full w-full h-full object-cover" />
          </div>
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
            <a href="#" className="text-white font-semibold w-full pb-2 border-b border-zinc-800">Learn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors w-full pb-2 border-b border-zinc-800">Editor</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors w-full pb-2 border-b border-zinc-800">Problems</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors w-full pb-2">Projects</a>
            
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
                className="bg-zinc-800 border border-zinc-700 rounded-md py-2 pl-10 pr-4 w-full text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. شريط فلترة اللغات (Scrollable) */}
      {/* The 'relative' class is added to the container to position the fading pseudo-elements */}
      <div className="bg-zinc-800/50 p-3">
        {/* هذا هو الجزء الأهم لجعل الشريط قابلاً للتمرير:
          - 'flex': يجعل العناصر أفقية
          - 'overflow-x-auto': يضيف شريط تمرير أفقي عند الحاجة
          - 'gap-3': يضيف مسافة بين الأزرار
          - 'pb-2': يضيف مسافة سفلية لشريط التمرير
          - 'scrollbar-thin scrollbar-thumb-neutral-500 scrollbar-track-neutral-700': 
            هذه الكلاسات لتنسيق شريط التمرير (تحتاج إلى `tailwind-scrollbar`)
        */}
        <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-800/50">
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
                whitespace-nowrap  /* <-- هذا الكلاس مهم جداً ليمنع كسر السطر داخل الزر */
                ${selectedTech === tech.name 
                  ? 'bg-blue-500 text-white border-blue-500 font-semibold shadow-md shadow-blue-500/20' /* << ستايل الزر النشط */
                  : 'bg-zinc-700 text-gray-300 border-zinc-600 hover:bg-zinc-600 hover:border-zinc-500' /* ستايل الزر العادي */
                }
              `}
            >
              <tech.Icon className="w-5 h-5" />
              <span>{tech.name}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;