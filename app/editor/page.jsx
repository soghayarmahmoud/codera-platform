"use client";

import React, { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { FaPlay, FaHtml5, FaCss3Alt, FaJs, FaPython } from 'react-icons/fa';

const languageDefaults = {
  html: `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Codera</title>
    <style>
      body { 
        font-family: sans-serif; 
        background-color: #111; 
        color: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }
      h1 {
        color: #3b82f6;
      }
    </style>
  </head>
  <body>
    <h1>Hello from Codera Editor!</h1>
  </body>
</html>`,
  css: `body {
  background-color: #111;
  color: #eee;
  font-family: sans-serif;
}

h1 {
  color: #3b82f6;
  text-align: center;
}`,
  javascript: `// Welcome to the Codera JavaScript sandbox!
// Use console.log() to print output below.

function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('Codera User');
`,
  python: `# Welcome to the Codera Python sandbox!
# Note: Python execution is not implemented in this example.

def greet(name):
  print(f"Hello, {name}!")

greet("Codera User")
`
};

export default function EditorPage() {
  const [language, setLanguage] = useState('html');
  const [code, setCode] = useState(languageDefaults.html);
  const iframeRef = useRef(null);
  const [consoleOutput, setConsoleOutput] = useState('');

  const run = () => {
    setConsoleOutput('');
    if (language === 'html' || language === 'css') {
      const blob = new Blob([code], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      if (iframeRef.current) iframeRef.current.src = url;
    } else if (language === 'javascript') {
      // run JS and capture console
      try {
        const captured = [];
        const originalLog = console.log;
        console.log = (...args) => { 
          captured.push(args.map(arg => typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)).join(' ')); 
        };
        // eslint-disable-next-line no-eval
        eval(code);
        console.log = originalLog;
        setConsoleOutput(captured.join('\n') || 'Code executed successfully with no output.');
      } catch (err) {
        setConsoleOutput(String(err));
      }
    }
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setCode(languageDefaults[lang]);
    setConsoleOutput('');
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-300 flex flex-col">
      <header className="bg-zinc-800 p-3 flex items-center justify-between border-b border-zinc-700">
        <h1 className="text-xl font-bold text-white">Code Editor</h1>
        <div className="flex items-center gap-4">
          <select value={language} onChange={e => handleLanguageChange(e.target.value)} className="bg-zinc-700 border border-zinc-600 text-white rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
          <button onClick={run} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition-colors">
            <FaPlay />
            Run
          </button>
        </div>
      </header>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-700">
        <div className="bg-zinc-900 h-full">
          <Editor height="100%" language={language} value={code} onChange={(value) => setCode(value || '')} theme="vs-dark" options={{ minimap: { enabled: false }, fontSize: 14, automaticLayout: true }} />
        </div>
        <div className="bg-zinc-900 h-full overflow-auto">
          {language === 'html' || language === 'css' ? (
            <iframe ref={iframeRef} title="preview" className="w-full h-full bg-white" sandbox="allow-scripts" />
          ) : (
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-400 border-b border-zinc-700 pb-2 mb-3">Console</h2>
              <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">{consoleOutput || 'Console output will appear here...'}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
