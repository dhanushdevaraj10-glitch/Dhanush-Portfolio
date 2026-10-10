import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { id: 1, title: 'Professional Headshot', category: 'Portrait', image: '/gallery_1.png' },
    { id: 2, title: 'Build with AI Bootcamp', category: 'Technology Event', image: '/gallery_2.png' },
    { id: 3, title: 'Build with AI Coimbatore', category: 'Bootcamp', image: '/gallery_3.png' },
    { id: 4, title: 'Event Pass & Stickers', category: 'Hackathon', image: '/gallery_4.jpg' },
    { id: 5, title: 'Auditorium Session', category: 'Workshop', image: '/gallery_5.jpg' },
    { id: 6, title: 'Mirror Selfie', category: 'Personal', image: '/gallery_6.png' },
    { id: 7, title: 'Auditorium Crowd', category: 'Event', image: '/gallery_7.jpg' },
    { id: 8, title: 'Students at Bootcamp', category: 'Bootcamp', image: '/gallery_8.jpg' },
    { id: 9, title: 'Event Attendees', category: 'Event', image: '/gallery_9.jpg' },
    { id: 10, title: 'Coding Presentation', category: 'Workshop', image: '/gallery_10.png' },
    { id: 11, title: 'E-Summit Auditorium', category: 'Event', image: '/gallery_11.jpg' },
    { id: 12, title: 'E-Summit Brochure', category: 'Summit', image: '/gallery_12.jpg' },
    { id: 13, title: 'E-Summit Entrance', category: 'Summit', image: '/gallery_13.jpg' },
    { id: 14, title: 'DCodex Poster', category: 'Project', image: '/gallery_14.jpg' },
    { id: 15, title: 'Workspace Setup', category: 'Coding', image: '/gallery_15.jpg' },
    { id: 16, title: 'Podium Presentation', category: 'Speaking', image: '/gallery_16.jpg' },
  ];

  const openLightbox = (img) => {
    setSelectedImage(img);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="animate-fade-in flex flex-col gap-10">
      <div className="space-y-2 text-center md:text-left border-b border-[var(--color-border-light)] pb-6">
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-[var(--color-charcoal)]">Gallery</h1>
        <p className="text-lg text-[var(--color-soft-grey)]">Frames worth keeping.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {galleryItems.map((item) => (
          <div 
            key={item.id}
            className="group cursor-pointer bg-white p-2 border border-[var(--color-border-light)] rounded-sm shadow-sm hover:shadow-md hover:border-accent/50 transition-all"
            onClick={() => openLightbox(item)}
          >
            <div className={`aspect-square flex flex-col items-center justify-center overflow-hidden relative ${item.id === 1 ? 'bg-white p-2 md:p-4' : 'bg-gray-100'}`}>
              <img 
                src={item.image} 
                alt={item.title} 
                className={`w-full h-full group-hover:scale-105 transition-transform duration-500 ${item.id === 1 ? 'object-contain object-top' : 'object-cover object-top'}`} 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div 
            className="w-full max-w-4xl max-h-full bg-transparent p-2 md:p-4 rounded-sm flex flex-col items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage.image} alt={selectedImage.title} className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl" />
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 px-6 py-2 rounded-sm shadow-lg text-[var(--color-charcoal)] font-medium text-sm whitespace-nowrap">
              {selectedImage.title} • {selectedImage.category}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
