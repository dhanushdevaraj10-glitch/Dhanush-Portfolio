import React from 'react';
import { GraduationCap, Building, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      qualification: "B.Com Computer Applications",
      institution: "PSG College of Arts and Science, Coimbatore",
      duration: "2024–2027",
      status: "Currently pursuing",
      description: "Currently pursuing a Bachelor's degree in Computer Applications, developing knowledge of commerce, computer applications, programming, and software development.",
      icon: <GraduationCap className="w-6 h-6 text-accent" />,
      image: "/psg_college.jpg"
    },
    {
      qualification: "Higher Secondary — Class XII",
      institution: "Hillfort Matriculation Higher Secondary School",
      duration: null,
      status: null,
      description: "Completed higher secondary education, building the academic foundation for further studies in commerce and computer applications.",
      icon: <Building className="w-6 h-6 text-[var(--color-soft-grey)]" />,
      image: "/hillfort_school.jpg"
    },
    {
      qualification: "Secondary Education — Class X",
      institution: "GRG Matriculation Higher Secondary School",
      duration: null,
      status: null,
      description: "Completed secondary school education, establishing the foundation for further learning.",
      icon: <BookOpen className="w-6 h-6 text-[var(--color-soft-grey)]" />,
      image: "/grg_school.jpg"
    }
  ];

  return (
    <div className="animate-fade-in flex flex-col gap-10">
      <div className="space-y-2 text-center md:text-left border-b border-[var(--color-border-light)] pb-6">
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-[var(--color-charcoal)]">Education</h1>
        <p className="text-lg text-[var(--color-soft-grey)]">Where the foundations were laid.</p>
      </div>

      <div className="flex flex-col gap-6">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-white border border-[var(--color-border-light)] p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0 mt-1 hidden sm:block">
                <div className="w-12 h-12 bg-gray-50 border border-[var(--color-border-light)] rounded-md flex items-center justify-center">
                  {edu.icon}
                </div>
              </div>
              
              <div className="flex-grow space-y-3">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--color-charcoal)] font-serif">{edu.qualification}</h3>
                  <p className="text-lg font-medium text-[var(--color-soft-grey)] mt-1">{edu.institution}</p>
                </div>
                
                {(edu.duration || edu.status) && (
                  <div className="flex flex-wrap gap-3 font-medium text-sm">
                    {edu.duration && (
                      <span className="px-3 py-1 bg-gray-50 border border-[var(--color-border-light)] text-[var(--color-charcoal)] rounded-md">
                        {edu.duration}
                      </span>
                    )}
                    {edu.status && (
                      <span className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent rounded-md">
                        {edu.status}
                      </span>
                    )}
                  </div>
                )}
                
                <p className="text-[var(--color-soft-grey)] leading-relaxed pt-2">
                  {edu.description}
                </p>
              </div>

              {edu.image && (
                <div className="w-full md:w-64 lg:w-72 h-48 md:h-auto flex-shrink-0 rounded-md overflow-hidden border border-[var(--color-border-light)] relative">
                  <img 
                    src={edu.image} 
                    alt={edu.institution} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
