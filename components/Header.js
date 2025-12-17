import React from 'react';
import { html } from 'htm/react';
import { useTheme } from '../context/ThemeContext.js';
import { Moon, Sun, Smartphone, Code, Terminal, Cpu, Laptop, Zap, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { uiStrings, socialLinks, siteConfig } from '../config.js';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  // 圖示對應表，方便從 data.js 透過字串選取
  const iconMap = {
    Smartphone: Smartphone,
    Code: Code,
    Terminal: Terminal,
    Cpu: Cpu,
    Laptop: Laptop,
    Zap: Zap
  };

  const BrandIcon = iconMap[siteConfig.headerIcon] || Smartphone;

  return html`
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <${Link} to="/" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
          <div className="bg-android-600 p-1.5 rounded-lg text-white">
            <${BrandIcon} size=${24} />
          </div>
          <span className="hidden sm:inline">${uiStrings.header.brand}</span>
        <//>

        <nav className="flex items-center gap-6">
          <div className="flex items-center gap-4 border-r border-slate-200 dark:border-slate-700 pr-6 mr-2">
             <a href=${socialLinks.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-android-600 dark:text-slate-400 dark:hover:text-android-400 transition-colors">
               <${Github} size=${20} />
             </a>
             <a href=${socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-android-600 dark:text-slate-400 dark:hover:text-android-400 transition-colors">
               <${Linkedin} size=${20} />
             </a>
             <a href=${socialLinks.email} className="text-slate-500 hover:text-android-600 dark:text-slate-400 dark:hover:text-android-400 transition-colors">
               <${Mail} size=${20} />
             </a>
          </div>

          <button
            onClick=${toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-android-500"
            aria-label=${uiStrings.header.toggleTheme}
          >
            ${theme === 'light' ? html`<${Moon} size=${20} />` : html`<${Sun} size=${20} />`}
          </button>
        </nav>
      </div>
    </header>
  `;
};

export default Header;