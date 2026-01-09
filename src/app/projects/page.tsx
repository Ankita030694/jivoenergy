'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, CheckCircle2, Factory, Sun, Battery, Zap } from 'lucide-react';

interface ProjectCountry {
  name: string;
  projects: string[];
}

interface ProjectRegion {
  id: string;
  name: string;
  countries: ProjectCountry[];
}

const projectsData: ProjectRegion[] = [
  {
    id: 'east',
    name: 'East Africa',
    countries: [
      {
        name: 'Uganda',
        projects: [
          '23 MWp Kabulasoke Solar PV Plant',
          '23 MWp Nkonge Solar PV Plant',
          '15 MWp Tilenga Solar PV Plant#',
          '100 MWp Solar PV Projects',
          '25 MW (Ddundu) Waste to Energy Project*',
          '10 T/Day Biogas Project'
        ]
      },
      {
        name: 'Ethiopia',
        projects: [
          '7 Mini Grids for EEU (2MWp + 8MWh)#',
          '15 Mini Grids for EEU (5MWp + 18MWh)',
          '10 T/Day Biocharcoal Plant*'
        ]
      },
      {
        name: 'Kenya',
        projects: [
          'Solar PV & Storage in Kakuma Refugee Camp (UNHCR)',
          'Solar PV Plants for Malls, Offices and Factories',
          'Solar PV Plants for Data Centres',
          '40 MWp Solar PV Plant',
          '10 T/Day Biocharcoal Plant'
        ]
      }
    ]
  },
  {
    id: 'west',
    name: 'West Africa',
    countries: [
      {
        name: 'Burkina Faso',
        projects: [
          'Solar PV Power Plant in ZIGA#'
        ]
      },
      {
        name: 'Cape Verde',
        projects: [
          'Solar PV & Storage for Desalination, Water Pumping, Offices, Mall, Commercial Complex & Health Centres'
        ]
      },
      {
        name: 'Liberia',
        projects: [
          'Solar PV & Storage for 39 Health Centres'
        ]
      },
      {
        name: 'Senegal',
        projects: [
          'Solar PV for water pumping in 5 irrigation schemes'
        ]
      },
      {
        name: 'São Tomé and Príncipe',
        projects: [
          'Santo Amaro Solar PV Power Plant'
        ]
      }
    ]
  },
  {
    id: 'southern',
    name: 'Southern Africa',
    countries: [
      {
        name: 'Malawi',
        projects: [
          'Solar PV & Storage in Mzuzu (2MWp + 5MWh)',
          'Grid‐forming BESS Project in Lilongwe (20MW/40MWh)#'
        ]
      },
      {
        name: 'Zimbabwe',
        projects: [
          'Solar PV for Pepsi Bottling Plant',
          'Solar PV & Storage for Data Centres',
          'Solar PV for Mining Companies'
        ]
      },
      {
        name: 'Zambia',
        projects: [
          '20MW+ Solar PV Projects'
        ]
      }
    ]
  }
];

const Projects = () => {
  const [activeRegion, setActiveRegion] = useState<string>(projectsData[0].id);

  const getProjectIcon = (project: string) => {
    if (project.toLowerCase().includes('solar')) return <Sun className="w-5 h-5 text-[#FFFA84]" />;
    if (project.toLowerCase().includes('storage') || project.toLowerCase().includes('battery') || project.includes('BESS')) return <Battery className="w-5 h-5 text-[#FFFA84]" />;
    if (project.toLowerCase().includes('plant') || project.toLowerCase().includes('factory')) return <Factory className="w-5 h-5 text-[#FFFA84]" />;
    return <Zap className="w-5 h-5 text-[#FFFA84]" />;
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
        
        {/* Region Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {projectsData.map((region) => (
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
            {projectsData.map((region) => (
              region.id === activeRegion && (
                <motion.div
                  key={region.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {region.countries.map((country, idx) => (
                    <motion.div
                      key={country.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-[#062516]/20 transition-all duration-300"
                    >
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-[#062516]/5 rounded-xl mr-4 group-hover:bg-[#062516] group-hover:text-[#FFFA84] transition-colors duration-300 text-[#062516]">
                          <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#062516]">{country.name}</h3>
                      </div>
                      
                      <ul className="space-y-4">
                        {country.projects.map((project, pIdx) => (
                          <li key={pIdx} className="flex items-start group/item">
                            <div className="mt-1 mr-3 flex-shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity">
                              <CheckCircle2 className="w-5 h-5 text-[#062516]" />
                            </div>
                            <span className="text-gray-600 font-medium leading-relaxed group-hover/item:text-[#062516] transition-colors">
                              {project.replace(/[#*]/g, '')}
                              {project.includes('#') && <sup className="text-[#062516] font-bold ml-1">*</sup>}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
        
        <div className="mt-16 text-center text-sm text-gray-400">
          <p>* Additional project notes or specific phases under development.</p>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Projects;
