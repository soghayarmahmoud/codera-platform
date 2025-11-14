"use client";

import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { blogData } from '../../data';
import { useParams } from 'next/navigation';

export default function BlogDetailPage() {
  const params = useParams();
  const post = blogData.find(item => item.slug === params.slug);

  if (!post) {
    return (
      <div className="bg-zinc-900 min-h-screen text-gray-300 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Blog Post Not Found</h1>
          <p className="text-gray-400 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <FaArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts
  const relatedPosts = blogData.filter(item => item.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-zinc-900 min-h-screen text-gray-300">
      {/* Hero with Image */}
      <div className="relative h-96 bg-gradient-to-br from-blue-600 to-zinc-900 overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <div className="max-w-4xl mx-auto w-full">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6 transition-colors"
            >
              <FaArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-400">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-zinc-800 rounded-lg border border-zinc-700 p-8 md:p-12 mb-12">
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-zinc-700">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://i.pravatar.cc/80"
                alt={post.author}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold text-white">{post.author}</p>
                <p className="text-gray-400 text-sm">Published on {post.date}</p>
              </div>
            </div>

            <p className="text-gray-400 mb-6">
              Share this article with your network or save it for later reading.
            </p>

            <div className="flex gap-3">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">
                Share
              </button>
              <button className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-colors text-sm font-medium">
                Save
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <img
                    src={relatedPost.imageUrl}
                    alt={relatedPost.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-2 hover:text-blue-400 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{relatedPost.author}</span>
                      <span>{relatedPost.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
