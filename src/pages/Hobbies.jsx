import React from 'react';
import { Code, Lightbulb, Palette, Compass, Puzzle } from 'lucide-react';

const Hobbies = () => {
  const hobbiesData = [
    {
      title: "Coding & Experimenting",
      description: "Exploring new technologies, practising programming, and building personal projects.",
      icon: <Code className="w-6 h-6 text-accent" />
    },
    {
      title: "Learning New Technologies",
      description: "Discovering tools, frameworks, and technologies related to web development, software, and cybersecurity.",
      icon: <Lightbulb className="w-6 h-6 text-accent" />
    },
    {
      title: "Creative Projects",
      description: "Experimenting with website designs, video editing, and creative digital ideas.",
      icon: <Palette className="w-6 h-6 text-accent" />
    },
    {
      title: "Technology Exploration",
      description: "Learning about emerging technologies, AI tools, and innovative digital solutions.",
      icon: <Compass className="w-6 h-6 text-accent" />
    },
    {
      title: "Problem-Solving",
      description: "Enjoying coding challenges and finding practical ways to solve technical problems.",
      icon: <Puzzle className="w-6 h-6 text-accent" />
    }
  ];

  return (
    <div className="animate-fade-in flex flex-col gap-10">
      <div className="space-y-2 text-center md:text-left border-b border-[var(--color-border-light)] pb-6">
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-[var(--color-charcoal)]">Hobbies & Interests</h1>
        <p className="text-lg text-[var(--color-soft-grey)]">The things that inspire me to learn, create, and explore.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbiesData.map((hobby, index) => (
          <div key={index} className="bg-white border border-[var(--color-border-light)] p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow hover:border-accent/30 group">
            <div className="w-12 h-12 bg-gray-50 border border-[var(--color-border-light)] rounded-md flex items-center justify-center mb-5 group-hover:bg-accent/5 transition-colors">
              {hobby.icon}
            </div>
            <h3 className="text-xl font-bold text-[var(--color-charcoal)] font-serif mb-3">{hobby.title}</h3>
            <p className="text-[var(--color-soft-grey)] leading-relaxed">{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
