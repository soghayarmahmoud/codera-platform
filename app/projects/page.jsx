"use client";
import React from 'react';

const FAKE_PROJECTS = [
  { id: 1, title: 'Portfolio Website', description: 'Build a personal portfolio website using React and Tailwind CSS.' },
  { id: 2, title: 'Chat App', description: 'Create a real-time chat application using Node.js and Socket.io.' },
  { id: 3, title: 'Blog Platform', description: 'Develop a full-stack blog platform with authentication and CRUD features.' },
  { id: 4, title: 'Weather Dashboard', description: 'Fetch and display weather data from a public API.' },
  { id: 5, title: 'Task Manager', description: 'Build a task management app with drag-and-drop and persistence.' }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-gray-300 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-white mb-8">Projects</h1>
        <div className="grid gap-6">
          {FAKE_PROJECTS.map(p => (
            <div key={p.id} className="p-6 rounded-lg border border-zinc-700 bg-zinc-800 hover:border-blue-500 transition-all">
              <h2 className="text-lg font-semibold text-white mb-2">{p.title}</h2>
              <p className="text-gray-400">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
