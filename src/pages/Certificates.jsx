import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificatesData = [
    {
      title: "Smart India Hackathon 2026",
      organization: "PSG College of Arts & Science",
      description: "Participated in the Internal Hackathon for Smart India Hackathon 2026 held at GRD Auditorium, PSG College of Arts & Science.",
      image: "/cert_sih.jpg"
    },
    {
      title: "Bharatiya Antariksh Hackathon 2026",
      organization: "ISRO & Hack2skill",
      description: "Recognized for participation and successful idea submission in the national space innovation initiative presented by ISRO.",
      image: "/cert_isro.jpg"
    },
    {
      title: "Build with AI Bootcamp",
      organization: "Google for Developers",
      description: "Demonstrated technical skills to build AI agents, architect workflows, and integrate generative AI into production-ready systems.",
      image: "/cert_google.jpg"
    },
    {
      title: "Digital Tools Workshop for Business",
      organization: "E-Summit '26, PSG CAS",
      description: "Participated in the Digital Tools Workshop organized by the School of Commerce in association with Entrepreneurship Cell.",
      image: "/cert_esummit.png"
    },
    {
      title: "Nexotech Hackathon",
      organization: "Tec Mac Computer Education",
      description: "Actively participated in the Nexotech Hackathon, showcasing creativity, problem-solving, and teamwork in building innovative solutions.",
      image: "/cert_tecmac.png"
    },
    {
      title: "Body Language: Key to Professional Success",
      organization: "NPTEL Online Certification (Elite)",
      description: "Successfully completed the course funded by the MoE, Govt. of India, achieving Elite certification with a consolidated score of 65%.",
      image: "/cert_nptel.png"
    },
    {
      title: "International Conference on Emerging Trends",
      organization: "PSG College of Arts & Science",
      description: "Participated and presented a paper on 'Emerging Trends in Technology and Digital Transformation for Sustainable Business Development'.",
      image: "/cert_psg_conf.png"
    },
    {
      title: "Startup Sparks Competition",
      organization: "PSG College of Arts & Science",
      description: "Won a place in the Intra-Department Competition on Entrepreneurship Ecosystem organised by the Department of Commerce (CA).",
      image: "/cert_psg_startup.png"
    },
    {
      title: "Business Quiz Competition",
      organization: "PSG College of Arts & Science",
      description: "Secured a place in the Intra-Department Business Quiz Competition organised by the Department of Commerce with Computer Applications.",
      image: "/cert_psg_quiz.png"
    },
    {
      title: "Junior Grade Typewriting English",
      organization: "Government of Tamil Nadu",
      description: "Passed the Government Technical Examinations (30 Words per Minute) in First Class with Distinction.",
      image: "/cert_typing.png"
    },
    {
      title: "Internship Certificate",
      organization: "Riverside Tea Plantations",
      description: "Successfully completed a 20-day internship at Riverside Tea Plantations in Kotagiri.",
      image: "/cert_riverside.png"
    },
    {
      title: "QuizOff 2026: India's Biggest AI Quiz",
      organization: "Unstop & CampusCrew",
      description: "Recognized for competing among 5,25,000+ students from 48,500+ institutions globally in India's Biggest AI Quiz.",
      image: "/cert_quizoff.png"
    }
  ];

  return (
    <div className="animate-fade-in flex flex-col gap-10">
      <div className="space-y-2 text-center md:text-left border-b border-[var(--color-border-light)] pb-6">
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-[var(--color-charcoal)]">Certificates</h1>
        <p className="text-lg text-[var(--color-soft-grey)]">Learning, building, and growing through every opportunity.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((cert, index) => (
          <div key={index} className="bg-white border border-[var(--color-border-light)] rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden group">
            <div className="aspect-[4/3] w-full bg-[#f8f8f8] p-6 flex items-center justify-center border-b border-[var(--color-border-light)] overflow-hidden">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-full object-contain shadow-sm border border-gray-200 group-hover:scale-105 transition-transform duration-500 bg-white" 
              />
            </div>
            
            <div className="p-6 flex flex-col flex-grow text-center md:text-left">
              <h3 className="text-xl font-bold text-[var(--color-charcoal)] font-serif mb-2">{cert.title}</h3>
              <p className="text-accent font-medium mb-4">{cert.organization}</p>
              <p className="text-[var(--color-soft-grey)] flex-grow leading-relaxed mb-6">{cert.description}</p>
              
              <div className="mt-auto">
                <a 
                  href={cert.image} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-5 py-2.5 bg-gray-50 border border-[var(--color-border-light)] text-[var(--color-charcoal)] font-medium rounded-md hover:border-accent hover:text-accent transition-colors"
                >
                  View Full Image
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

export default Certificates;
