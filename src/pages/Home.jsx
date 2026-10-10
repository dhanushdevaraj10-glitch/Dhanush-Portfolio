import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [titleText, setTitleText] = useState('');
  const fullTitle = 'Web Developer';
  const typingSpeed = 100;

  useEffect(() => {
    let timer;
    if (titleText.length < fullTitle.length) {
      timer = setTimeout(() => {
        setTitleText(fullTitle.slice(0, titleText.length + 1));
      }, typingSpeed);
    }
    return () => clearTimeout(timer);
  }, [titleText]);

  return (
    <div className="flex flex-col gap-16 md:gap-24 animate-fade-in">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[var(--color-charcoal)]">
              I'm Dhanush D and I'm a
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-accent h-10">
              {titleText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          
          <p className="text-lg leading-relaxed text-[var(--color-soft-grey)]">
            I'm a B.Com Computer Applications student at PSG College of Arts and Science, Coimbatore, passionate about building modern, responsive, and user-friendly websites. I enjoy turning ideas into interactive digital experiences using HTML, CSS, and JavaScript. I also work with Java, Python, and MySQL, continuously improving my programming and web development skills through practical projects. My goal is to become a Full-Stack Developer and create clean, functional, and engaging web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent !text-white font-medium rounded-md hover:bg-accent/90 transition-colors shadow-sm text-center"
            >
              About Me
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-accent text-accent font-medium rounded-md hover:bg-accent hover:!text-white transition-colors text-center"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end w-full max-w-sm md:max-w-md relative mt-8 md:mt-4 p-4 md:p-8">
          <div className="relative w-full max-w-[280px] md:max-w-[320px] mx-auto md:mr-0 group animate-swing origin-top mt-2">
            
            {/* Realistic Push Pin */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center drop-shadow-md">
              <div className="w-6 h-6 rounded-full bg-accent shadow-inner border border-red-800 relative z-10">
                <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-white/50"></div>
              </div>
              <div className="w-1 h-4 bg-gradient-to-b from-gray-300 to-gray-500 rounded-b-sm -mt-1 shadow-sm"></div>
            </div>

            {/* Background Black Shadow */}
            <div className="absolute inset-0 bg-black/40 blur-xl transform translate-x-3 translate-y-6 md:translate-x-4 md:translate-y-8 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-4 rounded-sm"></div>
            
            {/* Polaroid Frame */}
            <div className="relative bg-[#f8f8f8] p-3 pb-12 md:p-4 md:pb-16 shadow-2xl z-10 transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 rounded-sm border border-gray-200 flex flex-col items-center">
              
              <div className="w-full aspect-[4/5] bg-gray-200 overflow-hidden shadow-inner border border-gray-300/50">
                <img 
                  src="/profile.jpg" 
                  alt="Dhanush D Profile" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 pointer-events-none"
                />
              </div>

              {/* Polaroid Caption */}
              <div className="absolute bottom-3 md:bottom-5 left-0 w-full text-center">
                <span className="font-serif italic text-lg md:text-xl text-[var(--color-soft-grey)] opacity-80">Hello, World!</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
