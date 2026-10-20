import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projectsData = [
    {
      title: 'DCodex',
      url: 'https://dcodex-k7rf.onrender.com/',
      description: 'A web project associated with my DCodex coding brand, showcasing my interest in programming and developer-focused digital experiences.',
      buttonText: 'View Project',
      image: '/dcodex.png',
    },
    {
      title: 'Flappy Game',
      url: 'https://flappy-game-oyjc.onrender.com/',
      description: 'An interactive browser game project focused on gameplay, user interaction, and an engaging gaming experience.',
      buttonText: 'Play Game',
      image: '/flappy.png',
    },
    {
      title: 'EduIF2',
      url: 'https://eduif2-1.onrender.com/',
      description: 'An educational web project demonstrating my interest in creating useful web interfaces and digital learning experiences.',
      buttonText: 'View Project',
      image: '/eduif.png',
    },
    {
      title: 'D~D',
      url: 'https://html-css-jscript.vercel.app/Nostra.html',
      description: 'A fashion and shopping website project demonstrating frontend layout, product presentation, and interactive website development.',
      buttonText: 'View Website',
      image: '/dd.png',
    },
    {
      title: 'Trendora',
      url: 'https://trendora-steel.vercel.app/',
      description: 'A modern online shopping and e-commerce platform featuring trendy fashion collections, watches, footwear, and seamless product browsing.',
      buttonText: 'View Website',
      image: '/trendora.jpg',
    },
    {
      title: 'Food Shop (TFC Nation)',
      url: 'https://food-shop-1.vercel.app/',
      description: 'A vibrant food and restaurant website showcasing menu items, recipes, culinary services, and online ordering.',
      buttonText: 'View Website',
      image: '/food_shop.jpg',
    }
  ];

  return (
    <div className="animate-fade-in flex flex-col gap-10">
      <div className="space-y-2 text-center md:text-left border-b border-[var(--color-border-light)] pb-6">
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-[var(--color-charcoal)]">Projects</h1>
        <p className="text-lg text-[var(--color-soft-grey)]">Things I've designed, built and shipped.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="group bg-white border border-[var(--color-border-light)] rounded-sm shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden">
            <div className="aspect-[16/9] w-full bg-gray-100 flex items-center justify-center border-b border-[var(--color-border-light)] overflow-hidden relative">
              <img 
                src={project.image} 
                alt={`${project.title} screenshot`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Optional overlay on hover */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-[var(--color-charcoal)] font-serif mb-3">{project.title}</h3>
              <p className="text-[var(--color-soft-grey)] mb-6 flex-grow leading-relaxed">{project.description}</p>
              
              <div className="pt-4 mt-auto">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[var(--color-border-light)] text-[var(--color-charcoal)] font-medium rounded-md hover:border-accent hover:text-accent transition-colors"
                >
                  {project.buttonText}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
