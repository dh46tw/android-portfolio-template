import React, { useEffect } from 'react';
import { html } from 'htm/react';
import { X } from 'lucide-react';

const getYouTubeId = (url) => {
  if (!url) return null;
  // Added 'shorts/' to the regex capture group
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const ImageViewer = ({ src, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const videoId = getYouTubeId(src);

  return html`
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <button 
        onClick=${onClose}
        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
      >
        <${X} size=${32} />
      </button>
      
      ${videoId ? html`
        <div 
          className="w-full max-w-5xl aspect-video bg-black rounded-lg shadow-2xl overflow-hidden" 
          onClick=${(e) => e.stopPropagation()}
        >
          <iframe
            width="100%"
            height="100%"
            src=${`https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&origin=${window.location.origin}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ` : html`
        <img 
          src=${src} 
          alt="Full view" 
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          onClick=${(e) => e.stopPropagation()}
        />
      `}
      
      <div className="absolute inset-0 -z-10" onClick=${onClose}></div>
    </div>
  `;
};

export default ImageViewer;