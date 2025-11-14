"use client";

import React from 'react';
import BlogPostCard from '../BlogPostCard.jsx';
import { blogData } from '../data';

export default function BlogPage() {
  return (
    <div className="bg-zinc-900 min-h-screen text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Codera Blog & Docs
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Your source for programming tutorials, platform updates, and in-depth documentation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
