'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types/project';
import { getProjects } from '@/lib/projects';
import { getProjectSettings, ProjectSettings } from '@/lib/projectSettings';
import ProjectCard from '@/components/projects/ProjectCard';
import { ChevronDown, Filter, X, Zap } from 'lucide-react';
import Link from 'next/link';

interface FilterState {
  countries: string[];
  regions: string[];
  statuses: string[];
  technologies: string[];
  capacities: string[];
}

const FilterDropdown = ({ 
    label, 
    options, 
    selected, 
    onChange 
}: { 
    label: string, 
    options: string[], 
    selected: string[], 
    onChange: (val: string) => void 
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border transition-all text-sm font-medium ${
                    selected.length > 0 
                    ? 'bg-[#062516] text-[#FFFA84] border-[#062516]' 
                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                }`}
            >
                {label} {selected.length > 0 && `(${selected.length})`}
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div className="fixed inset-0 z-30" onClick={() => setIsOpen(false)} />
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 z-40 max-h-80 overflow-y-auto p-2"
                        >
                            {options.sort().map(opt => (
                                <button
                                    key={opt}
                                    onClick={() => onChange(opt)}
                                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                                        selected.includes(opt)
                                        ? 'bg-[#062516]/5 text-[#062516] font-bold'
                                        : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                                >
                                    {opt}
                                    {selected.includes(opt) && (
                                        <div className="w-2 h-2 rounded-full bg-[#062516]" />
                                    )}
                                </button>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

const ProjectsPage = () => {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [settings, setSettings] = useState<ProjectSettings | null>(null);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState<FilterState>({
    countries: [],
    regions: [],
    statuses: [],
    technologies: [],
    capacities: []
  });

  const [availableCapacities, setAvailableCapacities] = useState<string[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [projectsData, settingsData] = await Promise.all([
          getProjects(),
          getProjectSettings()
        ]);
        
        setAllProjects(projectsData);
        setSettings(settingsData);
        
        // Extract unique capacities
        const capacities = Array.from(new Set(projectsData.map(p => p.capacity).filter(Boolean))) as string[];
        setAvailableCapacities(capacities);
        
        setFilteredProjects(projectsData);
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    let result = allProjects;

    if (filters.regions.length > 0) {
      result = result.filter(p => filters.regions.includes(p.region));
    }
    if (filters.countries.length > 0) {
      result = result.filter(p => filters.countries.includes(p.country));
    }
    if (filters.statuses.length > 0) {
      result = result.filter(p => filters.statuses.includes(p.status));
    }
    if (filters.technologies.length > 0) {
      result = result.filter(p => filters.technologies.includes(p.technology || ''));
    }
    if (filters.capacities.length > 0) {
      result = result.filter(p => filters.capacities.includes(p.capacity || ''));
    }

    setFilteredProjects(result);
  }, [filters, allProjects]);

  const toggleFilter = (category: keyof FilterState, value: string) => {
    setFilters(prev => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  const clearFilters = () => {
    setFilters({
      countries: [],
      regions: [],
      statuses: [],
      technologies: [],
      capacities: []
    });
  };

  const activeFiltersCount = Object.values(filters).reduce((acc, curr) => acc + curr.length, 0);

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-[#FFFA84] selection:text-[#062516]">
      <Navbar />
      
      {/* Banner Section */}
      <div className="relative h-[60vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-[#062516]">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466611653911-95282fc3656b?auto=format&fit=crop&q=80')] bg-cover bg-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#062516]/50 to-[#062516]" />
        
        <div className="relative z-10 text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">
                    OUR <span className="text-[#FFFA84]">PROJECTS</span>
                </h1>
                <div className="h-2 w-32 bg-[#FFFA84] mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(255,250,132,0.4)]" />
                <p className="text-gray-300 text-lg md:text-xl font-medium max-w-2xl mx-auto tracking-wide uppercase opacity-80">
                    Innovative Energy Solutions Powering Africa's Future
                </p>
            </motion.div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-[80px] z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm py-6">
        <div className="container mx-auto px-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-[#062516] font-bold mr-4 text-sm uppercase tracking-widest">
                <Filter className="w-4 h-4" />
                Filters
            </div>

            <FilterDropdown 
                label="Region" 
                options={settings?.regions || []} 
                selected={filters.regions} 
                onChange={(val) => toggleFilter('regions', val)} 
            />
            <FilterDropdown 
                label="Country" 
                options={settings?.countries || []} 
                selected={filters.countries} 
                onChange={(val) => toggleFilter('countries', val)} 
            />
            <FilterDropdown 
                label="Status" 
                options={settings?.statuses || []} 
                selected={filters.statuses} 
                onChange={(val) => toggleFilter('statuses', val)} 
            />
            <FilterDropdown 
                label="Technology" 
                options={settings?.technologies || []} 
                selected={filters.technologies} 
                onChange={(val) => toggleFilter('technologies', val)} 
            />
             <FilterDropdown 
                label="Power" 
                options={availableCapacities} 
                selected={filters.capacities} 
                onChange={(val) => toggleFilter('capacities', val)} 
            />

            {activeFiltersCount > 0 && (
                <button 
                    onClick={clearFilters}
                    className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-red-600 hover:bg-red-50 rounded-full transition-colors ml-auto"
                >
                    <X className="w-4 h-4" />
                    Reset All
                </button>
            )}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="container mx-auto px-6 py-24 md:py-32">
        {/* Featured Showcase Banner */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 bg-[#062516] rounded-[40px] overflow-hidden shadow-2xl relative"
        >
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1466611653911-95282fc3656b?auto=format&fit=crop&q=80')] bg-cover bg-center" />
            <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-2xl text-center md:text-left">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFFA84] text-[#062516] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                        Featured Prototype
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                        Experience Our <span className="text-[#FFFA84]">Premium</span> Design System
                    </h2>
                    <p className="text-white/70 text-lg font-medium mb-8 leading-relaxed">
                        Step into a full-fledged project demonstration featuring cinematic high-resolution visuals, technical depth, and our flagship renewable energy vision.
                    </p>
                    <Link 
                        href="/projects/demo" 
                        className="inline-flex items-center gap-3 px-10 py-5 bg-[#FFFA84] text-[#062516] rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
                    >
                        View Full Showcase
                        <Zap className="w-4 h-4" />
                    </Link>
                </div>
                <div className="relative w-full md:w-80 aspect-square">
                    <div className="absolute inset-0 bg-[#FFFA84]/10 rounded-full animate-pulse" />
                    <div className="absolute inset-4 bg-white/5 rounded-full backdrop-blur-3xl border border-white/10 flex items-center justify-center">
                        <Zap className="w-20 h-20 text-[#FFFA84] animate-bounce" />
                    </div>
                </div>
            </div>
        </motion.div>

        {loading ? (
             <div className="flex flex-col items-center justify-center py-40 gap-4">
                <Loader2 className="w-10 h-10 animate-spin text-[#062516]" />
                <p className="text-black font-bold tracking-widest uppercase text-xs">Loading Projects Library</p>
             </div>
        ) : (
          <div>
            <div className="flex justify-between items-end py-8 px-2">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black text-[#062516] tracking-tight mb-2">Project Portfolio</h2>
                    <p className="text-black font-bold uppercase text-[10px] tracking-widest opacity-60">Showing {filteredProjects.length} projects across Africa</p>
                </div>
            </div>

            {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-8">
                    {filteredProjects.map((project) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-40 bg-white rounded-[40px] border border-dashed border-gray-200">
                    <div className="p-6 rounded-full bg-gray-50 w-fit mx-auto mb-6">
                        <Zap className="w-12 h-12 text-gray-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">No projects found</h3>
                    <p className="text-gray-500 max-w-md mx-auto">We couldn't find any projects matching your current filters. Try adjusting your selection.</p>
                    <button 
                        onClick={clearFilters}
                        className="mt-8 px-8 py-3 bg-[#062516] text-[#FFFA84] rounded-full font-bold transition-transform hover:scale-105"
                    >
                        Clear All Filters
                    </button>
                </div>
            )}
          </div>
        )}
      </main>


      <Footer />
    </div>
  );
};

// Simple Loader component
const Loader2 = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

export default ProjectsPage;
