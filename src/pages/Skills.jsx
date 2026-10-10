import React from 'react';
import { Code2, MonitorPlay, Shield, Users } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      title: 'Web Development',
      icon: <Code2 className="w-8 h-8 text-accent" />,
      description: 'Building responsive websites, interactive interfaces, and practical web applications.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'MySQL', 'Git & GitHub', 'Responsive Web Design', 'Frontend Development', 'Backend Fundamentals']
    },
    {
      title: 'Video Editing',
      icon: <MonitorPlay className="w-8 h-8 text-accent" />,
      description: 'Creating engaging video content with clean cuts, smooth transitions, and creative visual storytelling.',
      tags: ['Video Editing', 'Cutting & Trimming', 'Transitions', 'Text Animations', 'Audio Editing', 'Color Correction', 'Social Media Content']
    },
    {
      title: 'Cybersecurity',
      icon: <Shield className="w-8 h-8 text-accent" />,
      description: 'Exploring cybersecurity fundamentals, networking, Linux tools, and ethical security practices.',
      tags: ['Cybersecurity Fundamentals', 'Linux', 'Networking Basics', 'Nmap', 'Web Security Fundamentals', 'Vulnerability Awareness', 'Ethical Hacking Basics']
    },
    {
      title: 'Working With People',
      icon: <Users className="w-8 h-8 text-accent" />,
      description: 'Working effectively with others to share ideas, coordinate tasks, and contribute to project goals.',
      tags: ['Communication', 'Collaboration', 'Teamwork', 'Problem-Solving', 'Time Management', 'Adaptability', 'Knowledge Sharing']
    }
  ];

  return (
    <div className="animate-fade-in flex flex-col gap-10">
      <div className="space-y-2 text-center md:text-left border-b border-[var(--color-border-light)] pb-6">
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-[var(--color-charcoal)]">Skills</h1>
        <p className="text-lg text-[var(--color-soft-grey)]">What I build with, what I create, and what I'm learning.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((skill, index) => (
          <div key={index} className="bg-white border border-[var(--color-border-light)] p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="mb-4 bg-gray-50 inline-block p-4 rounded-md border border-[var(--color-border-light)]">
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold text-[var(--color-charcoal)] font-serif mb-3">{skill.title}</h3>
            <p className="text-[var(--color-soft-grey)] mb-6 flex-grow">{skill.description}</p>
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="px-3 py-1 bg-gray-50 border border-[var(--color-border-light)] text-sm text-[var(--color-charcoal)] rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
