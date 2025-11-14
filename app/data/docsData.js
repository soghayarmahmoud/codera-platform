export const docsData = [
  {
    id: 1,
    slug: 'getting-started',
    title: 'Getting Started with Codera',
    category: 'Getting Started',
    excerpt: 'Start your learning journey with Codera. Learn the basics and get set up.',
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">Welcome to Codera</h2>
      <p class="mb-4 text-gray-400">Codera is an interactive platform designed to help you learn programming by doing. Unlike traditional tutorials, Codera combines video lessons with hands-on coding exercises in a powerful online editor.</p>
      
      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Getting Started</h3>
      <ol class="list-decimal list-inside mb-4 text-gray-400 space-y-2">
        <li>Create a free account on Codera</li>
        <li>Choose a learning path or course that interests you</li>
        <li>Start with a lesson and follow along with the interactive editor</li>
        <li>Complete exercises and projects to reinforce your learning</li>
        <li>Track your progress and earn certificates</li>
      </ol>

      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Key Features</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-2">
        <li><strong>Interactive Editor:</strong> Code directly in your browser with instant feedback</li>
        <li><strong>Video Lessons:</strong> High-quality video instruction for each topic</li>
        <li><strong>Real-time Feedback:</strong> Get immediate feedback on your code</li>
        <li><strong>Projects:</strong> Build real-world projects to add to your portfolio</li>
        <li><strong>Community:</strong> Connect with other learners and get help</li>
      </ul>
    `
  },
  {
    id: 2,
    slug: 'using-editor',
    title: 'Using the Code Editor',
    category: 'Editor',
    excerpt: 'Master the Codera code editor and its powerful features.',
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">Code Editor Guide</h2>
      <p class="mb-4 text-gray-400">The Codera editor is a browser-based IDE that provides a complete development environment for writing and testing code.</p>

      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Editor Features</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-2">
        <li><strong>Syntax Highlighting:</strong> Color-coded syntax for better readability</li>
        <li><strong>Auto-completion:</strong> Smart code suggestions as you type</li>
        <li><strong>Error Detection:</strong> Real-time error highlighting and messages</li>
        <li><strong>Line Numbers:</strong> Easy navigation with line numbers</li>
        <li><strong>Dark Mode:</strong> Eye-friendly dark theme by default</li>
        <li><strong>Multiple Files:</strong> Work with multiple files in one project</li>
      </ul>

      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Running Your Code</h3>
      <p class="mb-4 text-gray-400">Click the "Run" button to execute your code. The output will appear in the console panel below the editor.</p>
      <p class="text-gray-400">You can also use keyboard shortcuts: <code class="bg-zinc-800 px-2 py-1 rounded text-yellow-400">Ctrl+Enter</code> (Windows/Linux) or <code class="bg-zinc-800 px-2 py-1 rounded text-yellow-400">Cmd+Enter</code> (Mac)</p>

      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Common Keyboard Shortcuts</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-2">
        <li><code class="bg-zinc-800 px-2 py-1 rounded text-yellow-400">Tab</code> - Indent code</li>
        <li><code class="bg-zinc-800 px-2 py-1 rounded text-yellow-400">Shift+Tab</code> - Unindent code</li>
        <li><code class="bg-zinc-800 px-2 py-1 rounded text-yellow-400">Ctrl+/</code> - Toggle comment</li>
        <li><code class="bg-zinc-800 px-2 py-1 rounded text-yellow-400">Ctrl+Z</code> - Undo</li>
        <li><code class="bg-zinc-800 px-2 py-1 rounded text-yellow-400">Ctrl+Y</code> - Redo</li>
      </ul>
    `
  },
  {
    id: 3,
    slug: 'courses-and-paths',
    title: 'Understanding Courses and Learning Paths',
    category: 'Courses',
    excerpt: 'Learn how to navigate courses and choose the right learning path.',
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">Courses & Learning Paths</h2>
      <p class="mb-4 text-gray-400">Codera offers two main ways to structure your learning: individual courses and guided learning paths.</p>

      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Individual Courses</h3>
      <p class="mb-4 text-gray-400">Individual courses focus on a specific topic or skill. Each course typically contains:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-2">
        <li>Video lessons broken into manageable segments</li>
        <li>Hands-on coding exercises for each concept</li>
        <li>Projects to apply what you've learned</li>
        <li>A final project or assessment</li>
      </ul>

      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Learning Paths</h3>
      <p class="mb-4 text-gray-400">Learning paths are curated sequences of courses that take you from beginner to advanced in a specific domain. Benefits include:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-2">
        <li>Logical progression through related topics</li>
        <li>Comprehensive coverage of a skill area</li>
        <li>Often at a discounted price compared to individual courses</li>
        <li>Clear roadmap with milestones</li>
      </ul>

      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Choosing What to Learn</h3>
      <p class="text-gray-400">Browse our catalog by language, difficulty level, or topic. Read course descriptions and check prerequisites before enrolling.</p>
    `
  },
  {
    id: 4,
    slug: 'projects-portfolio',
    title: 'Building Your Project Portfolio',
    category: 'Projects',
    excerpt: 'Learn how to leverage Codera projects to build your portfolio.',
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">Project Portfolio</h2>
      <p class="mb-4 text-gray-400">One of the best ways to learn programming is by building projects. Codera includes hands-on projects in every course that help you apply real-world skills.</p>

      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Project Types</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-2">
        <li><strong>Guided Projects:</strong> Step-by-step instructions with exercises</li>
        <li><strong>Challenge Projects:</strong> Build something with minimal guidance</li>
        <li><strong>Capstone Projects:</strong> Comprehensive final projects for courses/paths</li>
        <li><strong>Custom Projects:</strong> Create your own projects using Codera's editor</li>
      </ul>

      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Sharing Your Work</h3>
      <p class="mb-4 text-gray-400">Once you complete a project, you can:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-2">
        <li>Share your project URL with others</li>
        <li>Download your project files</li>
        <li>Add projects to your portfolio or GitHub</li>
        <li>Show your work to potential employers</li>
      </ul>

      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Best Practices</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-2">
        <li>Write clean, well-commented code</li>
        <li>Test your projects thoroughly</li>
        <li>Add documentation for complex projects</li>
        <li>Keep your projects public to showcase your skills</li>
      </ul>
    `
  },
  {
    id: 5,
    slug: 'debugging-tips',
    title: 'Debugging and Error Handling',
    category: 'Technical',
    excerpt: 'Master debugging techniques and learn how to handle errors effectively.',
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">Debugging Guide</h2>
      <p class="mb-4 text-gray-400">Debugging is a critical skill for programmers. This guide covers common debugging techniques and how to use Codera's tools.</p>

      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Common Error Types</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-2">
        <li><strong>Syntax Errors:</strong> Mistakes in code structure (missing semicolons, brackets, etc.)</li>
        <li><strong>Logic Errors:</strong> Code runs but doesn't work as expected</li>
        <li><strong>Runtime Errors:</strong> Errors that occur when the program is running</li>
        <li><strong>Type Errors:</strong> Operations on incompatible data types</li>
      </ul>

      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Debugging Techniques</h3>
      <ol class="list-decimal list-inside mb-4 text-gray-400 space-y-2">
        <li><strong>Read Error Messages:</strong> Carefully read error messages - they tell you what's wrong</li>
        <li><strong>Use Console Logging:</strong> Print variable values to understand what's happening</li>
        <li><strong>Trace Code Execution:</strong> Follow your code step by step mentally</li>
        <li><strong>Isolate the Problem:</strong> Find the smallest piece of code that causes the error</li>
        <li><strong>Test Incrementally:</strong> Test small sections of code as you write it</li>
      </ol>

      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Using the Console</h3>
      <p class="mb-4 text-gray-400">Codera provides a console where you can see output from print statements and error messages. Use this to debug your code:</p>
      <pre class="bg-zinc-800 p-4 rounded mb-4 overflow-x-auto text-yellow-400"><code>console.log('Debug message:', variable);</code></pre>
    `
  },
  {
    id: 6,
    slug: 'progress-tracking',
    title: 'Tracking Your Learning Progress',
    category: 'Learning',
    excerpt: 'Understand how to monitor your progress and stay motivated.',
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">Progress Tracking</h2>
      <p class="mb-4 text-gray-400">Codera tracks your progress automatically. Here's how to monitor your learning journey.</p>

      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Your Dashboard</h3>
      <p class="mb-4 text-gray-400">Your dashboard shows:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-2">
        <li>Courses and paths you're enrolled in</li>
        <li>Your progress percentage for each course</li>
        <li>Lessons completed and remaining</li>
        <li>Exercise completion status</li>
        <li>Time spent learning</li>
        <li>Total points earned</li>
      </ul>

      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Points and Achievements</h3>
      <p class="mb-4 text-gray-400">Earn points by:</p>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-2">
        <li>Completing lessons</li>
        <li>Finishing exercises correctly on first try</li>
        <li>Completing projects</li>
        <li>Participating in community discussions</li>
      </ul>

      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Maintaining Momentum</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-2">
        <li>Set learning goals for yourself</li>
        <li>Track consistency with learning streaks</li>
        <li>Review completed work to see improvement</li>
        <li>Join study groups with other learners</li>
      </ul>
    `
  },
  {
    id: 7,
    slug: 'api-reference',
    title: 'API Reference and Documentation',
    category: 'Technical',
    excerpt: 'Complete reference for Codera APIs and external integrations.',
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">API Documentation</h2>
      <p class="mb-4 text-gray-400">Codera provides APIs for advanced users who want to build custom tools and integrations.</p>

      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Authentication</h3>
      <p class="mb-4 text-gray-400">All API requests require an API key. Get your key from your account settings.</p>
      <pre class="bg-zinc-800 p-4 rounded mb-4 overflow-x-auto text-yellow-400"><code>Authorization: Bearer YOUR_API_KEY</code></pre>

      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Endpoints</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-2">
        <li><code class="bg-zinc-800 px-2 py-1 rounded text-yellow-400">GET /api/user</code> - Get current user information</li>
        <li><code class="bg-zinc-800 px-2 py-1 rounded text-yellow-400">GET /api/courses</code> - List all available courses</li>
        <li><code class="bg-zinc-800 px-2 py-1 rounded text-yellow-400">GET /api/progress</code> - Get your learning progress</li>
        <li><code class="bg-zinc-800 px-2 py-1 rounded text-yellow-400">POST /api/projects</code> - Create a new project</li>
      </ul>

      <p class="text-gray-400 mt-6">For detailed API documentation, visit our developers portal.</p>
    `
  },
  {
    id: 8,
    slug: 'best-practices',
    title: 'Coding Best Practices',
    category: 'Learning',
    excerpt: 'Learn industry best practices for writing clean, maintainable code.',
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">Best Practices</h2>
      <p class="mb-4 text-gray-400">Writing good code is about more than just making it work. Follow these practices to write professional-quality code.</p>

      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Code Style</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-2">
        <li>Use consistent indentation (2 or 4 spaces)</li>
        <li>Follow naming conventions for your language</li>
        <li>Keep lines reasonably short (80-120 characters)</li>
        <li>Use meaningful variable and function names</li>
      </ul>

      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Code Organization</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-2">
        <li>Write small, focused functions</li>
        <li>Keep related code together</li>
        <li>Avoid deep nesting</li>
        <li>Use comments to explain "why", not "what"</li>
      </ul>

      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Documentation</h3>
      <ul class="list-disc list-inside mb-4 text-gray-400 space-y-2">
        <li>Document public APIs</li>
        <li>Include examples in documentation</li>
        <li>Maintain a README file</li>
        <li>Keep documentation up to date</li>
      </ul>
    `
  }
];

export const getDocsCategories = () => {
  const categories = new Set();
  docsData.forEach(item => categories.add(item.category));
  return Array.from(categories).sort();
};

export const getDocsByCategory = (category) => {
  if (category === 'All') return docsData;
  return docsData.filter(item => item.category === category);
};
