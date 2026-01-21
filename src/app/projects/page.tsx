'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, ProjectRegion, ProjectCountry } from '@/types/project';
import { getProjects } from '@/lib/projects';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectModal from '@/components/projects/ProjectModal';

// Helper to group flat projects list into Regions -> Countries
const groupProjects = (projects: Project[]): ProjectRegion[] => {
  const regions: Record<string, ProjectRegion> = {};

  // Define default regions to ensure order
  const defaultRegions = ['West Africa', 'East Africa', 'Southern Africa', 'Central Africa'];
  defaultRegions.forEach(name => {
    regions[name] = { id: name.toLowerCase().replace(' ', '-'), name, countries: [] };
  });

  projects.forEach(project => {
    const regionName = project.region || 'Other';
    const countryName = project.country || 'Unknown';

    if (!regions[regionName]) {
      regions[regionName] = { 
        id: regionName.toLowerCase().replace(/\s+/g, '-'), 
        name: regionName, 
        countries: [] 
      };
    }

    const region = regions[regionName];
    let country = region.countries.find(c => c.name === countryName);
    
    if (!country) {
      country = { name: countryName, projects: [] };
      region.countries.push(country);
    }

    country.projects.push(project);
  });

  // Filter out empty regions and sort countries
  return Object.values(regions)
    .filter((r: ProjectRegion) => r.countries.length > 0)
    .map((r: ProjectRegion) => ({
      ...r,
      countries: r.countries.sort((a: ProjectCountry, b: ProjectCountry) => a.name.localeCompare(b.name))
    }));
};

const Projects = () => {
  const [activeRegion, setActiveRegion] = useState<string>('');
  const [regions, setRegions] = useState<ProjectRegion[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getProjects();
        const grouped = groupProjects(data);
        setRegions(grouped);
        if (grouped.length > 0) {
          setActiveRegion(grouped[0].id);
        }
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#FFFA84] selection:text-[#062516]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-[#062516]">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80')] bg-cover bg-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#062516]/50 via-[#062516]/70 to-[#062516]" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#FFFA84]/10 text-[#FFFA84] text-sm font-semibold tracking-wider mb-6 border border-[#FFFA84]/20">
              OUR GLOBAL FOOTPRINT
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
              Featured <span className="text-[#FFFA84]">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Transforming the energy landscape across Africa with sustainable, innovative solutions.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-20 -mt-20">
        
        {loading ? (
             <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFFA84]"></div>
             </div>
        ) : (
          <>
            {/* Region Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  className={`px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-lg ${
                    activeRegion === region.id
                      ? 'bg-[#FFFA84] text-[#062516] scale-105 shadow-[#FFFA84]/30'
                      : 'bg-white text-[#062516] border border-[#062516]/10 hover:border-[#062516]/30'
                  }`}
                >
                  {region.name}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="min-h-[600px]">
              <AnimatePresence mode="wait">
                {regions.map((region) => (
                  region.id === activeRegion && (
                    <motion.div
                      key={region.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-16"
                    >
                      {region.countries.map((country: ProjectCountry, idx: number) => (
                        <div key={country.name}>
                             <div className="flex items-center gap-4 mb-8">
                                <h3 className="text-3xl font-bold text-[#062516]">{country.name}</h3>
                                <div className="h-px bg-gray-200 flex-grow"></div>
                             </div>
                             
                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {country.projects.map((project: Project) => (
                                    <ProjectCard 
                                        key={project.id} 
                                        project={project} 
                                        onClick={openProject} 
                                    />
                                ))}
                             </div>
                        </div>
                      ))}
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </>
        )}
        
        <div className="mt-16 text-center text-sm text-gray-400">
          <p>* Select a project to view detailed case study.</p>
        </div>

      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <Footer />
    </div>
  );
};

export default Projects;
