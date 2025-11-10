// يجب أن يكون "use client" إذا كنت ستستخدم حالة الفلترة من الهيدر
"use client";
import React, { useState } from 'react';

import Header from "./components/header.jsx";
import CourseCard from "./components/CourseCard.jsx";
import ProgressSummary from "./components/ProgressSummary.jsx";

// 1. بيانات الكورسات التجريبية (DUMMY DATA)
// (في المستقبل ستأتي هذه البيانات من API)
const DUMMY_COURSES = [
  {
    id: 1,
    title: "HTML Fundamentals",
    description: "Learn the basics of HTML and web structure",
    icon: "📄",
    gradientFrom: "from-orange-500",
    gradientTo: "to-yellow-400",
    points: 200,
    level: "Beginner",
    totalLessons: 12,
    completedLessons: 12,
    status: "completed",
    tech: "HTML" // للفلترة
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Master CSS for beautiful web designs",
    icon: "🎨",
    gradientFrom: "from-blue-500",
    gradientTo: "to-cyan-400",
    points: 250,
    level: "Beginner",
    totalLessons: 15,
    completedLessons: 8,
    status: "in-progress",
    tech: "CSS"
  },
  {
    id: 3,
    title: "JavaScript Basics",
    description: "Introduction to JavaScript programming",
    icon: "⚡",
    gradientFrom: "from-yellow-500",
    gradientTo: "to-orange-400",
    points: 300,
    level: "Beginner",
    totalLessons: 20,
    completedLessons: 5,
    status: "in-progress",
    tech: "JavaScript"
  },
  {
    id: 4,
    title: "React Framework",
    description: "Build modern web apps with React",
    icon: "⚛️",
    gradientFrom: "from-blue-600",
    gradientTo: "to-purple-500",
    points: 500,
    level: "Intermediate",
    totalLessons: 25,
    completedLessons: 0,
    status: "not-started",
    tech: "React"
  },
  {
    id: 5,
    title: "TypeScript",
    description: "Add type safety to your JavaScript",
    icon: "📘",
    gradientFrom: "from-blue-700",
    gradientTo: "to-blue-500",
    points: 400,
    level: "Intermediate",
    totalLessons: 18,
    completedLessons: 0,
    status: "not-started",
    tech: "TypeScript"
  },
  {
    id: 6,
    title: "Node.js Backend",
    description: "Build server-side applications",
    icon: "🟢",
    gradientFrom: "from-green-600",
    gradientTo: "to-emerald-500",
    points: 450,
    level: "Intermediate",
    totalLessons: 22,
    completedLessons: 0,
    status: "locked",
    tech: "Node.js"
  }
];

// بيانات شريط التقدم العلوي
const DUMMY_PROGRESS = {
  totalCompleted: 25, // (12 + 8 + 5)
  totalLessons: 182,  // مجموع كل الدروس
};


export default function Home() {
  // 2. حالة الفلترة (التي سنربطها بالهيدر لاحقاً)
  const [selectedTech, setSelectedTech] = useState('All'); // 'All' كقيمة افتراضية

  // 3. فلترة الكورسات بناءً على الحالة
  const filteredCourses = DUMMY_COURSES.filter(course => {
    if (selectedTech === 'All') return true; // أظهر الكل
    return course.tech === selectedTech;
  });

  return (
    <main className="bg-neutral-900 min-h-screen text-white">
      {/* تمرير الحالة والدالة إلى الهيدر
        هكذا يتم ربط الهيدر بالصفحة
      */}
      <Header 
        selectedTech={selectedTech} 
        onTechSelect={setSelectedTech} 
      />

      {/* 4. عرض المحتوى */}
      <div className="p-8 max-w-7xl mx-auto">
        {/* قسم التقدم العام */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Learning Paths</h2>
          <p className="text-neutral-400 mb-6">Master programming with structured courses</p>
          <ProgressSummary 
            totalCompleted={DUMMY_PROGRESS.totalCompleted}
            totalLessons={DUMMY_PROGRESS.totalLessons}
          />
        </section>

        {/* قسم الكورسات (يستخدم Grid) */}
        <section>
          {/* Grid:
            - grid-cols-1: عمود واحد في الموبايل
            - md:grid-cols-2: عمودين في الشاشات المتوسطة
            - lg:grid-cols-3: 3 أعمدة في الشاشات الكبيرة
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 5. استخدام .map لعرض الكورسات المفلترة */}
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}