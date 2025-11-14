"use client"

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function BlogPostCard({ post }) {
  const { slug, title, excerpt, imageUrl, author, date } = post;

  return (
    <Link href={`/blog/${slug}`} className="group block bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>By {author}</span>
          <span>{date}</span>
        </div>
        <div className="mt-4 flex items-center text-blue-500 font-semibold">
          Read More
          <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </Link>
  );
}