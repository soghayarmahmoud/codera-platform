"use client";
import React, { useState } from 'react';
import Header from "../components/header.jsx";
import CourseCard from "../components/CourseCard.jsx";
import ProgressSummary from "../components/ProgressSummary.jsx";

export default function MainPageWrapper({ courses, progress }) {
  const [selectedTech, setSelectedTech] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course => {
    const techMatch = selectedTech === 'All' || course.tech === selectedTech;
    const searchMatch = searchTerm.trim() === '' ||
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return techMatch && searchMatch;
  });

  return (
    <>
      <main className="flex-grow w-full">
        <div className="p-8 max-w-7xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Learning Paths</h2>
            <p className="text-neutral-400 mb-6">Master programming with structured courses</p>
            <ProgressSummary
              totalCompleted={progress.totalCompleted}
              totalLessons={progress.totalLessons}
            />
          </section>
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}