"use client";

import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { faqData } from '../../data/faqData';
import { useParams } from 'next/navigation';

export default function FAQDetailPage() {
  const params = useParams();
  const faq = faqData.find(item => item.slug === params.slug);

  if (!faq) {
    return (
      <div className="bg-zinc-900 min-h-screen text-gray-300 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-6">The support article you're looking for doesn't exist.</p>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <FaArrowLeft className="h-4 w-4" />
            Back to Support
          </Link>
        </div>
      </div>
    );
  }

  // Get related FAQs from the same category
  const relatedFaqs = faqData.filter(
    item => item.category === faq.category && item.id !== faq.id
  ).slice(0, 3);

  return (
    <div className="bg-zinc-900 min-h-screen text-gray-300">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 via-zinc-900 to-zinc-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/support"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <FaArrowLeft className="h-4 w-4" />
            Back to Support
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            {faq.title}
          </h1>
          <div className="flex items-center gap-4">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
              {faq.category}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-zinc-800 rounded-lg border border-zinc-700 p-8 md:p-12">
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: faq.content }}
          />

          {/* Helpful Actions */}
          <div className="mt-12 pt-8 border-t border-zinc-700">
            <p className="text-gray-400 mb-4">Was this article helpful?</p>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-lg transition-colors">
                👍 Yes
              </button>
              <button className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-lg transition-colors">
                👎 No
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedFaqs.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedFaqs.map((relatedFaq) => (
                <Link
                  key={relatedFaq.id}
                  href={`/support/${relatedFaq.slug}`}
                  className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 hover:text-blue-400 transition-colors">
                    {relatedFaq.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{relatedFaq.excerpt}</p>
                  <span className="text-blue-500 text-sm font-medium">Read more →</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Contact Support */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-blue-400/20 border border-blue-500/20 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Still Need Help?</h3>
          <p className="text-gray-400 mb-6">
            Can't find the answer you're looking for? Our support team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:support@codera.com"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
            >
              Contact Support
            </Link>
            <Link
              href="/docs"
              className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors font-medium border border-zinc-700"
            >
              Browse Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
