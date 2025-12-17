import React, { useState, useMemo } from 'react';
import { html } from 'htm/react';
import { projects } from '../data.js';
import { uiStrings } from '../config.js';
import Hero from './Hero.js';
import FilterBar from './FilterBar.js';
import ProjectCard from './ProjectCard.js';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(uiStrings.filter.allCategories);
  const [selectedTag, setSelectedTag] = useState(null);

  const categories = useMemo(() => {
    const cats = new Set(projects.map(p => p.category));
    return [uiStrings.filter.allCategories, ...Array.from(cats)];
  }, []);

  const allTags = useMemo(() => {
    const tags = new Set();
    projects.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  const filteredProjects = projects.filter(project => {
    const matchCategory = selectedCategory === uiStrings.filter.allCategories || project.category === selectedCategory;
    const matchTag = selectedTag === null || project.tags.includes(selectedTag);
    return matchCategory && matchTag;
  });

  return html`
    <${React.Fragment}>
      <${Hero} />
      <section id="projects" className="container mx-auto px-4 md:px-6 py-12 scroll-mt-20">
        <${FilterBar} 
          categories=${categories}
          allTags=${allTags}
          selectedCategory=${selectedCategory}
          selectedTag=${selectedTag}
          onSelectCategory=${setSelectedCategory}
          onSelectTag=${setSelectedTag}
        />
        
        ${filteredProjects.length > 0 ? html`
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${filteredProjects.map(project => html`
              <${ProjectCard} key=${project.id} project=${project} />
            `)}
          </div>
        ` : html`
          <div className="text-center py-20 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-400 text-lg">${uiStrings.filter.noResults}</p>
            <button 
              onClick=${() => { setSelectedCategory(uiStrings.filter.allCategories); setSelectedTag(null); }}
              className="mt-4 text-android-600 hover:text-android-700 font-medium"
            >
              ${uiStrings.filter.clearFilters}
            </button>
          </div>
        `}
      </section>
    <//>
  `;
};

export default Home;