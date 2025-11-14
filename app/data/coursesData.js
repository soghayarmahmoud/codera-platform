export const DUMMY_COURSES = [
  {
    id: 1,
    slug: 'html-fundamentals',
    title: 'HTML Fundamentals',
    description: 'Learn the basics of HTML and web structure',
    icon: '📄',
    imageUrl: '/images/lang-html.png',
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-yellow-400',
    points: 200,
    level: 'Beginner',
    totalLessons: 12,
    completedLessons: 0,
    status: 'not-started',
    tech: 'HTML'
  },
  {
    id: 2,
    slug: 'css-styling',
    title: 'CSS Styling',
    description: 'Master CSS for beautiful web designs',
    icon: '🎨',
    imageUrl: '/images/lang-css.png',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-cyan-400',
    points: 250,
    level: 'Beginner',
    totalLessons: 15,
    completedLessons: 0,
    status: 'not-started',
    tech: 'CSS'
  },
  {
    id: 3,
    slug: 'javascript-basics',
    title: 'JavaScript Basics',
    description: 'Introduction to JavaScript programming',
    icon: '⚡',
    imageUrl: '/images/lang-js.png',
    gradientFrom: 'from-yellow-500',
    gradientTo: 'to-orange-400',
    points: 300,
    level: 'Beginner',
    totalLessons: 20,
    completedLessons: 0,
    status: 'not-started',
    tech: 'JavaScript'
  }
  ,
  {
    id: 4,
    slug: 'python-intro',
    title: 'Python Introduction',
    description: 'Learn Python for scripting and backend development',
    icon: '🐍',
    imageUrl: '/images/lang-python.png',
    gradientFrom: 'from-green-600',
    gradientTo: 'to-emerald-500',
    points: 350,
    level: 'Beginner',
    totalLessons: 18,
    completedLessons: 0,
    status: 'not-started',
    tech: 'Python'
  },
  {
    id: 5,
    slug: 'java-basics',
    title: 'Java Basics',
    description: 'Object-oriented programming with Java',
    icon: '☕',
    imageUrl: '/images/lang-java.png',
    gradientFrom: 'from-red-600',
    gradientTo: 'to-pink-500',
    points: 400,
    level: 'Intermediate',
    totalLessons: 22,
    completedLessons: 0,
    status: 'not-started',
    tech: 'Java'
  },
  {
    id: 6,
    slug: 'nodejs-backend',
    title: 'Node.js Backend',
    description: 'Build server-side applications with Node.js',
    icon: '🟢',
    imageUrl: '/images/lang-node.png',
    gradientFrom: 'from-lime-600',
    gradientTo: 'to-green-400',
    points: 420,
    level: 'Intermediate',
    totalLessons: 20,
    completedLessons: 0,
    status: 'not-started',
    tech: 'Node.js'
  }
];

export function getCourseBySlug(slug) {
  return DUMMY_COURSES.find(c => c.slug === slug);
}

// Add simple lessons for the main courses so the learn page can render modules
export const LESSONS = {
  'html-fundamentals': [
    { id: 'intro', title: 'Introduction to HTML', content: '<h2>Introduction</h2><p>HTML is the structure of the web.</p>' },
    { id: 'elements', title: 'HTML Elements', content: '<h2>Elements</h2><p>Tags, attributes and structure.</p>' },
    { id: 'forms', title: 'Forms', content: '<h2>Forms</h2><p>Create interactive input forms.</p>' }
  ],
  'css-styling': [
    { id: 'select', title: 'Selectors', content: '<h2>Selectors</h2><p>Target elements with selectors.</p>' },
    { id: 'box', title: 'Box Model', content: '<h2>Box Model</h2><p>Margin, border, padding, content.</p>' }
  ],
  'javascript-basics': [
    { id: 'syntax', title: 'Syntax & Variables', content: '<h2>Syntax</h2><p>Variables, let, const, var.</p>' },
    { id: 'functions', title: 'Functions', content: '<h2>Functions</h2><p>Declare and call functions.</p>' }
  ]
};
