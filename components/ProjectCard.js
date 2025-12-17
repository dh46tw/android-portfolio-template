import React from 'react';
import { html } from 'htm/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return html`
    <${Link} 
      to=${`/project/${project.id}`}
      className="group block h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:shadow-xl hover:border-android-400/50 dark:hover:border-android-500/50 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src=${project.thumbnail} 
          alt=${project.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded flex items-center gap-1 shadow-sm">
          <${Calendar} size=${12} />
          ${project.year}
        </div>
        
        <!-- Category Tag: Updated for better contrast -->
        <div className="absolute top-2 left-2 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md text-android-700 dark:text-android-300 text-xs px-2.5 py-1 rounded font-bold shadow-sm border border-slate-200/20">
          ${project.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col h-[calc(100%-12rem)]">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-android-600 dark:group-hover:text-android-400 transition-colors">
            ${project.title}
          </h3>
          <${ArrowUpRight} size=${20} className="text-slate-400 group-hover:text-android-500 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0" />
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 mb-4 flex-grow">
          ${project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          ${project.tags.slice(0, 3).map(tag => html`
            <span key=${tag} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded font-mono">
              #${tag}
            </span>
          `)}
          ${project.tags.length > 3 && html`
            <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded font-mono">
              +${project.tags.length - 3}
            </span>
          `}
        </div>
      </div>
    <//>
  `;
};

export default ProjectCard;