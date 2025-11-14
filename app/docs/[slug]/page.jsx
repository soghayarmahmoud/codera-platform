"use client";

import React, { use } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaBook } from 'react-icons/fa';
import { docsData } from '../../data/docsData';

export default function DocDetailPage({ params }) {
  const { slug } = use(params);
  const doc = docsData.find(item => item.slug === slug);

  if (!doc) {
    return (
      <div className="bg-zinc-900 min-h-screen text-gray-300 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Documentation Not Found</h1>
          <p className="text-gray-400 mb-6">The documentation page you're looking for doesn't exist.</p>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <FaArrowLeft className="h-4 w-4" />
            Back to Documentation
          </Link>
        </div>
      </div>
    );
  }

  // Get related docs from the same category
  const relatedDocs = docsData.filter(
    item => item.category === doc.category && item.id !== doc.id
  ).slice(0, 3);

  return (
    <div className="bg-zinc-900 min-h-screen text-gray-300">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 via-zinc-900 to-zinc-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <FaArrowLeft className="h-4 w-4" />
            Back to Documentation
          </Link>
          <div className="flex items-start gap-4 mb-4">
            <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <FaBook className="h-6 w-6 text-blue-400" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                {doc.title}
              </h1>
              <p className="mt-2 text-gray-400">{doc.excerpt}</p>
            </div>
          </div>
          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
            {doc.category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <div className="bg-zinc-800 rounded-lg border border-zinc-700 p-8 md:p-12 mb-12">
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: doc.content }}
          />

          {/* Table of Contents */}
          <div className="mt-12 pt-8 border-t border-zinc-700">
            <h3 className="text-lg font-semibold text-white mb-4">On This Page</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Introduction
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Key Concepts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Examples
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Best Practices
                </a>
              </li>
            </ul>
          </div>

          {/* Helpful Feedback */}
          <div className="mt-12 pt-8 border-t border-zinc-700">
            <p className="text-gray-400 mb-4">Was this documentation helpful?</p>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-lg transition-colors text-sm font-medium">
                👍 Yes
              </button>
              <button className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-lg transition-colors text-sm font-medium">
                👎 No
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between mb-12">
          <Link
            href="/docs"
            className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white rounded-lg transition-colors text-sm font-medium text-center"
          >
            ← Back to Docs
          </Link>
          <Link
            href="/support"
            className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white rounded-lg transition-colors text-sm font-medium text-center"
          >
            Need Help? Visit Support →
          </Link>
        </div>

        {/* Related Documentation */}
        {relatedDocs.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Related Documentation</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedDocs.map((relatedDoc) => (
                <Link
                  key={relatedDoc.id}
                  href={`/docs/${relatedDoc.slug}`}
                  className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <div className="h-8 w-8 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                    <FaBook className="h-4 w-4 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 hover:text-blue-400 transition-colors">
                    {relatedDoc.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{relatedDoc.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
