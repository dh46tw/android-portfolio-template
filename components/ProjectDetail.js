import React, { useState, useEffect } from 'react';
import { html } from 'htm/react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data.js';
import { uiStrings } from '../config.js';
import { ArrowLeft, Github, Download, Calendar, Tag, Layers, CheckCircle, PlayCircle } from 'lucide-react';
import ImageViewer from './ImageViewer.js';

// Helper to extract YouTube ID (Support standard and Shorts URLs)
const getYouTubeId = (url) => {
  if (!url) return null;
  // Added 'shorts/' to the regex capture group
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const ProjectDetail = () => {
  const { id } = useParams();
  const [selectedMedia, setSelectedMedia] = useState(null);

  // 當進入此頁面時，自動捲動至頂部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projects.find(p => p.id === id);

  if (!project) {
    return html`<${Navigate} to="/" replace />`;
  }

  return html`
    <div className="min-h-screen pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="container mx-auto px-4 md:px-6 pt-8">
        <${Link} 
          to="/" 
          className="inline-flex items-center text-slate-500 hover:text-android-600 dark:text-slate-400 dark:hover:text-android-400 transition-colors mb-8"
        >
          <${ArrowLeft} size=${20} className="mr-2" />
          ${uiStrings.projectDetail.back}
        <//>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-android-100 text-android-800 dark:bg-android-600 dark:text-white text-sm font-semibold rounded-full">
                ${project.category}
              </span>
              <span className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                <${Calendar} size=${16} className="mr-1.5" />
                ${project.year}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              ${project.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              ${project.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 justify-center md:items-end">
            ${project.demoUrl && html`
              <a 
                href=${project.demoUrl} 
                target="_blank" 
                rel="noreferrer"
                className="w-full md:w-auto px-6 py-3 bg-android-600 hover:bg-android-700 text-white font-medium rounded-lg shadow-lg hover:shadow-android-500/30 transition-all flex items-center justify-center gap-2"
              >
                <${Download} size=${20} />
                ${uiStrings.projectDetail.demo}
              </a>
            `}
            ${project.githubUrl && html`
              <a 
                href=${project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="w-full md:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-medium rounded-lg shadow transition-all flex items-center justify-center gap-2"
              >
                <${Github} size=${20} />
                ${uiStrings.projectDetail.source}
              </a>
            `}
          </div>
        </div>

        ${project.medias && project.medias.length > 0 && html`
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              ${uiStrings.projectDetail.gallery}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              ${project.medias.map((mediaUrl, idx) => {
                const videoId = getYouTubeId(mediaUrl);
                const thumbnailUrl = videoId 
                  ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` 
                  : mediaUrl;

                return html`
                  <div 
                    key=${idx} 
                    className="relative group cursor-pointer overflow-hidden rounded-xl h-64 border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800"
                    onClick=${() => setSelectedMedia(mediaUrl)}
                  >
                    <img 
                      src=${thumbnailUrl} 
                      alt=${`${project.title} gallery ${idx + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      ${videoId ? html`
                        <div className="bg-black/30 rounded-full p-2 backdrop-blur-sm border border-white/20 shadow-xl group-hover:scale-110 transition-transform">
                          <${PlayCircle} size=${48} className="text-white fill-white/20" />
                        </div>
                      ` : html`
                        <span className="text-white bg-black/50 px-3 py-1 rounded-full text-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          ${uiStrings.projectDetail.viewImage}
                        </span>
                      `}
                    </div>
                  </div>
                `;
              })}
            </div>
          </div>
        `}

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <${Layers} className="text-android-500" />
              ${uiStrings.projectDetail.techStack}
            </h2>
            <div className="flex flex-wrap gap-2 mb-8">
              ${project.techStack.map((tech) => html`
                <span 
                  key=${tech} 
                  className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-mono"
                >
                  ${tech}
                </span>
              `)}
            </div>

            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <${Tag} size=${18} className="text-slate-400" />
              ${uiStrings.projectDetail.tags}
            </h3>
            <div className="flex flex-wrap gap-2">
              ${project.tags.map(tag => html`
                <span key=${tag} className="text-slate-500 dark:text-slate-400 text-sm">#${tag}</span>
              `)}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <${CheckCircle} className="text-android-500" />
              ${uiStrings.projectDetail.challenges}
            </h2>
            <ul className="space-y-4">
              ${project.challenges.map((challenge, idx) => html`
                <li key=${idx} className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-android-100 dark:bg-android-900/50 text-android-600 dark:text-android-400 flex items-center justify-center text-sm font-bold">
                    ${idx + 1}
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    ${challenge}
                  </p>
                </li>
              `)}
            </ul>
          </div>
        </div>
      </div>

      ${selectedMedia && html`
        <${ImageViewer} src=${selectedMedia} onClose=${() => setSelectedMedia(null)} />
      `}
    </div>
  `;
};

export default ProjectDetail;