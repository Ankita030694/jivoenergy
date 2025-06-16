'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Solar Energy Solutions",
    description: "Revolutionary solar panel installation and maintenance services for residential and commercial properties. Our cutting-edge technology ensures maximum energy efficiency and sustainability.",
    image: "/solar-project.jpg"
  },
  {
    id: 2,
    title: "Wind Power Integration",
    description: "State-of-the-art wind turbine systems designed for optimal energy generation. We provide comprehensive solutions from installation to maintenance.",
    image: "/wind-project.jpg"
  },
  {
    id: 3,
    title: "Smart Grid Technology",
    description: "Advanced smart grid solutions that optimize energy distribution and consumption. Our systems provide real-time monitoring and automated energy management.",
    image: "/grid-project.jpg"
  }
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextProject();
      } else if (e.key === 'ArrowLeft') {
        prevProject();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="w-full py-16 bg-[#0A5C35] relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        //   filter: 'blur(1px)',
          opacity: 0.97,
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Projects</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Project Image */}
          <div className="w-full md:w-1/2 relative h-[400px]">
            <div className="w-full aspect-video relative rounded-lg overflow-hidden shadow-lg">
            <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src="/power.mp4" type="video/mp4" />
        </video>
            </div>
          </div>
          
          {/* Project Description */}
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-3xl font-semibold text-white">{projects[currentProject].title}</h3>
            <p className="text-gray-100 leading-relaxed">{projects[currentProject].description}</p>
            
            {/* Project Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentProject === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevProject}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-white/30 transition-colors duration-300"
        aria-label="Previous project"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextProject}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-white/30 transition-colors duration-300"
        aria-label="Next project"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default Projects; 