
import React, { useEffect } from 'react';
import { html } from 'htm/react';
import { Briefcase, GraduationCap, Award, Download, MapPin, Mail, Cpu, ExternalLink } from 'lucide-react';
import { resumeData } from '../data.js';
import { uiStrings } from '../config.js';

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return html`
    <div className="min-h-screen py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        <!-- Action Bar (Only shows if resumeUrl exists) -->
        ${resumeData.resumeUrl && html`
          <div className="flex justify-end mb-8 print:hidden">
            <a 
              href=${resumeData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-android-600 rounded-lg hover:bg-android-700 transition-colors shadow-sm"
            >
              <${Download} size=${16} />
              <span className="hidden sm:inline">${uiStrings.resume.download}</span>
            </a>
          </div>
        `}

        <!-- Profile Header -->
        <header className="mb-12 border-b border-slate-200 dark:border-slate-700 pb-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
          
          <!-- Profile Photo -->
          ${resumeData.profile.photo && html`
            <div className="flex-shrink-0">
              <img 
                src=${resumeData.profile.photo} 
                alt=${resumeData.profile.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-xl border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-800"
              />
            </div>
          `}

          <div className="flex-grow">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
              ${resumeData.profile.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-android-600 dark:text-android-400 font-medium mb-6">
              ${resumeData.profile.role}
            </h2>
            
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-3xl mb-6">
              ${resumeData.profile.summary}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <${MapPin} size=${16} />
                ${resumeData.profile.location}
              </div>
              ${resumeData.profile.email && html`
                <a href=${`mailto:${resumeData.profile.email}`} className="flex items-center gap-2 hover:text-android-600 dark:hover:text-android-400 transition-colors">
                  <${Mail} size=${16} />
                  ${resumeData.profile.email}
                </a>
              `}
            </div>
          </div>
        </header>

        <!-- Experience Section -->
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
            <div className="p-2 bg-android-100 dark:bg-android-900/50 rounded-lg text-android-700 dark:text-android-300">
              <${Briefcase} size=${24} />
            </div>
            ${uiStrings.resume.experience}
          </h2>

          <div className="space-y-12 border-l-2 border-slate-200 dark:border-slate-700 ml-4 pl-8 relative">
            ${resumeData.experience.map((job, idx) => html`
              <div key=${idx} className="relative group">
                <!-- Timeline Dot -->
                <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 bg-slate-300 dark:bg-slate-600 group-hover:bg-android-500 transition-colors"></div>
                
                <div className="flex flex-col items-start md:flex-row md:items-baseline md:justify-between mb-2 gap-2 md:gap-0">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">${job.role}</h3>
                  <span className="text-sm font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                    ${job.period}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-android-600 dark:text-android-400 font-medium mb-4">
                  <span>${job.company}</span>
                  <span className="text-slate-300 dark:text-slate-600">•</span>
                  <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm font-normal">
                    <${MapPin} size=${14} />
                    ${job.location}
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  ${job.description}
                </p>

                ${job.achievements && html`
                  <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    ${job.achievements.map((item, i) => html`
                      <li key=${i}>${item}</li>
                    `)}
                  </ul>
                `}
              </div>
            `)}
          </div>
        </section>

        <!-- Technical Skills Section -->
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
             <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400">
               <${Cpu} size=${24} />
             </div>
             ${uiStrings.resume.skills}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${resumeData.skills.map((skillGroup, idx) => html`
              <div key=${idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-6 bg-android-500 rounded-full"></span>
                  ${skillGroup.category}
                </h3>
                ${skillGroup.description && html`
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    ${skillGroup.description}
                  </p>
                `}
                <div className="flex flex-wrap gap-2">
                  ${skillGroup.items.map(item => html`
                    <span key=${item} className="px-3 py-1.5 text-sm bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg">
                      ${item}
                    </span>
                  `)}
                </div>
              </div>
            `)}
          </div>
        </section>

        <!-- Two Column Layout for Awards and Education -->
        <div className="grid md:grid-cols-2 gap-12 page-break-inside-avoid">
          
          <!-- Awards/Certificates Section -->
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-600 dark:text-amber-400">
                <${Award} size=${24} />
              </div>
              ${uiStrings.resume.awards}
            </h2>

            <div className="space-y-4">
              ${resumeData.certificates.map((cert, idx) => {
                const Wrapper = cert.url ? 'a' : 'div';
                const wrapperProps = cert.url ? {
                  href: cert.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "group block"
                } : { className: "block" };

                return html`
                  <${Wrapper} key=${idx} ...${wrapperProps}>
                    <div className="relative flex items-start gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition-all border border-transparent hover:border-amber-200 dark:hover:border-amber-900 hover:shadow-sm">
                      <div className="mt-1">
                         <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                            ${cert.title}
                          </h3>
                          ${cert.url && html`
                            <${ExternalLink} size=${14} className="text-slate-400 group-hover:text-amber-500 transition-colors" />
                          `}
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                          ${cert.issuer} • ${cert.date}
                        </p>
                      </div>
                    </div>
                  <//>
                `;
              })}
            </div>
          </section>

          <!-- Education Section -->
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                <${GraduationCap} size=${24} />
              </div>
              ${uiStrings.resume.education}
            </h2>
            
            <div className="space-y-6">
              ${resumeData.education.map((edu, idx) => html`
                <div key=${idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">${edu.school}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">${edu.degree}</p>
                  <div className="flex justify-between items-center text-sm text-slate-500 dark:text-slate-400">
                    <span>${edu.period}</span>
                    <span>${edu.location}</span>
                  </div>
                </div>
              `)}
            </div>
          </section>

        </div>
      </div>
    </div>
  `;
};

export default Resume;
