import React from 'react';
import Link from 'next/link';

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-gray-300 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white">Careers at Codera</h1>
          <p className="text-gray-400 mt-3">Join us to build tools that empower learners around the world.</p>
        </div>

        <section className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 mb-8 shadow-sm">
          <h2 className="text-2xl text-white font-semibold mb-2">Open Positions</h2>
          <p className="text-gray-400 mb-4">We’re growing. Check back often for new openings.</p>
          <ul className="space-y-3">
            <li className="bg-zinc-900 p-4 rounded-lg border border-zinc-700">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-white">Frontend Engineer</h3>
                  <p className="text-gray-400 text-sm">Focus on building interactive UI and editor features.</p>
                </div>
                <Link href="#" className="text-sm bg-blue-600 px-3 py-2 rounded-md text-white">Apply</Link>
              </div>
            </li>
            <li className="bg-zinc-900 p-4 rounded-lg border border-zinc-700">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-white">Backend Engineer</h3>
                  <p className="text-gray-400 text-sm">Work on APIs, persistence and scalable systems.</p>
                </div>
                <Link href="#" className="text-sm bg-blue-600 px-3 py-2 rounded-md text-white">Apply</Link>
              </div>
            </li>
          </ul>
        </section>

        <section className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
          <h2 className="text-2xl text-white font-semibold mb-2">Why work with us?</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Flexible hours and remote-first culture</li>
            <li>Work on meaningful educational products</li>
            <li>Competitive compensation and growth opportunities</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
