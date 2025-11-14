// استخدم "use client" إذا كنت ستضيف أي تفاعل داخل الكارت
"use client"; 
import React from 'react';
import Link from "next/link";

import { FaClock, FaCheckCircle, FaLock, FaPlay, FaSync } from 'react-icons/fa';

const getLevelStyles = (level) => {
  switch (level.toLowerCase()) {
    case 'beginner':
      return 'bg-green-200 text-green-800';
    case 'intermediate':
      return 'bg-orange-200 text-orange-800';
    case 'advanced':
      return 'bg-red-200 text-red-800';
    default:
      return 'bg-gray-200 text-gray-800';
  }
};

// 2. المكون الأساسي للكارت
export default function CourseCard({ course }) {
  // استخراج البيانات من الـ prop
  const {
    title,
    description,
    icon,
    gradientFrom,
    gradientTo,
    points,
    level,
    totalLessons,
    completedLessons,
    status, // 'locked', 'completed', 'in-progress', 'not-started'
  } = course;

  // حساب نسبة التقدم
  const progressPercent = (completedLessons / totalLessons) * 100;

// import Link from "next/link";

    // 3. دالة لتحديد الزر المناسب
    const renderButton = () => {
    switch (status) {
      case 'locked':
        return (
          <button className="flex items-center justify-center gap-2 w-full py-3 bg-neutral-700 text-neutral-400 rounded-lg font-semibold cursor-not-allowed">
            <FaLock />
            Locked
          </button>
        );
      case 'completed':
        return (
          <button className="flex items-center justify-center gap-2 w-full py-3 bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 text-white rounded-lg font-semibold transition-colors">
            <FaSync />
            Review Course
          </button>
        );
      case 'in-progress':
        return (
          <Link href={`/courses/${course.slug}/learn`} className="block">
            <button className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors">
              <FaPlay />
              Continue
            </button>
          </Link>
        );
      default: // 'not-started'
        return (
          <Link href={`/courses/${course.slug}/learn`} className="block">
            <button className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors">
              <FaPlay />
              Start Course
            </button>
          </Link>
        );
    }
  };

  return (
    <div className="bg-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden flex flex-col">
      {/* 1. رأس الكارت (الصورة والأيقونات) */}
      <div 
        className={`relative h-40 flex items-center justify-center bg-gradient-to-r ${gradientFrom} ${gradientTo}`}
      >
        <span className="text-6xl text-white opacity-90">{icon}</span>
        
        {/* أيقونة القفل أو الاكتمال (تظهر فوق) */}
        {status === 'locked' && (
          <div className="absolute top-4 right-4 bg-black/30 text-white p-2 rounded-full">
            <FaLock />
          </div>
        )}
        {status === 'completed' && (
          <div className="absolute top-4 right-4 bg-white text-green-500 p-1.5 rounded-full">
            <FaCheckCircle size={20} />
          </div>
        )}
      </div>

      {/* 2. جسم الكارت (التفاصيل) */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span className="flex items-center gap-1 text-yellow-500 font-semibold">
            ⭐ {points}
          </span>
        </div>
        <p className="text-neutral-400 mb-4">{description}</p>
        
        {/* التاج الخاص بالمستوى */}
        <span 
          className={`text-xs font-bold px-3 py-1 rounded-full self-start ${getLevelStyles(level)}`}
        >
          {level}
        </span>

        {/* 3. شريط التقدم (Progress Bar) */}
        <div className="mt-auto pt-4"> {/* mt-auto لدفع هذا الجزء للأسفل */}
          <div className="flex justify-between items-center text-sm text-neutral-400 mb-2">
            <span className="flex items-center gap-2">
              <FaClock /> {totalLessons} lessons
            </span>
            <span>{completedLessons}/{totalLessons}</span>
          </div>
          
          {/* شريط التقدم الفعلي */}
          <div className="w-full bg-neutral-700 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* 4. الزر (Footer) */}
      <div className="p-5 border-t border-neutral-700">
        {renderButton()}
      </div>
    </div>
  );
}