"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { FaSearch, FaBook, FaChevronRight } from 'react-icons/fa';
import { docsData, getDocsCategories, getDocsByCategory } from '../data/docsData';

export default function DocsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = getDocsCategories();

  const filteredDocs = useMemo(() => {
    let docs = getDocsByCategory(selectedCategory);
    
    if (!searchTerm) {
      return docs;
    }

    return docs.filter(doc =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-zinc-900 min-h-screen text-gray-300">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-zinc-900 to-zinc-900 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <FaBook className="h-8 w-8 text-blue-400" />
            <span className="text-blue-400 font-semibold">Documentation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Learn How to Use Codera
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Complete guides and documentation to help you master the Codera platform and improve your programming skills.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-8 max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}
              className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                selectedCategory === 'All'
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-zinc-800 border-zinc-700 text-gray-400 hover:border-zinc-600 hover:text-gray-300'
              }`}
            >
              All Topics
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setSearchTerm('');
                }}
                className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-zinc-800 border-zinc-700 text-gray-400 hover:border-zinc-600 hover:text-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Documentation Grid */}
        {filteredDocs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocs.map((doc) => (
              <Link
                key={doc.id}
                href={`/docs/${doc.slug}`}
                className="group bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="h-10 w-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <FaBook className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                    {doc.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {doc.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{doc.excerpt}</p>
                <div className="flex items-center gap-2 text-blue-500 text-sm font-medium">
                  Read More
                  <FaChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-zinc-800/50 rounded-lg border border-zinc-700">
            <FaBook className="h-12 w-12 text-gray-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-2">No documentation found</h2>
            <p className="text-gray-400">Try adjusting your search or filters.</p>
          </div>
        )}

        {/* Quick Start Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600/10 to-blue-400/10 border border-blue-500/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Start Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/docs/getting-started"
              className="bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700 hover:border-blue-500/50 rounded-lg p-6 transition-all"
            >
              <h3 className="text-lg font-semibold text-white mb-2">🚀 Getting Started</h3>
              <p className="text-gray-400 text-sm mb-3">Begin your learning journey on Codera with this comprehensive guide.</p>
              <span className="text-blue-500 text-sm font-medium">Start learning →</span>
            </Link>
            <Link
              href="/docs/using-editor"
              className="bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700 hover:border-blue-500/50 rounded-lg p-6 transition-all"
            >
              <h3 className="text-lg font-semibold text-white mb-2">💻 Using the Editor</h3>
              <p className="text-gray-400 text-sm mb-3">Master the powerful Codera code editor and its features.</p>
              <span className="text-blue-500 text-sm font-medium">Learn more →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
