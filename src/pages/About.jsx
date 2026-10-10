import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="animate-fade-in flex flex-col gap-10">
      <section className="flex flex-col gap-8 bg-white p-8 md:p-12 border border-[var(--color-border-light)] shadow-sm rounded-sm">
        <div className="relative w-[180px] md:w-[220px] h-[150px] md:h-[190px] mx-auto -mb-6 flex items-center justify-center overflow-hidden z-10">
          <img 
            src="/about_image.jpg" 
            alt="About Me Collage" 
            className="w-full h-full object-cover object-[center_30%] mix-blend-multiply pointer-events-none hover:scale-105 transition-transform duration-700" 
          />
        </div>

        <div className="space-y-6 text-[var(--color-soft-grey)] leading-relaxed text-lg">
          <p>
            Hi, I'm Dhanush D, a Web Developer pursuing my B.Com in Computer Applications at PSG College of Arts and Science, Coimbatore.
          </p>
          <p>
            I specialize in building responsive web interfaces using HTML, CSS, and JavaScript, with a focus on clean layouts, interactive elements, and user-friendly experiences. I also work with Java, Python, and MySQL, which help me develop my programming logic, handle data, and understand application development from both frontend and backend perspectives.
          </p>
          <p>
            My strengths include translating ideas into functional web pages, structuring maintainable code, debugging issues, and continuously learning new development tools and technologies. I enjoy creating practical projects that combine thoughtful design with reliable functionality.
          </p>
          <p>
            My goal is to grow into a skilled Full-Stack Developer, building modern web applications that are responsive, efficient, and useful to real users.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[var(--color-border-light)]">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent !text-white font-medium rounded-md hover:bg-accent/90 transition-colors shadow-sm text-center"
          >
            View Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-accent text-accent font-medium rounded-md hover:bg-accent hover:!text-white transition-colors text-center"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
