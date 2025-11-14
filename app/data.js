
export const blogData = [
  {
    slug: 'getting-started-with-react',
    title: "Getting Started with React: A Beginner's Guide",
    excerpt: 'Learn the fundamentals of React, including components, props, and state, to start building your own interactive web applications.',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    author: 'Jane Doe',
    date: 'October 26, 2023',
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">Introduction to React</h2>
      <p class="mb-4 text-gray-400">React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. React has a few different kinds of components, but we’ll start with React.Component subclasses.</p>
      <p class="text-gray-400">This guide is designed for people who prefer to learn by doing and want to quickly see a working example. If you prefer learning concepts from the ground up, check out our step-by-step guide.</p>
    `
  },
  {
    slug: 'mastering-css-grid',
    title: 'A Complete Guide to CSS Grid Layout',
    excerpt: 'Unlock the power of CSS Grid to create complex, responsive web layouts with ease. This guide covers everything from the basics to advanced techniques.',
    imageUrl: 'https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    author: 'John Smith',
    date: 'October 22, 2023',
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">Why CSS Grid?</h2>
      <p class="mb-4 text-gray-400">CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns, and has many features that make building complex layouts straightforward.</p>
      <p class="text-gray-400">For a long time, we've been using CSS features like floats and positioning to create layouts. These are not ideal, and can be quite frustrating to work with. Grid is the first CSS module created specifically to solve the layout problems we've all been hacking our way around for years.</p>
    `
  },
  {
    slug: 'understanding-nodejs-event-loop',
    title: 'Understanding the Node.js Event Loop',
    excerpt: "Dive deep into the Node.js event loop to understand how it handles asynchronous operations and what makes Node.js so fast and efficient.",
    imageUrl: 'https://images.unsplash.com/photo-1629904853716-f0bc64219b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    author: 'Alex Johnson',
    date: 'October 18, 2023',
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">What is the Event Loop?</h2>
      <p class="mb-4 text-gray-400">The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.</p>
      <p class="text-gray-400">Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed.</p>
    `
  },
];