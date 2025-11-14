"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/AuthProvider';

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    if (typeof window !== 'undefined') router.push('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-300 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-zinc-800 rounded-2xl p-8 border border-zinc-700 shadow-lg">
          <div className="flex items-center gap-6">
            <img src={`https://i.pravatar.cc/120?u=${user.email}`} alt={user.name} className="w-24 h-24 rounded-full border-2 border-zinc-700" />
            <div>
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              <p className="text-gray-400">{user.email}</p>
              <p className="text-sm text-gray-400 mt-2">Last seen: {new Date(user.lastSeen).toLocaleString()}</p>
            </div>
            <div className="ml-auto text-right">
              <div className="inline-flex items-center gap-2 bg-zinc-900/60 px-3 py-2 rounded-full border border-zinc-700">
                <span className="text-yellow-400 font-bold text-lg">⭐</span>
                <span className="font-semibold text-white">{user.stars ?? 0}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
              <h3 className="text-sm text-gray-400">Solved Problems</h3>
              <p className="text-2xl font-bold text-white">{user.solvedProblems ?? 0}</p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
              <h3 className="text-sm text-gray-400">Enrolled Courses</h3>
              <p className="text-2xl font-bold text-white">{(user.enrolledCourses || []).length}</p>
              {(user.enrolledCourses || []).map(c => (
                <div key={c.slug} className="mt-3 flex items-center gap-3">
                  <img src={c.imageUrl} alt={c.title} className="w-12 h-12 rounded-md object-cover" />
                  <div>
                    <div className="text-white font-semibold">{c.title}</div>
                    <div className="text-sm text-gray-400">Progress: {c.progress ?? 0}%</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
              <h3 className="text-sm text-gray-400">Achievements</h3>
              <p className="text-white">{(user.achievements || []).length} awards</p>
              <div className="mt-3 flex gap-2">
                {(user.achievements || []).map((a, i) => (
                  <div key={i} className="bg-zinc-800 p-2 rounded-md text-sm text-gray-200">{a}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-white font-semibold mb-3">Recent Activity</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Last login: {new Date(user.lastSeen).toLocaleString()}</li>
              <li>Stars: {user.stars ?? 0}</li>
              <li>Solved problems: {user.solvedProblems ?? 0}</li>
            </ul>
          </div>

          <div className="mt-8 flex gap-3">
            <button onClick={() => router.push('/')} className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-md text-white">Back to Home</button>
            <button onClick={() => { logout(); }} className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
