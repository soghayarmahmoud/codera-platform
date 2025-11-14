import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

// Font optimization
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

// Site metadata
export const metadata = {
  title: "Codera - Modern Coding Platform",
  description: "Learn to code with interactive courses and hands-on projects in multiple programming languages",
  keywords: ["programming", "coding", "courses", "learn to code", "web development", "JavaScript", "Python", "Java", "C++", "C#"],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  openGraph: {
    title: 'Codera - Modern Coding Platform',
    description: 'Learn to code with interactive courses and hands-on projects',
    type: 'website',
    locale: 'en_US',
    url: 'https://codera.app',
    siteName: 'Codera',
  },
};

// Supported programming languages
export const supportedLanguages = [
  { id: 'javascript', name: 'JavaScript', icon: '💛' },
  { id: 'typescript', name: 'TypeScript', icon: '🔵' },
  { id: 'python', name: 'Python', icon: '🐍' },
  { id: 'java', name: 'Java', icon: '☕' },
  { id: 'cpp', name: 'C++', icon: '🔷' },
  { id: 'csharp', name: 'C#', icon: '🔶' },
  { id: 'go', name: 'Go', icon: '🐹' },
  { id: 'rust', name: 'Rust', icon: '🦀' },
  { id: 'ruby', name: 'Ruby', icon: '💎' },
  { id: 'swift', name: 'Swift', icon: '🐦' },
  { id: 'kotlin', name: 'Kotlin', icon: '📱' },
  { id: 'php', name: 'PHP', icon: '🐘' },
  { id: 'scala', name: 'Scala', icon: '⚡' },
  { id: 'r', name: 'R', icon: '📊' },
  { id: 'dart', name: 'Dart', icon: '🎯' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ClientLayout languages={supportedLanguages}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
