import React from 'react';
import { html } from 'htm/react';
import { uiStrings } from '../config.js';

const Footer = () => {
  return html`
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 mt-20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
          © ${new Date().getFullYear()} ${uiStrings.footer.copyright}
        </p>
        <p className="text-slate-400 dark:text-slate-500 text-sm">
          ${uiStrings.footer.tech}
        </p>
        
        <p className="text-slate-300 dark:text-slate-700 text-xs mt-6">
          Built on <a href="https://github.com/dh46tw/android-portfolio-template" target="_blank" rel="noreferrer" className="hover:text-android-600 dark:hover:text-android-400 transition-colors border-b border-transparent hover:border-android-600 dark:hover:border-android-400">dh46tw/android-portfolio-template</a>
        </p>
      </div>
    </footer>
  `;
};

export default Footer;