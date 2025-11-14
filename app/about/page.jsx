import React from 'react';
import Link from 'next/link';
import { TEAM } from '../data/teamData';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white">About Codera</h1>
          <p className="text-gray-400 mt-3">We build learning tools that make programming accessible and fun.</p>
        </div>

        <section className="mb-12">
          <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700 shadow-md">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-400">Codera exists to help learners gain practical skills with hands-on lessons, an in-browser editor, and project-based learning.</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {TEAM.map(member => (
              <div key={member.id} className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 transform hover:-translate-y-2 transition-transform shadow-lg shadow-black/40">
                <div className="flex items-center gap-4 mb-4">
                  <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full object-cover border-2 border-zinc-700" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                    <p className="text-gray-400 text-sm">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{member.bio}</p>
                <div className="flex items-center gap-3">
                  <Link href={member.socials.twitter} className="text-gray-400 hover:text-white transition-colors"><FaTwitter /></Link>
                  <Link href={member.socials.github} className="text-gray-400 hover:text-white transition-colors"><FaGithub /></Link>
                  <Link href={member.socials.linkedin} className="text-gray-400 hover:text-white transition-colors"><FaLinkedin /></Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
