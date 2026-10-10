import React from 'react';
import { Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Career = () => {
  return (
    <div className="animate-fade-in flex flex-col gap-10">
      <div className="space-y-2 text-center md:text-left border-b border-[var(--color-border-light)] pb-6">
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-[var(--color-charcoal)]">Career Objective</h1>
        <p className="text-lg text-[var(--color-soft-grey)]">Where I'm heading and what I'm building toward.</p>
      </div>

      <div className="bg-white border border-[var(--color-border-light)] p-8 md:p-12 rounded-sm shadow-sm relative overflow-hidden">
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          
          <div className="relative w-[160px] md:w-[200px] aspect-square mx-auto -mt-4 md:-mt-8 -mb-8 flex items-center justify-center overflow-hidden z-10">
            <img 
              src="/career_art.jpg" 
              alt="Career Art" 
              className="w-full h-full object-contain mix-blend-multiply brightness-110 contrast-[1.05] hover:scale-105 transition-transform duration-700 pointer-events-none" 
            />
          </div>
          
          <div className="space-y-6 text-lg text-[var(--color-soft-grey)] leading-relaxed">
            <p>
              I aspire to become a skilled <span className="font-semibold text-[var(--color-charcoal)]">Full-Stack Developer</span>, building modern, responsive, and efficient web applications that solve real-world problems. As a B.Com Computer Applications student at PSG College of Arts and Science, I am strengthening my technical skills in HTML, CSS, JavaScript, Java, Python, and MySQL through hands-on projects and continuous learning.
            </p>
            <p>
              My career goal is to develop strong expertise in frontend and backend technologies, work on innovative software solutions, and grow into a developer who creates meaningful digital experiences through clean code, creative thinking, and practical problem-solving.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 pt-8 border-t border-[var(--color-border-light)] w-full justify-center">
            <div className="flex items-center gap-3 text-sm font-medium text-[var(--color-soft-grey)]">
              <span className="px-4 py-2 bg-gray-50 border border-[var(--color-border-light)] rounded-md">Student Developer</span>
              <ArrowRight className="w-4 h-4 text-accent" />
              <span className="px-4 py-2 bg-accent/10 border border-accent/20 text-accent rounded-md">Full-Stack Developer</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              to="/projects"
              className="px-6 py-3 bg-white border border-[var(--color-border-light)] text-[var(--color-charcoal)] font-medium rounded-md hover:border-accent hover:text-accent transition-colors"
            >
              See My Work
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-accent !text-white font-medium rounded-md hover:bg-accent/90 transition-colors shadow-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
