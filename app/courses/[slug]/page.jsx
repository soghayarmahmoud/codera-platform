"use client";

import React, { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { getCourseBySlug } from '../../data/coursesData';
import { useAuth } from '../../components/AuthProvider';

export default function CoursePage({ params }) {
  const { slug } = use(params);
  const course = getCourseBySlug(slug);
  const { user, updateUser } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  if (!course) return <div className="p-8">Course not found</div>;

  const handleEnroll = async () => {
    if (!user) { router.push('/login'); return; }
    setLoading(true);
    try {
      const res = await fetch('/api/user/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email, course })
      });
      if (!res.ok) throw new Error('Enroll failed');
      const updated = await res.json();
      updateUser(updated);
      router.push('/profile');
    } catch (err) {
      console.error(err);
      alert(err.message || 'Failed');
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-300 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-start gap-6">
          <img src={course.imageUrl} alt={course.title} className="w-28 h-28 rounded-lg object-cover" />
          <div>
            <h1 className="text-3xl font-bold text-white">{course.title}</h1>
            <p className="text-gray-400 mt-2">{course.description}</p>
            <div className="mt-4 flex items-center gap-3">
              <span className="bg-zinc-800 px-3 py-1 rounded-md">{course.level}</span>
              <span className="text-yellow-400 font-semibold">⭐ {course.points}</span>
            </div>
          </div>
          <div className="ml-auto">
            <button onClick={handleEnroll} disabled={loading} className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white font-semibold">{loading ? 'Enrolling...' : 'Enroll'}</button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="md:col-span-1 bg-zinc-800 p-4 rounded-lg border border-zinc-700">
            <h4 className="text-white font-semibold mb-3">Contents</h4>
            <ul className="text-gray-400 space-y-2">
              <li>Introduction</li>
              <li>Basics</li>
              <li>Practice</li>
              <li>Project</li>
            </ul>
          </aside>
          <section className="md:col-span-3 bg-zinc-800 p-6 rounded-lg border border-zinc-700">
            <h3 className="text-xl font-semibold text-white mb-4">Course Overview</h3>
            <p className="text-gray-400">This course contains lessons and interactive examples. It mimics a W3Schools-like layout where lessons appear in the sidebar and content on the right.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
