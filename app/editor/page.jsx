"use client";

import React, { useState, useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { FaPlay, FaHtml5, FaCss3Alt, FaJs, FaPython } from 'react-icons/fa';


greet("Codera User")
const languageDefaults = {
  html: `<!doctype html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width,initial-scale=1">\n    <title>Codera</title>\n    <style>body { font-family: sans-serif; background-color: #111; color: #eee; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; } h1 { color: #3b82f6; }</style>\n  </head>\n  <body>\n    <h1>Hello from Codera Editor!</h1>\n  </body>\n</html>`,
  css: `body {\n  background-color: #111;\n  color: #eee;\n  font-family: sans-serif;\n}\n\nh1 {\n  color: #3b82f6;\n  text-align: center;\n}`,
  javascript: `// Welcome to the Codera JavaScript sandbox!\n// Use console.log() to print output below.\n\nfunction greet(name) {\n  console.log('Hello, ' + name + '!');\n}\n\ngreet('Codera User');\n`,
  python: `# Welcome to the Codera Python sandbox!\n# Note: Python execution is not supported in-browser.\n\ndef greet(name):\n  print(f"Hello, {name}!")\n\ngreet("Codera User")\n`,
  ruby: `# Welcome to the Codera Ruby sandbox!\n# Note: Ruby execution is not supported in-browser.\n\ndef greet(name)\n  puts "Hello, #{name}!"\nend\n\ngreet("Codera User")\n`,
  go: `// Welcome to the Codera Go sandbox!\n// Note: Go execution is not supported in-browser.\n\npackage main\nimport "fmt"\nfunc main() {\n  fmt.Println("Hello, Codera User!")\n}\n`,
  java: `// Welcome to the Codera Java sandbox!\n// Note: Java execution is not supported in-browser.\n\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, Codera User!");\n  }\n}\n`,
  csharp: `// Welcome to the Codera C# sandbox!\n// Note: C# execution is not supported in-browser.\n\nusing System;\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello, Codera User!");\n  }\n}\n`,
  cpp: `// Welcome to the Codera C++ sandbox!\n// Note: C++ execution is not supported in-browser.\n\n#include <iostream>\nint main() {\n  std::cout << "Hello, Codera User!" << std::endl;\n  return 0;\n}\n`,
};

export default function EditorPage() {
  const [language, setLanguage] = useState('html');
  const [htmlCode, setHtmlCode] = useState(languageDefaults.html);
  const [cssCode, setCssCode] = useState(languageDefaults.css);
  const [jsCode, setJsCode] = useState(languageDefaults.javascript);
  const [otherCode, setOtherCode] = useState(languageDefaults.python);
  const [activeTab, setActiveTab] = useState('html');
  const iframeRef = useRef(null);
  const [consoleOutput, setConsoleOutput] = useState('');

  const run = () => {
    setConsoleOutput('');
    setConsoleOutput('');
    // Build full HTML document combining html/css/js
    const full = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>
            // capture console and forward to parent
            (function(){
              const originalLog = console.log;
              function send(type, args){
                const payload = args.map(a => {
                  try { return JSON.stringify(a); } catch(e) { return String(a); }
                });
                window.parent.postMessage({ type: 'codera-console', level: type, data: payload }, '*');
              }
              console.log = function(){ send('log', Array.from(arguments)); originalLog.apply(console, arguments); };
              console.error = function(){ send('error', Array.from(arguments)); originalLog.apply(console, arguments); };
              window.addEventListener('error', function(e){ send('error', [e.message || e]); });
            })();
          </script>
          <script>
            try {
              ${jsCode}
            } catch(e) { console.error(e); }
          </script>
        </body>
      </html>
    `;

    const blob = new Blob([full], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    if (iframeRef.current) iframeRef.current.src = url;
  };

  // Listen to messages from iframe
  useEffect(() => {
    function onMessage(e){
      const d = e.data || {};
      if (d && d.type === 'codera-console'){
        const out = d.data.map(s => {
          try { return JSON.parse(s); } catch(e) { return s; }
        }).join(' ');
        setConsoleOutput(prev => (prev ? prev + '\n' + out : out));
      }
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setConsoleOutput('');
    if (lang === 'html') setHtmlCode(languageDefaults.html);
    else if (lang === 'css') setCssCode(languageDefaults.css);
    else if (lang === 'javascript') setJsCode(languageDefaults.javascript);
    else setOtherCode(languageDefaults[lang]);
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
            <option value="ruby">Ruby</option>
            <option value="go">Go</option>
            <option value="java">Java</option>
            <option value="csharp">C#</option>
            <option value="cpp">C++</option>
          </select>
          <button onClick={language === 'html' || language === 'css' || language === 'javascript' ? run : undefined} className={`flex items-center gap-2 px-4 py-2 ${language === 'html' || language === 'css' || language === 'javascript' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-zinc-700 cursor-not-allowed'} rounded-md text-white font-semibold transition-colors`} disabled={!(language === 'html' || language === 'css' || language === 'javascript')}>
            <FaPlay />
            Run
          </button>
        </div>
      </header>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-700">
        <div className="bg-zinc-900 h-full">
          {/* Tabs for HTML/CSS/JS when in html mode */}
          {language === 'html' ? (
            <div className="flex flex-col h-full">
              <div className="flex gap-2 p-2 bg-zinc-800 border-b border-zinc-700">
                <button onClick={() => setActiveTab('html')} className={`px-3 py-1 rounded ${activeTab === 'html' ? 'bg-blue-600 text-white' : 'bg-zinc-700 text-gray-300'}`}>HTML</button>
                <button onClick={() => setActiveTab('css')} className={`px-3 py-1 rounded ${activeTab === 'css' ? 'bg-blue-600 text-white' : 'bg-zinc-700 text-gray-300'}`}>CSS</button>
                <button onClick={() => setActiveTab('js')} className={`px-3 py-1 rounded ${activeTab === 'js' ? 'bg-blue-600 text-white' : 'bg-zinc-700 text-gray-300'}`}>JS</button>
              </div>
              <div className="flex-grow">
                {activeTab === 'html' && (
                  <Editor height="100%" language="html" value={htmlCode} onChange={(v)=>setHtmlCode(v||'')} theme="vs-dark" options={{ minimap: { enabled: false }, fontSize: 14, automaticLayout: true }} />
                )}
                {activeTab === 'css' && (
                  <Editor height="100%" language="css" value={cssCode} onChange={(v)=>setCssCode(v||'')} theme="vs-dark" options={{ minimap: { enabled: false }, fontSize: 14, automaticLayout: true }} />
                )}
                {activeTab === 'js' && (
                  <Editor height="100%" language="javascript" value={jsCode} onChange={(v)=>setJsCode(v||'')} theme="vs-dark" options={{ minimap: { enabled: false }, fontSize: 14, automaticLayout: true }} />
                )}
              </div>
            </div>
          ) : (language === 'css' ? (
            <Editor height="100%" language="css" value={cssCode} onChange={(v)=>setCssCode(v||'')} theme="vs-dark" options={{ minimap: { enabled: false }, fontSize: 14, automaticLayout: true }} />
          ) : language === 'javascript' ? (
            <Editor height="100%" language="javascript" value={jsCode} onChange={(v)=>setJsCode(v||'')} theme="vs-dark" options={{ minimap: { enabled: false }, fontSize: 14, automaticLayout: true }} />
          ) : (
            <Editor height="100%" language={language} value={otherCode} onChange={(v)=>setOtherCode(v||'')} theme="vs-dark" options={{ minimap: { enabled: false }, fontSize: 14, automaticLayout: true }} />
          ))}
        </div>
        <div className="bg-zinc-900 h-full overflow-auto">
          {(language === 'html' || language === 'css' || language === 'javascript') ? (
            <iframe ref={iframeRef} title="preview" className="w-full h-full bg-white" sandbox="allow-scripts" />
          ) : (
            <div className="p-6 flex flex-col h-full items-center justify-center text-center">
              <div className="text-2xl mb-2">⚠️</div>
              <div className="text-lg text-gray-300 font-semibold mb-2">Execution not supported in browser</div>
              <div className="text-gray-400 text-sm">Running code for {language.charAt(0).toUpperCase() + language.slice(1)} is not supported in this demo editor.<br/>You can still edit and copy your code.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
