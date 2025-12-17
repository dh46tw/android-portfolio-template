import React from 'react';
import { html } from 'htm/react';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { uiStrings } from '../config.js';

const ArticleCard = ({ article }) => {
  // Format date if possible, otherwise use as is
  const formattedDate = React.useMemo(() => {
    try {
      const date = new Date(article.date);
      // Check if date is valid
      if (isNaN(date.getTime())) return article.date;
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }).format(date);
    } catch (e) {
      return article.date;
    }
  }, [article.date]);

  return html`
    <a 
      href=${article.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex flex-col h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-android-400 dark:hover:border-android-500 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mb-3 font-mono">
        <${Calendar} size=${14} className="mr-2" />
        ${formattedDate}
      </div>
      
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-android-600 dark:group-hover:text-android-400 transition-colors">
        ${article.title}
      </h3>
      
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
        ${article.summary}
      </p>
      
      <div className="flex items-center text-sm font-medium text-android-600 dark:text-android-400 mt-auto">
        ${uiStrings.blog.readMore}
        <${ArrowRight} size=${16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </a>
  `;
};

export default ArticleCard;