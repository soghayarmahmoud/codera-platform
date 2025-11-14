"use client";
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: 'What is Codera?',
    answer: 'Codera is an interactive learning platform designed to help you learn programming by doing. We offer a wide range of courses, coding problems, and real-world projects to build your skills from the ground up.'
  },
  {
    question: 'How do I start a course?',
    answer: 'Simply navigate to the "Learn" section from the header, browse our extensive course catalog, and click on the "Start Course" button for any unlocked course that interests you.'
  },
  {
    question: 'Can I use Codera for free?',
    answer: 'Yes, Codera offers a generous free tier with access to a selection of introductory courses and problems. For full access to all content and features, you can upgrade to our Pro plan.'
  },
  {
    question: 'How are points calculated?',
    answer: 'You earn points by completing lessons, solving problems, and finishing projects. The number of points awarded is based on the difficulty and complexity of the task.'
  },
  {
    question: 'What if I get stuck on a problem?',
    answer: 'Don\'t worry! Every problem comes with hints and a community discussion board. Pro members also get access to official solutions and video explanations for more complex challenges.'
  },
  {
    question: 'Can I reset my progress in a course?',
    answer: 'Currently, you can review completed courses, but resetting progress is not a feature. We believe in building on your knowledge, but we are considering this for future updates based on user feedback.'
  },
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-700 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-5 px-6 hover:bg-zinc-800/50 transition-colors duration-200"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <FaChevronDown
          className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`
          grid transition-all duration-500 ease-in-out
          ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
        `}
      >
        <div className="overflow-hidden">
          <p className="text-gray-400 pb-5 px-6">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function SupportPage() {

  return (
    <div className="bg-zinc-900 min-h-screen text-gray-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Support Center
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Have questions? We're here to help. Find answers to common questions or get in touch with our support team.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="bg-zinc-800 rounded-lg border border-zinc-700 shadow-lg overflow-hidden">
            {faqData.map((item, index) => (
              <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>

        {/* Contact Support Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Still Need Help?</h2>
          <div className="bg-zinc-800 rounded-lg border border-zinc-700 shadow-lg p-8 max-w-2xl mx-auto">
            <p className="text-center text-gray-400 mb-6">
              If you can't find the answer you're looking for, please don't hesitate to reach out to our support team.
            </p>
            <form>
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full bg-zinc-700 border border-zinc-600 rounded-md py-2.5 px-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="w-full bg-zinc-700 border border-zinc-600 rounded-md py-2.5 px-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Describe your issue or question in detail..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
