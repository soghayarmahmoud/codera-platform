"use client";

import { blogData } from '../data';
import { faqData } from '../data/faqData';
import { docsData } from '../data/docsData';

export const useUnifiedSearch = (searchTerm) => {
  if (!searchTerm || searchTerm.trim() === '') {
    return {
      courses: [],
      faqs: [],
      docs: [],
      blogs: [],
      total: 0
    };
  }

  const lowercaseSearch = searchTerm.toLowerCase();

  // Search in courses/blog posts
  const courses = blogData.filter(post =>
    post.title.toLowerCase().includes(lowercaseSearch) ||
    post.excerpt.toLowerCase().includes(lowercaseSearch)
  ).map(post => ({
    ...post,
    type: 'course',
    href: `/blog/${post.slug}`
  }));

  // Search in FAQs
  const faqs = faqData.filter(faq =>
    faq.title.toLowerCase().includes(lowercaseSearch) ||
    faq.excerpt.toLowerCase().includes(lowercaseSearch) ||
    faq.category.toLowerCase().includes(lowercaseSearch)
  ).map(faq => ({
    ...faq,
    type: 'faq',
    href: `/support/${faq.slug}`
  }));

  // Search in documentation
  const docs = docsData.filter(doc =>
    doc.title.toLowerCase().includes(lowercaseSearch) ||
    doc.excerpt.toLowerCase().includes(lowercaseSearch) ||
    doc.category.toLowerCase().includes(lowercaseSearch)
  ).map(doc => ({
    ...doc,
    type: 'documentation',
    href: `/docs/${doc.slug}`
  }));

  // Keep blogs as separate category
  const blogs = blogData.filter(post =>
    post.title.toLowerCase().includes(lowercaseSearch) ||
    post.excerpt.toLowerCase().includes(lowercaseSearch)
  ).map(post => ({
    ...post,
    type: 'blog',
    href: `/blog/${post.slug}`
  }));

  return {
    courses,
    faqs,
    docs,
    blogs,
    total: courses.length + faqs.length + docs.length + blogs.length
  };
};

// Get all searchable items combined
export const getAllSearchableItems = () => {
  const items = [];

  blogData.forEach(post => {
    items.push({
      ...post,
      type: 'blog',
      href: `/blog/${post.slug}`,
      keywords: [post.title, post.excerpt, 'blog', 'article']
    });
  });

  faqData.forEach(faq => {
    items.push({
      ...faq,
      type: 'faq',
      href: `/support/${faq.slug}`,
      keywords: [faq.title, faq.excerpt, faq.category, 'support', 'help', 'faq']
    });
  });

  docsData.forEach(doc => {
    items.push({
      ...doc,
      type: 'documentation',
      href: `/docs/${doc.slug}`,
      keywords: [doc.title, doc.excerpt, doc.category, 'docs', 'documentation', 'guide']
    });
  });

  return items;
};
