import React from 'react';
import { html } from 'htm/react';
import { Filter } from 'lucide-react';
import { uiStrings } from '../config.js';

const FilterBar = ({
  categories,
  allTags,
  selectedCategory,
  selectedTag,
  onSelectCategory,
  onSelectTag
}) => {
  return html`
    <div className="mb-10 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          ${uiStrings.filter.title}
        </h2>
        
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg self-start">
          ${categories.map(cat => html`
            <button
              key=${cat}
              onClick=${() => onSelectCategory(cat)}
              className=${`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                selectedCategory === cat
                  ? 'bg-white dark:bg-slate-700 text-android-700 dark:text-android-300 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              ${cat}
            </button>
          `)}
        </div>
      </div>

      <div className="flex items-start gap-3">
        <div className="text-slate-400 mt-1.5">
          <${Filter} size=${16} />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
             onClick=${() => onSelectTag(null)}
             className=${`px-3 py-1 text-xs rounded-full border transition-colors ${
               selectedTag === null
                 ? 'bg-android-100 border-android-200 text-android-800 dark:bg-android-600 dark:border-android-600 dark:text-white shadow-sm'
                 : 'bg-transparent border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-android-300 hover:text-slate-700 dark:hover:text-slate-200'
             }`}
          >
            ${uiStrings.filter.allTags}
          </button>
          ${allTags.map(tag => html`
            <button
              key=${tag}
              onClick=${() => onSelectTag(tag === selectedTag ? null : tag)}
              className=${`px-3 py-1 text-xs rounded-full border transition-colors ${
                selectedTag === tag
                  ? 'bg-android-100 border-android-200 text-android-800 dark:bg-android-600 dark:border-android-600 dark:text-white shadow-sm'
                  : 'bg-transparent border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-android-300 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              ${tag}
            </button>
          `)}
        </div>
      </div>
    </div>
  `;
};

export default FilterBar;