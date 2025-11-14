export const faqData = [
  {
    id: 1,
    slug: 'account-creation',
    title: 'How do I create an account?',
    category: 'Account',
    excerpt: 'Step-by-step guide to creating a Codera account and getting started.',
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">Creating Your Codera Account</h2>
      <p class="mb-4 text-gray-400">Creating an account on Codera is quick and easy. Follow these simple steps:</p>
      <ol class="list-decimal list-inside mb-4 text-gray-400 space-y-2">
        <li>Visit the Codera website and click on "Sign Up"</li>
        <li>Enter your email address and create a strong password</li>
        <li>Verify your email by clicking the link in the confirmation email</li>
        <li>Complete your profile with your name and preferences</li>
        <li>Start learning immediately!</li>
      </ol>
      <p class="text-gray-400">If you encounter any issues during registration, please contact our support team.</p>
    `
  },
  {
    id: 2,
    slug: 'password-reset',
    title: 'How do I reset my password?',
    category: 'Account',
    excerpt: 'Instructions for resetting your password if you forget it.',
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">Password Reset Guide</h2>
      <p class="mb-4 text-gray-400">If you've forgotten your password, don't worry! You can reset it easily:</p>
      <ol class="list-decimal list-inside mb-4 text-gray-400 space-y-2">
        <li>Click on "Forgot Password" on the login page</li>
        <li>Enter your email address associated with your account</li>
        <li>Check your email for the password reset link</li>
        <li>Click the link and create a new password</li>
        <li>Log in with your new password</li>
      </ol>
      <p class="text-gray-400">Password reset links expire after 24 hours for security. If yours has expired, request a new one.</p>
    `
  },
  {
    id: 3,
    slug: 'course-access',
    title: 'How do I access courses?',
    category: 'Courses',
    excerpt: 'Learn how to browse, enroll, and access course content.',
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">Accessing Courses</h2>
      <p class="mb-4 text-gray-400">Codera offers a wide variety of programming courses. Here's how to find and access them:</p>
      <ol class="list-decimal list-inside mb-4 text-gray-400 space-y-2">
        <li>Navigate to the "Learn" section from the main navigation menu</li>
        <li>Browse by language, difficulty level, or use the search feature</li>
        <li>Click on any course to view its curriculum</li>
        <li>Click "Enroll" to start the course (some courses may be free, others require payment)</li>
        <li>Access the course materials immediately after enrollment</li>
      </ol>
      <p class="text-gray-400">You can track your progress on your dashboard at any time.</p>
    `
  },
  {
    id: 4,
    slug: 'completion-certificate',
    title: 'Do I get a certificate upon completion?',
    category: 'Courses',
    excerpt: 'Information about certificates and course completion credentials.',
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">Course Certificates</h2>
      <p class="mb-4 text-gray-400">Yes! When you complete a course, you'll receive a digital certificate of completion.</p>
      <p class="mb-4 text-gray-400">Your certificate will include:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-2">
        <li>Your name and the course title</li>
        <li>Completion date and verification link</li>
        <li>Unique certificate ID for verification</li>
      </ul>
      <p class="text-gray-400">You can download, print, or share your certificates on social media and your professional profile.</p>
    `
  },
  {
    id: 5,
    slug: 'payment-methods',
    title: 'What payment methods do you accept?',
    category: 'Billing',
    excerpt: 'Information about accepted payment methods and payment processes.',
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">Payment Methods</h2>
      <p class="mb-4 text-gray-400">Codera accepts multiple payment methods for your convenience:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-2">
        <li>Credit Cards (Visa, Mastercard, American Express)</li>
        <li>Debit Cards</li>
        <li>PayPal</li>
        <li>Bank Transfer for institutional purchases</li>
      </ul>
      <p class="mb-4 text-gray-400">All payments are processed securely using industry-standard encryption. Your payment information is never stored on our servers.</p>
      <p class="text-gray-400">For enterprise solutions and bulk licenses, please contact our sales team.</p>
    `
  },
  {
    id: 6,
    slug: 'technical-requirements',
    title: 'What are the technical requirements?',
    category: 'Technical',
    excerpt: 'System requirements and recommended setup for using Codera.',
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">Technical Requirements</h2>
      <p class="mb-4 text-gray-400">Codera works on most modern devices. Here are the minimum requirements:</p>
      <h3 class="text-xl font-semibold text-white mb-2 mt-4">Browser Requirements:</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-1">
        <li>Chrome (recommended), Firefox, Safari, or Edge (latest versions)</li>
        <li>JavaScript enabled</li>
        <li>Minimum 1GB RAM</li>
      </ul>
      <h3 class="text-xl font-semibold text-white mb-2 mt-4">Internet Connection:</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-1">
        <li>Broadband internet connection (2 Mbps minimum)</li>
        <li>For video content, 5 Mbps recommended</li>
      </ul>
      <p class="text-gray-400">Mobile browsers are supported on iOS and Android devices.</p>
    `
  },
  {
    id: 7,
    slug: 'content-offline',
    title: 'Can I download content to use offline?',
    category: 'Technical',
    excerpt: 'Information about offline access and content downloads.',
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">Offline Access</h2>
      <p class="mb-4 text-gray-400">Most Codera courses include downloadable resources that you can access offline:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-2">
        <li>Course materials and code examples can be downloaded as files</li>
        <li>Lecture notes are available in PDF format</li>
        <li>Some video content can be downloaded for offline viewing (mobile app only)</li>
      </ul>
      <p class="mb-4 text-gray-400">To download content:</p>
      <ol class="list-decimal list-inside mb-4 text-gray-400 space-y-1">
        <li>Open the course lesson</li>
        <li>Look for the download icon or "Download" button</li>
        <li>Choose your preferred format and download</li>
      </ol>
      <p class="text-gray-400">Note: The interactive editor and live coding exercises require an internet connection.</p>
    `
  },
  {
    id: 8,
    slug: 'refund-policy',
    title: 'What is your refund policy?',
    category: 'Billing',
    excerpt: 'Details about our money-back guarantee and refund process.',
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">Refund Policy</h2>
      <p class="mb-4 text-gray-400">We want you to be satisfied with your learning experience. Here's our refund policy:</p>
      <p class="mb-4 text-gray-400"><strong>30-Day Money-Back Guarantee:</strong> If you're not satisfied with a course for any reason, we offer a full refund within 30 days of purchase.</p>
      <p class="mb-4 text-gray-400">To request a refund:</p>
      <ol class="list-decimal list-inside mb-4 text-gray-400 space-y-1">
        <li>Go to your account settings</li>
        <li>Find the course in "My Courses"</li>
        <li>Click "Request Refund"</li>
        <li>Follow the prompts to complete your request</li>
      </ol>
      <p class="text-gray-400">Refunds are typically processed within 5-7 business days.</p>
    `
  },
  {
    id: 9,
    slug: 'learning-paths',
    title: 'How do learning paths work?',
    category: 'Courses',
    excerpt: 'Understanding Codera learning paths and structured curriculum guides.',
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">Learning Paths</h2>
      <p class="mb-4 text-gray-400">Learning Paths are structured sequences of courses designed to take you from beginner to advanced in a specific skill:</p>
      <p class="mb-4 text-gray-400"><strong>Benefits:</strong></p>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-2">
        <li>Logical progression from basic to advanced concepts</li>
        <li>Hand-picked course selections by industry experts</li>
        <li>Guided learning journey with clear milestones</li>
        <li>Often discounted bundled pricing</li>
      </ul>
      <p class="mb-4 text-gray-400">Each path shows your progress and estimated completion time. You can take courses in order or jump around based on your needs.</p>
    `
  },
  {
    id: 10,
    slug: 'community-support',
    title: 'Is there a community forum?',
    category: 'Support',
    excerpt: 'Information about our community and peer support options.',
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">Community Support</h2>
      <p class="mb-4 text-gray-400">Yes! Codera has an active community where you can connect with other learners:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-2">
        <li>Discussion forums for each course</li>
        <li>Student Discord server for networking</li>
        <li>Peer code review opportunities</li>
        <li>Q&A sections with instructor responses</li>
      </ul>
      <p class="mb-4 text-gray-400">Our community guidelines ensure a respectful and helpful learning environment. Instructors and experienced students actively answer questions.</p>
      <p class="text-gray-400">Join our community to ask questions, share projects, and collaborate with fellow programmers!</p>
    `
  },
];

// Category grouping helper
export const getFaqCategories = () => {
  const categories = new Set();
  faqData.forEach(item => categories.add(item.category));
  return Array.from(categories).sort();
};

// Get FAQs by category
export const getFaqsByCategory = (category) => {
  if (category === 'All') return faqData;
  return faqData.filter(item => item.category === category);
};
