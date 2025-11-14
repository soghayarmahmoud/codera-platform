"use client";
import React, { useState } from 'react';

const FAKE_PROBLEMS = [
  { id: 1, title: 'Two Sum', difficulty: 'Easy', description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.' },
  { id: 2, title: 'Reverse String', difficulty: 'Easy', description: 'Write a function that reverses a string.' },
  { id: 3, title: 'Valid Parentheses', difficulty: 'Medium', description: 'Given a string containing just the characters (), {}, and [], determine if the input string is valid.' },
  { id: 4, title: 'Merge Intervals', difficulty: 'Medium', description: 'Given a collection of intervals, merge all overlapping intervals.' },
  { id: 5, title: 'LRU Cache', difficulty: 'Hard', description: 'Design and implement a data structure for Least Recently Used (LRU) cache.' }
];

export default function ProblemsPage() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="min-h-screen bg-zinc-900 text-gray-300 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-white mb-8">Problems</h1>
        <div className="grid gap-4 mb-8">
          {FAKE_PROBLEMS.map(p => (
            <div key={p.id} className={`p-5 rounded-lg border border-zinc-700 bg-zinc-800 cursor-pointer hover:border-blue-500 transition-all ${selected===p.id?'ring-2 ring-blue-500':''}`} onClick={()=>setSelected(p.id)}>
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-white">{p.title}</h2>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${p.difficulty==='Easy'?'bg-green-700 text-green-200':p.difficulty==='Medium'?'bg-yellow-700 text-yellow-200':'bg-red-700 text-red-200'}`}>{p.difficulty}</span>
              </div>
              <p className="text-gray-400 mt-2">{p.description}</p>
            </div>
          ))}
        </div>
        {selected && (
          <div className="bg-zinc-800 border border-blue-500 rounded-lg p-6 mt-8 animate-fade-in">
            <h2 className="text-xl font-bold text-white mb-2">{FAKE_PROBLEMS.find(p=>p.id===selected).title}</h2>
            <p className="text-gray-400 mb-4">{FAKE_PROBLEMS.find(p=>p.id===selected).description}</p>
            <textarea className="w-full h-40 bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white font-mono mb-4" placeholder="Write your solution here..." />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold transition-all">Submit</button>
            <button className="ml-4 text-gray-400 hover:text-white underline" onClick={()=>setSelected(null)}>Back to list</button>
          </div>
        )}
      </div>
    </div>
  );
}
