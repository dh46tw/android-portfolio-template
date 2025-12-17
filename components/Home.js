import React, { useState, useMemo, useEffect } from 'react';
import { html } from 'htm/react';
import { projects, blogData } from '../data.js';
import { uiStrings } from '../config.js';
import { BookOpen, ExternalLink } from 'lucide-react';
import Hero from './Hero.js';
import FilterBar from './FilterBar.js';
import ProjectCard from './ProjectCard.js';
import ArticleCard from './ArticleCard.js';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(uiStrings.filter.allCategories);
  const [selectedTag, setSelectedTag] = useState(null);
  
  // Blog State
  const [articles, setArticles] = useState([]);
  const [loadingArticles, setLoadingArticles] = useState(false);

  // Projects Filtering Logic
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

  // Blog Fetching Logic
  useEffect(() => {
    const fetchArticles = async () => {
      // 1. If RSS URL is provided, try to fetch it
      if (blogData.rssUrl) {
        setLoadingArticles(true);
        try {
          // Use rss2json to convert RSS to JSON and avoid CORS issues on client-side
          const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(blogData.rssUrl)}`);
          const data = await response.json();
          
          if (data.status === 'ok') {
            const rssItems = data.items.slice(0, 3).map(item => ({
              title: item.title,
              // Strip HTML tags from description for a clean summary
              summary: item.description.replace(/<[^>]+>/g, '').substring(0, 120) + '...',
              date: item.pubDate,
              link: item.link
            }));
            setArticles(rssItems);
          } else {
            // Fallback if RSS fetch fails
            console.warn("RSS Fetch failed, falling back to manual articles.");
            setArticles(blogData.articles.slice(0, 3));
          }
        } catch (error) {
          console.error("Error fetching RSS feed:", error);
          setArticles(blogData.articles.slice(0, 3));
        } finally {
          setLoadingArticles(false);
        }
      } 
      // 2. If no RSS URL, check if manual articles exist
      else if (blogData.articles && blogData.articles.length > 0) {
        setArticles(blogData.articles.slice(0, 3));
      }
      // 3. Otherwise leave empty (section will be hidden)
    };

    fetchArticles();
  }, []);

  return html`
    <${React.Fragment}>
      <${Hero} />
      
      <!-- Projects Section -->
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

      <!-- Technical Articles Section -->
      ${(articles.length > 0 || loadingArticles) && html`
        <section id="articles" className="container mx-auto px-4 md:px-6 py-12 md:py-20 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                <${BookOpen} size=${24} />
              </div>
              ${uiStrings.blog.title}
            </h2>
          </div>

          ${loadingArticles ? html`
             <div className="flex justify-center py-12">
                <div className="animate-pulse text-slate-400">${uiStrings.blog.loading}</div>
             </div>
          ` : html`
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              ${articles.map((article, idx) => html`
                <${ArticleCard} key=${idx} article=${article} />
              `)}
            </div>
            
            ${blogData.blogUrl && html`
              <div className="flex justify-center mt-12">
                <a 
                  href=${blogData.blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
                >
                  <${ExternalLink} size=${18} />
                  ${uiStrings.blog.viewBlog}
                </a>
              </div>
            `}
          `}
        </section>
      `}
    <//>
  `;
};

export default Home;