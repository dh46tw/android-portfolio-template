import React, { useEffect } from 'react';
import { html } from 'htm/react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { siteConfig } from './config.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ProjectDetail from './components/ProjectDetail.js';
import Home from './components/Home.js';

const App = () => {
  // 動態更新 Favicon
  useEffect(() => {
    if (siteConfig.favicon) {
      const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
      link.type = 'image/svg+xml';
      link.rel = 'icon';
      link.href = siteConfig.favicon;
      document.getElementsByTagName('head')[0].appendChild(link);
    }
  }, []);

  return html`
    <${Router}>
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors duration-300">
        <${Header} />
        <main className="flex-grow">
          <${Routes}>
            <${Route} path="/" element=${html`<${Home} />`} />
            <${Route} path="/project/:id" element=${html`<${ProjectDetail} />`} />
          <//>
        </main>
        <${Footer} />
      </div>
    <//>
  `;
};

export default App;