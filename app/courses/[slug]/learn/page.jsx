"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCourseBySlug, LESSONS } from '../../../data/coursesData';

export default function LearnPage({ params }) {
  const { slug } = params;
  const course = getCourseBySlug(slug);
  const lessons = LESSONS[slug] || [];
  const [active, setActive] = useState(lessons[0]?.id || null);

  if (!course) return <div className="p-8 text-white">Course not found</div>;

  const activeLesson = lessons.find(l => l.id === active) || lessons[0];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-6">
          <img src={course.imageUrl} alt={course.title} className="w-14 h-14 rounded-md object-cover" />
          <div>
            <h1 className="text-2xl font-bold text-white">{course.title}</h1>
            <p className="text-gray-400">{course.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="md:col-span-1 bg-zinc-800 rounded-lg p-4 border border-zinc-700">
            <h3 className="text-white font-semibold mb-3">Course Modules</h3>
            <ul className="space-y-2">
              {lessons.map(l => (
                <li key={l.id}>
                  <button onClick={() => setActive(l.id)} className={`w-full text-left p-2 rounded-md ${active === l.id ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-zinc-700'}`}>
                    {l.title}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <section className="md:col-span-3 bg-zinc-800 rounded-lg p-6 border border-zinc-700">
            <h2 className="text-xl font-bold text-white mb-4">{activeLesson?.title}</h2>
            <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: activeLesson?.content || '<p>No content yet</p>' }} />

            <div className="mt-8 flex gap-3">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white">Previous</button>
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md text-white">Next</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
