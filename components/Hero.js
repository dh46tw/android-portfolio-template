import React from 'react';
import { html } from 'htm/react';
import { ArrowDown } from 'lucide-react';
import { uiStrings } from '../config.js';

const Hero = () => {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return html`
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-android-800 uppercase bg-android-100 rounded-full dark:bg-android-600 dark:text-white">
            ${uiStrings.hero.badge}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            ${uiStrings.hero.titlePrefix} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-android-600 to-accent-500">
              ${uiStrings.hero.titleHighlight}
            </span>
            <br/> ${uiStrings.hero.titleSuffix}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
            ${uiStrings.hero.description}
          </p>
          <a
            href="#projects"
            onClick=${scrollToProjects}
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 dark:bg-android-600 dark:hover:bg-android-700 transition-colors shadow-lg hover:shadow-xl"
          >
            ${uiStrings.hero.cta}
            <${ArrowDown} size=${18} />
          </a>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-android-400/20 rounded-full blur-3xl opacity-50 dark:opacity-20 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-accent-400/20 rounded-full blur-3xl opacity-50 dark:opacity-20 -translate-x-1/3 translate-y-1/4"></div>
    </section>
  `;
};

export default Hero;