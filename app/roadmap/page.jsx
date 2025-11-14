"use client";

import React, { useState } from 'react';
import { ROADMAP_LIST } from '../../data/roadmaps';
import { FaArrowRight } from 'react-icons/fa';

export default function RoadmapPage() {
  const [active, setActive] = useState(ROADMAP_LIST[0].id);

  const current = ROADMAP_LIST.find(r => r.id === active) || ROADMAP_LIST[0];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white">Learning Roadmaps</h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Curated step-by-step roadmaps to help you reach your development goals faster.</p>
        </header>

        <div className="grid md:grid-cols-4 gap-6">
          <aside className="md:col-span-1 bg-zinc-800 p-4 rounded-lg border border-zinc-700 shadow-lg">
            <h3 className="text-lg font-semibold text-white mb-3">Tracks</h3>
            <div className="flex flex-col gap-2">
              {ROADMAP_LIST.map(track => (
                <button
                  key={track.id}
                  onClick={() => setActive(track.id)}
                  className={`text-left px-4 py-3 rounded-md transition-all duration-200 transform ${active === track.id ? 'bg-blue-600 text-white scale-100 shadow-md' : 'bg-zinc-700 text-gray-300 hover:scale-101 hover:bg-zinc-600'}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">{track.title}</div>
                      <div className="text-xs text-gray-400">{track.description}</div>
                    </div>
                    <FaArrowRight className={`ml-2 transition-transform ${active === track.id ? 'text-white' : 'text-gray-500'}`} />
                  </div>
                </button>
              ))}
            </div>
          </aside>

          <main className="md:col-span-3">
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 shadow-xl">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">{current.title}</h2>
                  <p className="text-gray-400 mb-4">{current.description}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                {current.steps.map(step => (
                  <div key={step.step} className="p-4 bg-zinc-900 border border-zinc-700 rounded-md hover:shadow-lg hover:translate-y-[-4px] transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">{step.step}</div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                          <span className="text-sm text-gray-400">{step.eta}</span>
                        </div>
                        <p className="text-gray-400 mt-1">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-right">
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-md shadow hover:scale-105 transition-transform">Start This Roadmap <FaArrowRight /></a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
